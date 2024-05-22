import communityChat from "../../img/communityChat.png";
import schedule from "../../img/schedule.png";
import beer from "../../img/beer.png";
import communityStore from "../../stores/community";
import JoinModal from "../../components/modals/JoinModal";
import Chat from "../../components/modals/chat/Chat";
import modalStore from "../../stores/modal";
import CreateRoom from "../../components/modals/chat/createroom/CreateRoom";
import JoinRoom from "../../components/modals/chat/joinroom/JoinRoom";
import InviteRoomMember from "../../components/modals/chat/room_member/inviteRoomMember/InviteRoomMember";
import userStore from "../../stores/user";
import { ChangeEvent, useEffect, useState } from "react";
import LeftSection from "../Community/ClickCommunity/LeftSection/LeftSection";
import { deleteCommunity, joinCommunity } from "../../Api/community";
import { updateImg } from "../../Api/user";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function CommunitySetting() {
  const { selectedCommunity, community, selectCommunity, fetchCommunity } = communityStore();
  const [communityThumbnail, setCommunityThumbnail] = useState<string>(selectedCommunity.thumbnail_url);
  const [communityDescription, setCommunityDescription] = useState<string>(selectedCommunity.description);
  const { modals, modalControl } = modalStore();
  const { loginUser } = userStore();
  const [myImage, setMyImage] = useState<string | undefined>(loginUser.profile_picture);
  const navigate = useNavigate();

  const handleChat = () => {
    if (Object.values(modals).some((modal) => modal === true)) {
      modalControl("closeAll");
    } else {
      modalControl("chat");
    }
  };

  // const onChangeImage = (e: ChangeEvent<HTMLInputElement>, setting: string) => {
  //   const file = e.target.files && e.target.files[0];
  //   if (file) {
  //     const imageUrl = URL.createObjectURL(file);
  //     switch (setting) {
  //       case "profile":
  //       setMyImage(imageUrl);
  //       return;
  //       case "community":
  //       setCommunityThumbnail(imageUrl);
  //       return;  
  //     }
  //   }
  // };

  const onChangeImage = async (e: ChangeEvent<HTMLInputElement>, setting: string) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      try {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', `${process.env.REACT_APP_UPLOAD_PRESETS_NAME}`);
        const response = await axios.post(`https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_NAME}/image/upload`, formData);
        const imageUrl = response.data.secure_url;
        switch (setting) {
                case "profile":
                setMyImage(imageUrl);
                return;
                case "community":
                setCommunityThumbnail(imageUrl);
                return;  
              }
      } catch (error) {
        console.error('이미지 업로드 실패:', error);
      }
    }
  };

  const profileSave = () => {
    const updateCommunity = community.map((u) => {
      if(u.id === selectedCommunity.id){
        const updateUser = u.member.map(mem => {
          if(mem.id === loginUser.id){
            return {
              ...mem,
              profile:{
                ...mem.profile,
                image: myImage
              }
            }
          }
          return mem;
        })
        return {
          ...u,
          member:updateUser
        }
      }
      return u;
    });
    const [filter] = updateCommunity.filter((community) => community.id === selectedCommunity.id);
    joinCommunity(filter).then(() => fetchCommunity());
    userUpdate();
  }

  const communitySettingSave = () => {  
    const updateCommunity = community.map((u)=> {
      if(u.id === selectedCommunity.id){
        return {
          ...u,
          thumbnail_url: communityThumbnail,
          description: communityDescription
        }
      }
      return u;
    })
    const [filter] = updateCommunity.filter((community) => community.id === selectedCommunity.id);
    joinCommunity(filter).then(() => fetchCommunity());
  }

  const leaveCommunity = () => {
    const updatedCommunity = community.map(u => {
      if (u.id === selectedCommunity.id) {
          const updatedMembers = u.member.filter(mem => mem.id !== loginUser.id);
          return {
              ...u,
              member: updatedMembers
          };
      }
      return u;
    });
    const [filter] = updatedCommunity.filter((community) => community.id === selectedCommunity.id);
    joinCommunity(filter).then(() => fetchCommunity());
  }

  const destroy = () => {
    const id = selectedCommunity.id;
    deleteCommunity(id).then(() => navigate('/'));
  }

  const userUpdate = () => {
    updateImg(loginUser, myImage);
  }

  useEffect(() => {
    const [filterItem] = community.filter(
      (item) => item.id === selectedCommunity.id
    );
    selectCommunity(filterItem);
  }, [community]);

  return (
    <div>
      <div className="flex mt-[200px] mb-10 relative">
        {modals.joinModal && (
          <JoinModal
            modalControl={modalControl}
            selectedCommunity={selectedCommunity}
          />
        )}
        {modals.createChatRoomModal && (
          <CreateRoom modals={modals} modalControl={modalControl} />
        )}
        {modals.inviteRoomMember && (
          <InviteRoomMember modals={modals} modalControl={modalControl} />
        )}

        {/* 모임정보 */}
        <LeftSection
          selectedCommunity={selectedCommunity}
          loginUser={loginUser}
          modalControl={modalControl}
        />

        {/* 모임피드 */}
        <div className="flex absolute left-[650px]">
          <div className="border border-black rounded-[10px] w-[660px] mb-10">
            <div className="flex items-center border-b border-black h-[60px] pl-10">
              <span>프로필 설정</span>
            </div>
            <div className="flex justify-center items-center border-b border-black h-[360px]">
              <div className="flex flex-col border border-black w-[450px] h-[260px]">
                <div className="flex flex-col justify-center items-center p-[25px] gap-y-5">
                <label htmlFor="profileInput" className="border border-black rounded-[50%] w-[90px] h-[90px] flex justify-center items-center">
                    {loginUser.profile_picture && <img src={myImage} alt="myImage" className="rounded-[50%] w-full h-full"/>}
                    <input type="file"
                    id="profileInput"
                    onChange={(e) => onChangeImage(e, "profile")}
                    style={{ display: "none" }}
                    />
                </label>
                  <span>{`${loginUser.name}님의 프로필`}</span>
                </div>
                <button className="w-[60px] h-[40px] text-white bg-blue-500 rounded-[5px] self-end mr-10"
                onClick={profileSave}
                >
                  저장
                </button>
              </div>
            </div>
            <div className="flex items-center border-b border-black h-[60px] pl-10">
              <span>모임 프로필 설정 </span>
            </div>
            <div className="flex justify-center items-center border-b border-black h-[360px]">
              <div className="flex flex-col border border-black w-[450px] h-[260px]">
                <div className="flex flex-col justify-center items-center p-[25px] gap-y-5">
                  <div className="flex gap-x-5">
                    <div className="flex flex-col items-center gap-y-7">
                    <label htmlFor="thumbnailInput" className="border border-black w-[150x] h-[150px] flex justify-center items-center">
                    {communityThumbnail && <img src={communityThumbnail} alt="community_thumbnail" className="w-full h-full"/>}
                    <input type="file"
                    id="thumbnailInput"
                    onChange={(e) => onChangeImage(e, "community")}
                    style={{ display: "none" }}
                    />
                </label>
                      <span>{selectedCommunity.communityName}</span>
                    </div>
                    <div className="flex flex-col gap-y-5">
                      <input
                        type="text"
                        value={communityDescription}
                        onChange={(e)=>setCommunityDescription(e.target.value)}
                        className="w-[220px] h-[150px] border border-black"
                      />
                      <button className="w-[60px] h-[40px] text-white bg-blue-500 rounded-[5px] self-end"
                      onClick={communitySettingSave}
                      >
                        저장
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center w-[300px]"></div>
                </div>
              </div>
            </div>
            <div className="flex items-center border-b border-black h-[60px] pl-10">
              <span>모임 관리 </span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="flex justify-between items-center border-b border-black w-[560px] p-3">
                <span>모임 탈퇴</span>
                <button className="border rounded-[5px] w-[75px] h-[40px] text-white bg-red-500"
                onClick={leaveCommunity}
                >
                  탈퇴
                </button>
              </div>
              <div className="flex justify-between items-center border-b border-black w-[560px] p-3 mb-10">
                <span>모임 삭제</span>
                <button className="border rounded-[5px] w-[75px] h-[40px] text-white bg-red-500"
                onClick={destroy}
                >
                  삭제
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 사이드기능 */}
        <div className="mr-[80px] mt-[650px] fixed right-1">
          <div className="flex gap-x-[30px]">
            <img src={beer} alt="beer" />
            <img src={schedule} alt="schedule" />
            <img src={communityChat} alt="communityChat" onClick={handleChat} />
          </div>
          {modals.chatModal && (
            <Chat modals={modals} modalControl={modalControl} />
          )}
          {modals.joinRoomModal && (
            <JoinRoom modals={modals} modalControl={modalControl} />
          )}
        </div>
      </div>
    </div>
  );
}

