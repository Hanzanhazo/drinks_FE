import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import { ModalStoreType } from "../../../stores/modal";
import { useEffect, useState } from "react";
import communityStore from "../../../stores/community";
import uuid from "react-uuid";
import { joinCommunity } from "../../../Api/community";
import userStore from "../../../stores/user";
import { CommunityType } from "../../../models/type";


export default function Writing({modals, modalControl}: ModalStoreType) {
    const [values, setValues] = useState('');
    const { community, selectedCommunity, fetchCommunity } = communityStore();
    const { loginUser } = userStore();
    
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

    console.log(values);

    const post = () => {
        const updateCommunity = community.map((u) => {
            if(u.id === selectedCommunity.id){
                return {
                    ...u,
                    posts: [...u.posts, {
                        id: uuid(),
                        content: values,
                        comments:[],
                        likeLists: [],
                        author: loginUser.name,
                        authorImg: loginUser.profile_picture,
                    }]
                }
            }
            return u;
        }) as CommunityType[]
        const [filter] = updateCommunity.filter((community) => community.id === selectedCommunity.id);
        joinCommunity(filter).then(() => fetchCommunity());
        modalControl('writing');
    }

  return (
    <div className="w-screen h-screen inset-0 bg-black/60 z-50 fixed top-0 flex justify-center items-center">
            <div className="flex flex-col justify-center items-center w-[800px] h-[600px] border-2 rounded-[10px] bg-white">
                <div className="flex items-center justify-center">
                    <span className="text-[32px] mb-10">글쓰기</span>
                </div>
                <ReactQuill
                className="w-[700px] h-[300px]"
                modules={modules}
                formats={formats}
                onChange={setValues}
                theme="snow"
                placeholder="글을 작성하세요."
                />
                <div className="flex justify-center gap-x-10 mt-[70px]">
                    <button className="w-[80px] h-[37px] rounded-[10px] bg-blue-500 text-white" onClick={post}>게시</button>
                    <button className="w-[80px] h-[37px] rounded-[10px] bg-red-500 text-white" onClick={()=>modalControl('writing')}>취소</button>
                </div>
            </div>
        </div>
  )
}
