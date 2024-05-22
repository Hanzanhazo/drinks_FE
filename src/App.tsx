import "./App.css";
import { Outlet, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import PopularCommunity from "./pages/PopularCommunity";
import RecipesPage from "./pages/RecipesPage";
import NewCommunity from "./pages/NewCommunity";
import Announcement from "./pages/Announcement";
import Header from "./components/header/Header";
import CreateCommunity from "./pages/CreateCommunity/CreateCommunity";
import Community from "./pages/Community/Community";
import CommunityMember from "./pages/CommunityMember/CommunityMember";
import CreateRecipe from "./pages/Recipe/CreateRecipe";
import EditRecipe from "./pages/Recipe/EditRecipe";
import RecipeDetail from "./pages/Recipe/RecipeDetail";
import AlcoholicCategory from "./components/AlcoholicCategory/AlcoholicCategory";
import SignUp from "./pages/Login/SignUp";
import Login from "./pages/Login/Login";
import FindId from "./pages/Login/FindId";
import LoginTest from "./pages/LoginTest";
import FindPassword from "./pages/Login/FindPassword";
import ChangePassword from "./pages/Login/ChangePassword";
import AlcoholsPage from "./pages/Alcohols/AlcoholsPage";

import AlcoholDescript from "./pages/Alcohols/AlcoholDescript";
import AlcoholsExplantion from "./pages/AlcoholsExplantion/AlcoholsExplantion";

import CommunitySetting from "./pages/CommunitySetting/CommunitySetting";

const LayOut = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<LayOut />}>
        <Route index element={<Main />}></Route>
        <Route
          path="/AlcoholsExplantion"
          element={<AlcoholsExplantion />}
        ></Route>
        <Route path="/Alcohols" element={<AlcoholsPage />}></Route>
        <Route
          path="/Alcohols/AlcoholDescript"
          element={<AlcoholDescript />}
        ></Route>
        <Route path="/logintest" element={<LoginTest />}></Route>
        <Route path="/popularCommunity" element={<PopularCommunity />}></Route>
        <Route path="/recipe" element={<RecipesPage />}></Route>
        <Route path="/newCommunity" element={<NewCommunity />}></Route>
        <Route path="/announcement" element={<Announcement />}></Route>
        <Route path="/createCommunity" element={<CreateCommunity />}></Route>
        <Route path="/communitySetting" element={<CommunitySetting />}></Route>
        <Route path="/community/:id" element={<Community />}></Route>
        <Route
          path="/popularCommunity/community/:id"
          element={<Community />}
        ></Route>
        <Route path="/communityMember" element={<CommunityMember />}></Route>
        <Route path="/recipe/createrecipe" element={<CreateRecipe />}></Route>
        <Route path="/recipe/editrecipe" element={<EditRecipe />}></Route>
        <Route
          path="/recipe/RecipeDetail/:index"
          element={<RecipeDetail />}
        ></Route>
        <Route path="/recipe/test" element={<AlcoholicCategory />}></Route>
      </Route>
      <Route path="/login/signup" element={<SignUp></SignUp>}></Route>
      <Route path="/Login" element={<Login></Login>}></Route>
      <Route path="/Login/findid" element={<FindId></FindId>}></Route>
      <Route
        path="/Login/findpassword"
        element={<FindPassword></FindPassword>}
      ></Route>
      <Route
        path="/Login/findpassword/changepassword"
        element={<ChangePassword></ChangePassword>}
      ></Route>
    </Routes>
  );
}

export default App;
