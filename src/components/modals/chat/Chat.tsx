import { useEffect, useState } from "react";
import addChatRoom from "../../../img/addChatRoom.png";
import ChatRoom from "../../community/chatroom/ChatRoom";
import { ModalStoreType } from "../../../stores/modal";
import communityStore from "../../../stores/community";
import { ChatRoomType } from "../../../models/type";


export default function Chat({modalControl}: ModalStoreType) {
  const { community, selectedCommunity } = communityStore();
  const [chatRoom, setChatRoom] = useState<any>([]);
  
  
  const getChatRoom = () => {
    const room = community.find((c) => c.id === selectedCommunity.id);
    if (room) {
      setChatRoom(room.chatRoom);
    }
  }

  useEffect(()=> {
    getChatRoom();
  },[community])

  return (
    <div className="border border-black rounded-[10px] w-[490px] h-[685px] absolute top-[-690px] right-[-25px]">
        <div className="flex justify-between p-10">
            <span className="text-[32px]">채팅</span>
            <img src={addChatRoom} alt="addChatRoom" className="cursor-pointer" onClick={()=>modalControl('create')}/>
        </div>
        <div className="h-[520px] overflow-y-scroll">
          {
            chatRoom.map((room:any) => (
              <ChatRoom
              key={room.id}
              id={room.id}
              roomName={room.roomName}
              thumbnailUrl={room.thumbnailUrl}
              initialMembers={room.initialMembers}
              />  
            ))
          }
        </div>
    </div>
  )
}
