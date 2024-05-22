import exit from "../../../../img/exit.png";
import chatmember from "../../../../img/chatmember.png";
import sendIcon from "../../../../img/send.png";
import RoomMember from "../room_member/RoomMember";
import { ModalStoreType } from "../../../../stores/modal";
import communityStore from "../../../../stores/community";
import SockJS from "sockjs-client"
import Stomp from "stompjs"
import { useEffect, useState } from "react";
import Login from "../../../../pages/Login/Login";
import userStore from "../../../../stores/user";

export default function JoinRoom({modals, modalControl}: ModalStoreType) {
  const { loginUser } = userStore();
  const { selectedChatRoom } = communityStore();
  const [stompClient, setStompClient] = useState<Stomp.Client | undefined>();
  const [sendMessage, setSendMessage] = useState<any>('');
  const [messages, setMessages] = useState<any>();
  const [sender, setSender] = useState();

  const exitRoom = () => {
    modalControl('joinRoom');
    modalControl('chat');
  }

  const roomMemberModal = () => {
    modalControl('roomMember');
  }

  const sendBtn = () => {
    const chatMessage = {
        type: 'TALK',
        roomId: selectedChatRoom.id,
        sender: loginUser.name,
        message: sendMessage,
    }

    stompClient?.send(`https://k102d93527f43a.user-app.krampoline.com/app/chat.sendMessage/${selectedChatRoom.id}`, {}, JSON.stringify(chatMessage))
    setSendMessage('');
  }

  const connect_socket = (roomId: string) => {
    const socket = new SockJS("https://k102d93527f43a.user-app.krampoline.com/ws");
    const client = Stomp.over(socket);

    client.connect({}, (frame) => {
        console.log("소켓 연결",frame);
        client.subscribe(`https://k102d93527f43a.user-app.krampoline.com/topic/${roomId}`, (message) => {
            const newMessage = JSON.parse(message.body);
            //console.log(newMessage);
            // setMessages((prev:any) =>[...prev, newMessage]);
            // setSender(JSON.parse(message.body).sender);
        })
    })

    setStompClient(client);
  }
  useEffect(()=> {
    connect_socket(selectedChatRoom.id);
  },[])

  return (
    <div className="border border-black rounded-[10px] w-[490px] h-[685px] absolute top-[-690px] right-[-25px] bg-blue-500">
        {modals.roomMember && <RoomMember modals={modals} modalControl={modalControl}/>}
    <div className="p-10">
        <div className="flex justify-between items-center">
            <div className="flex">
                <div className="border w-[50px] h-[50px] rounded-[5px]"><img src={selectedChatRoom.thumbnailUrl} alt="selectedChatRoomThumbnailUrl" className="w-full h-full rounded-[5px]"/></div>
                <div className="ml-3">
                    <span className="text-[20px]">{selectedChatRoom.roomName}</span>
                    <div className="flex">
                        <img src={chatmember} alt="chatmember" className="w-[15px] h-[15px] cursor-pointer" onClick={roomMemberModal}/>
                        <span className="text-[13px]">{selectedChatRoom.initialMembers.length}</span>
                    </div>
                </div>
            </div>
            <img src={exit} alt="exit" className="w-[40px] h-[40px] cursor-pointer" onClick={exitRoom}/>
        </div>
        <div className="h-[485px] mt-10">
            <div className="flex flex-col">
                <div className="flex justify-start mb-2">
                    <div className="w-[50px] h-[50px] rounded-[50%] border"></div>
                    <div className="flex flex-col ml-2">
                        <span>모임장</span>
                        <div>
                            <div className="flex gap-x-2">
                                <span className="border border-black rounded-[5px] px-2 py-1 bg-white">안녕하세요</span>
                                <span className="text-[10px] self-end">오후 3시</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="flex justify-end mb-2">
                    <div className="flex gap-x-2">
                        <span className="text-[10px] self-end">오후 3시</span>
                        <span className="border border-black rounded-[5px] px-2 py-1 bg-white">안녕하세요</span>
                    </div>
                </div>    
            </div>
        </div>
        <div className="flex justify-center">
            <div className="flex">
                <input type="text"
                value={sendMessage}
                onChange={(e)=>setSendMessage(e.target.value)}
                className="w-[330px] h-[40px] rounded-[10px] px-5" placeholder="메세지를 입력해주세요"/>
                <img src={sendIcon} alt="send" className="ml-3" onClick={sendBtn}/>
            </div>
        </div>
     </div>
    </div>
  )
}
