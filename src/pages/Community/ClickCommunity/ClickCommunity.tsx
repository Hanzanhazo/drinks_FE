import PostCard from "../../../components/community/postCard/PostCard";
import communityStore from "../../../stores/community"
import JoinModal from "../../../components/modals/JoinModal";
import modalStore from "../../../stores/modal";
import CreateRoom from "../../../components/modals/chat/createroom/CreateRoom";
import InviteRoomMember from "../../../components/modals/chat/room_member/inviteRoomMember/InviteRoomMember";
import userStore from "../../../stores/user";
import { useEffect } from "react";
import LeftSection from "./LeftSection/LeftSection";
import Writing from "../../../components/modals/post/Writing";
import EditPost from "../../../components/modals/post/EditPost";
import RightSection from "./RightSection/RightSection";
import { useParams } from "react-router-dom";

export default function ClickCommunity() {
    const { selectedCommunity, community, selectCommunity } = communityStore();
    const { modals, modalControl } = modalStore();
    const { loginUser } = userStore();
    const params = useParams();
    //const navigate = useNavigate();
  
  useEffect(() => {
    const [filterItem]  = community.filter(f => f.id === selectedCommunity.id);
    selectCommunity(filterItem);
  },[community])
    
  return (
    <div>
      {
      // 모임 공개
      selectedCommunity?.isPublic === 'public' ?
      <div className="flex mt-[200px] mb-10 relative">
      {modals.joinModal && <JoinModal modalControl={modalControl} selectedCommunity={selectedCommunity}/>}
      {modals.createChatRoomModal && <CreateRoom modals={modals} modalControl={modalControl}/>}
      {modals.inviteRoomMember && <InviteRoomMember modals={modals} modalControl={modalControl}/>}
      {modals.writingModal && <Writing modals={modals} modalControl={modalControl}/>}
      {modals.editModal && <EditPost modals={modals} modalControl={modalControl}/>}

      {/* 모임정보 */}
      <LeftSection selectedCommunity={selectedCommunity} loginUser={loginUser} modalControl={modalControl}/>

      {/* 모임피드 */}
      <div className="flex-col absolute left-[650px]">
        { 
          selectedCommunity.posts.length > 0 ?
          selectedCommunity.posts.map((post) => (
            <PostCard
            key={post.id}
            id={post.id}
            content={post.content}
            comments={post.comments}
            likeLists={post.likeLists}
            author={post.author}
            authorImg={post.authorImg}
            loginUser={loginUser}
            />
          ))
          :
          <div className="w-[660px] h-[500px] flex justify-center items-center">
            <span className="text-[20px]">포스트가 없습니다.</span>
          </div>
        }
      </div>
      {/* 사이드기능 */}
      <RightSection/>
    </div>
    
    // 모임 비공개
    : 
    <div className="flex mt-[200px] mb-10 relative">
      {/* 모임정보 */}
      <LeftSection selectedCommunity={selectedCommunity} loginUser={loginUser} modalControl={modalControl}/>
      {/* 모임피드 */}
      <div className="absolute left-[850px] top-[250px] text-[20px]">
        <p>모임에서 비공개로 설정하였습니다.</p>
        <p>게시물을 보려면 모임에 가입해주세요.</p>
      </div>
      {/* 사이드기능 */}
      <RightSection/>
    </div>
    }
    </div>
  )
}
