import axios from "axios";

export const createRoom = async (
   name: any,
   thumbnailUrl: any,
   initialMembers: any,
) => {
    try{
        const rqs = await axios.post("https://k102d93527f43a.user-app.krampoline.com/chat/createRoom", {
            name,
            thumbnailUrl,
            initialMembers,
        });
        return rqs.data;
    }catch(err){
        console.log(err);
    }
}
export const joinRoomByName = async (
   roomName: any,
   userId: any,
) => {
    try{
        const rqs = await axios.post("https://k102d93527f43a.user-app.krampoline.com/chat/joinRoomByName", {
            roomName,
            userId,
        });
        return rqs.data;
    }catch(err){
        console.log(err);
    }
}
