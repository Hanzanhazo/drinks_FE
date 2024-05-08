import { ChangeEvent, useEffect, useState } from "react";
import { MemberType } from "../models/type";
import userStore from "../stores/user";
import { useNavigate } from "react-router-dom";

export default function LoginTest() {
    const { loginCheck, getUsers, users } = userStore();
    const [email, setEmail] = useState<string>('');
    const navigate = useNavigate();

const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
  setEmail(e.target.value);
}

const login = (email: string) => {
    const loginUser = users.find((u) => u.email === email);
    
    if(loginUser !== undefined){
        loginCheck(loginUser);
        navigate('/');
    }else{
        console.log("해당 유저는 없습니다.");
    }
}

useEffect(() => {
    getUsers();
},[])

  return (
    <div className='ml-[800px] mt-[500px]'>
        <input type="text"
        value={email}
        onChange={handleEmail}
        className='w-[300px] h-[30px] border-4 border-black mr-5'/>
        <button className='border-4 border-black' onClick={()=>login(email)}>로그인</button>
    </div>
  )
}