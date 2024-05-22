import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import { ModalStoreType } from "../../../stores/modal";
import { useEffect, useState } from "react";
import communityStore from "../../../stores/community";
import uuid from "react-uuid";
import { joinCommunity } from "../../../Api/community";


export default function EditPost({modals, modalControl}: ModalStoreType) {
    const { community, selectedCommunity, editPost, fetchCommunity } = communityStore();
    const [values, setValues] = useState(editPost.content);
    
    const formats = [
        'font',
        'header',
        'bold',
        'italic',
        'underline',
        'strike',
        'blockquote',
        'list',
        'bullet',
        'indent',
        'link',
        'align',
        'color',
        'background',
        'size',
        'h1',
        'image',
      ];

    const modules = {
        toolbar: {
            container: [
              [{ size: ['small', false, 'large', 'huge'] }],
              [{ align: [] }],
              ['bold', 'italic', 'underline', 'strike','image'],
              [{ list: 'ordered' }, { list: 'bullet' }],
              [
                {
                  color: [],
                },
                { background: [] },
              ],
            ],
          }
    }

    const edit = () => {
        const updateCommunity = community.map((u) => {
            if(u.id === selectedCommunity.id){
              const editPosts = u.posts.map(ep => {
                if(ep.id === editPost.id){
                  return {
                    ...ep,
                    content: values
                  }
                }
                return ep;
              })
              return {
                ...u,
                posts:editPosts
              }
            }
            return u;
          });
      
          const [filter] = updateCommunity.filter((community) => community.id === selectedCommunity.id);
          joinCommunity(filter).then(() => fetchCommunity());
          modalControl('edit');
    }

  return (
    <div className="w-screen h-screen inset-0 bg-black/60 z-50 fixed top-0 flex justify-center items-center">
            <div className="flex flex-col justify-center items-center w-[800px] h-[600px] border-2 rounded-[10px] bg-white">
                <div className="flex items-center justify-center">
                    <span className="text-[32px] mb-10">글 수정</span>
                </div>
                <ReactQuill
                className="w-[700px] h-[300px]"
                modules={modules}
                formats={formats}
                value={values}
                onChange={setValues}
                theme="snow"
                placeholder="글을 작성하세요."
                />
                <div className="flex justify-center gap-x-10 mt-[70px]">
                    <button className="w-[80px] h-[37px] rounded-[10px] bg-blue-500 text-white" onClick={edit}>게시</button>
                    <button className="w-[80px] h-[37px] rounded-[10px] bg-red-500 text-white" onClick={()=>modalControl('edit')}>취소</button>
                </div>
            </div>
        </div>
  )
}
