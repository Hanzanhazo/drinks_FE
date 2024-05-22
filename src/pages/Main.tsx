import Recipe from "../components/recipe/Recipe";
import Announcement from "../components/announcement/Announcement";
import Nav from "../components/nav/Nav";
import PopularCommunity from "../components/community/PopularCommunity";
import NewCommunity from "../components/community/NewCommunity";
import { useEffect, useState } from "react";
import communityStore from "../stores/community";
import userStore from "../stores/user";
import { useNavigate } from "react-router-dom";
import modalStore from "../stores/modal";

export default function Main() {
  const { fetchCommunity } = communityStore();
  const { loginUser } = userStore();
  const { modalControl } = modalStore();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(loginUser);
    if(loginUser === undefined || Object.values(loginUser).every(value => value === '')) navigate('/logintest');
    fetchCommunity();
    modalControl('closeAll');
  },[loginUser])

  return (
    <div className="App">
      {/* 네브 */}
      <Nav />
      {/* 컨텐츠 */}
      <div className="flex justify-center mt-10">
        <div className="w-[1200px] flex flex-wrap justify-between">
          {/* 인기모임 */}
          <PopularCommunity />
          {/* 레시피 */}
          <Recipe />
          {/* 새싹모임 */}
          <NewCommunity/>
          {/* 공지사항 */}
          <Announcement />
        </div>
      </div>
    </div>
  );
}
