import React, { useRef, useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  HeartOutlined,
  HeartFilled,
  DownOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
import "swiper/css";
import "swiper/css/navigation";
import sujungbang from "../img/sujungbang.jpeg";
import tonightHighball from "../img/tonightHighball.jpeg";
import bluehigball from "../img/bluehighball.jpeg";
import carryCocktail from "../img/carryCocktail.jpeg";
import top1 from "../img/TOP1.png";
import top2 from "../img/TOP2.png";
import top3 from "../img/TOP3.png";
import top4 from "../img/TOP4.png";
import top5 from "../img/TOP5.png";
import top6 from "../img/TOP6.png";
import top7 from "../img/TOP7.png";
import top8 from "../img/TOP8.png";
import top9 from "../img/TOP9.png";
import top10 from "../img/TOP10.png";
import good from "../img/good.png";
import alcoholicTest from "../img/alcoholicTest.webp";
import soju from "../img/soju.webp";
import beer from "../img/beer.webp";
import wine from "../img/wine.webp";
import sake from "../img/sake.webp";
import vodka from "../img/vodka.webp";
import whiskey from "../img/whiskey.webp";
import makgeorlli from "../img/makgeorlli.webp";

import testpicture from "../img/logo.png";

import LikeButton from "../components/LikeButton";

import { useAppDispatch, useAppSelector } from "../stores/hook";
import { useNavigate } from "react-router-dom";

export default function RecipesPage() {
  const navigate = useNavigate();

  const [goodConunt, setGoodConunt] = useState(0);
  const [orderMethod, setOrderMethod] = useState(false);
  const [orderMethodName, setOrderMethodName] = useState(false);
  const [allPage, setAllPage] = useState(true);
  const [sojuPage, setSojuPage] = useState(false);
  const [beerPage, setBeerPage] = useState(false);
  const [winePage, setWinePage] = useState(false);
  const [sakePage, setSakePage] = useState(false);
  const [vodkaPage, setVodkaPage] = useState(false);
  const [whiskeyPage, setWhiskeyPage] = useState(false);
  const [makgeolliPage, setmakgeolliPage] = useState(false);
  const [onePage, setOnePage] = useState(true);
  const [twoPage, setTwoPage] = useState(false);

  const recipes = useAppSelector((state) => state.Recipe);
  console.log(recipes);

  const items = [
    { id: 1, title: "제목 1", image: alcoholicTest },
    { id: 2, title: "제목 2", image: alcoholicTest },
    { id: 3, title: "제목 3", image: alcoholicTest },
    { id: 4, title: "제목 4", image: alcoholicTest },
    { id: 5, title: "제목 5", image: alcoholicTest },
    { id: 6, title: "제목 6", image: alcoholicTest },
    { id: 7, title: "제목 7", image: alcoholicTest },
    { id: 8, title: "제목 8", image: alcoholicTest },
    { id: 9, title: "제목 9", image: alcoholicTest },
    { id: 10, title: "제목 10", image: alcoholicTest },
    { id: 11, title: "제목 11", image: alcoholicTest },
    { id: 12, title: "제목 12", image: alcoholicTest },
    { id: 13, title: "제목 13", image: alcoholicTest },
    { id: 14, title: "제목 14", image: alcoholicTest },
    { id: 15, title: "제목 15", image: alcoholicTest },
  ];
  const sojuItems = [
    { id: 1, title: "제목 1", image: soju },
    { id: 2, title: "제목 2", image: soju },
    { id: 3, title: "제목 3", image: soju },
    { id: 4, title: "제목 4", image: soju },
    { id: 5, title: "제목 5", image: soju },
    { id: 6, title: "제목 6", image: soju },
    { id: 7, title: "제목 7", image: soju },
    { id: 8, title: "제목 8", image: soju },
    { id: 9, title: "제목 9", image: soju },
    { id: 10, title: "제목 10", image: soju },
    { id: 11, title: "제목 11", image: soju },
    { id: 12, title: "제목 12", image: soju },
    { id: 13, title: "제목 13", image: soju },
    { id: 14, title: "제목 14", image: soju },
    { id: 15, title: "제목 15", image: soju },
  ];
  const beerItems = [
    { id: 1, title: "제목 1", image: beer },
    { id: 2, title: "제목 2", image: beer },
    { id: 3, title: "제목 3", image: beer },
    { id: 4, title: "제목 4", image: beer },
    { id: 5, title: "제목 5", image: beer },
    { id: 6, title: "제목 6", image: beer },
    { id: 7, title: "제목 7", image: beer },
    { id: 8, title: "제목 8", image: beer },
    { id: 9, title: "제목 9", image: beer },
    { id: 10, title: "제목 10", image: beer },
    { id: 11, title: "제목 11", image: beer },
    { id: 12, title: "제목 12", image: beer },
    { id: 13, title: "제목 13", image: beer },
    { id: 14, title: "제목 14", image: beer },
    { id: 15, title: "제목 15", image: beer },
  ];
  const wineItems = [
    { id: 1, title: "제목 1", image: wine },
    { id: 2, title: "제목 2", image: wine },
    { id: 3, title: "제목 3", image: wine },
    { id: 4, title: "제목 4", image: wine },
    { id: 5, title: "제목 5", image: wine },
    { id: 6, title: "제목 6", image: wine },
    { id: 7, title: "제목 7", image: wine },
    { id: 8, title: "제목 8", image: wine },
    { id: 9, title: "제목 9", image: wine },
    { id: 10, title: "제목 10", image: wine },
    { id: 11, title: "제목 11", image: wine },
    { id: 12, title: "제목 12", image: wine },
    { id: 13, title: "제목 13", image: wine },
    { id: 14, title: "제목 14", image: wine },
    { id: 15, title: "제목 15", image: wine },
  ];
  const sakeItems = [
    { id: 1, title: "제목 1", image: sake },
    { id: 2, title: "제목 2", image: sake },
    { id: 3, title: "제목 3", image: sake },
    { id: 4, title: "제목 4", image: sake },
    { id: 5, title: "제목 5", image: sake },
    { id: 6, title: "제목 6", image: sake },
    { id: 7, title: "제목 7", image: sake },
    { id: 8, title: "제목 8", image: sake },
    { id: 9, title: "제목 9", image: sake },
    { id: 10, title: "제목 10", image: sake },
    { id: 11, title: "제목 11", image: sake },
    { id: 12, title: "제목 12", image: sake },
    { id: 13, title: "제목 13", image: sake },
    { id: 14, title: "제목 14", image: sake },
    { id: 15, title: "제목 15", image: sake },
  ];
  const vodkaItems = [
    { id: 1, title: "제목 1", image: vodka },
    { id: 2, title: "제목 2", image: vodka },
    { id: 3, title: "제목 3", image: vodka },
    { id: 4, title: "제목 4", image: vodka },
    { id: 5, title: "제목 5", image: vodka },
    { id: 6, title: "제목 6", image: vodka },
    { id: 7, title: "제목 7", image: vodka },
    { id: 8, title: "제목 8", image: vodka },
    { id: 9, title: "제목 9", image: vodka },
    { id: 10, title: "제목 10", image: vodka },
    { id: 11, title: "제목 11", image: vodka },
    { id: 12, title: "제목 12", image: vodka },
    { id: 13, title: "제목 13", image: vodka },
    { id: 14, title: "제목 14", image: vodka },
    { id: 15, title: "제목 15", image: vodka },
  ];
  const whiskeyItems = [
    { id: 1, title: "제목 1", image: whiskey },
    { id: 2, title: "제목 2", image: whiskey },
    { id: 3, title: "제목 3", image: whiskey },
    { id: 4, title: "제목 4", image: whiskey },
    { id: 5, title: "제목 5", image: whiskey },
    { id: 6, title: "제목 6", image: whiskey },
    { id: 7, title: "제목 7", image: whiskey },
    { id: 8, title: "제목 8", image: whiskey },
    { id: 9, title: "제목 9", image: whiskey },
    { id: 10, title: "제목 10", image: whiskey },
    { id: 11, title: "제목 11", image: whiskey },
    { id: 12, title: "제목 12", image: whiskey },
    { id: 13, title: "제목 13", image: whiskey },
    { id: 14, title: "제목 14", image: whiskey },
    { id: 15, title: "제목 15", image: whiskey },
  ];
  const makgeolliItems = [
    { id: 1, title: "제목 1", image: makgeorlli },
    { id: 2, title: "제목 2", image: makgeorlli },
    { id: 3, title: "제목 3", image: makgeorlli },
    { id: 4, title: "제목 4", image: makgeorlli },
    { id: 5, title: "제목 5", image: makgeorlli },
    { id: 6, title: "제목 6", image: makgeorlli },
    { id: 7, title: "제목 7", image: makgeorlli },
    { id: 8, title: "제목 8", image: makgeorlli },
    { id: 9, title: "제목 9", image: makgeorlli },
    { id: 10, title: "제목 10", image: makgeorlli },
    { id: 11, title: "제목 11", image: makgeorlli },
    { id: 12, title: "제목 12", image: makgeorlli },
    { id: 13, title: "제목 13", image: makgeorlli },
    { id: 14, title: "제목 14", image: makgeorlli },
    { id: 15, title: "제목 15", image: makgeorlli },
  ];

  const showAllPage = () => {
    setAllPage(true);
    setSojuPage(false);
    setBeerPage(false);
    setWinePage(false);
    setSakePage(false);
    setVodkaPage(false);
    setWhiskeyPage(false);
    setmakgeolliPage(false);
  };
  const showSojuPage = () => {
    setAllPage(false);
    setSojuPage(true);
    setBeerPage(false);
    setWinePage(false);
    setSakePage(false);
    setVodkaPage(false);
    setWhiskeyPage(false);
    setmakgeolliPage(false);
  };
  const showBeerPage = () => {
    setAllPage(false);
    setSojuPage(false);
    setBeerPage(true);
    setWinePage(false);
    setSakePage(false);
    setVodkaPage(false);
    setWhiskeyPage(false);
    setmakgeolliPage(false);
  };

  const showWinePage = () => {
    setAllPage(false);
    setSojuPage(false);
    setBeerPage(false);
    setWinePage(true);
    setSakePage(false);
    setVodkaPage(false);
    setWhiskeyPage(false);
    setmakgeolliPage(false);
  };
  const showSakePage = () => {
    setAllPage(false);
    setSojuPage(false);
    setBeerPage(false);
    setWinePage(false);
    setSakePage(true);
    setVodkaPage(false);
    setWhiskeyPage(false);
    setmakgeolliPage(false);
  };
  const showVodkaPage = () => {
    setAllPage(false);
    setSojuPage(false);
    setBeerPage(false);
    setWinePage(false);
    setSakePage(false);
    setVodkaPage(true);
    setWhiskeyPage(false);
    setmakgeolliPage(false);
  };
  const showWhiskeyPage = () => {
    setAllPage(false);
    setSojuPage(false);
    setBeerPage(false);
    setWinePage(false);
    setSakePage(false);
    setVodkaPage(false);
    setWhiskeyPage(true);
    setmakgeolliPage(false);
  };
  const showmakgeolliPage = () => {
    setAllPage(false);
    setSojuPage(false);
    setBeerPage(false);
    setWinePage(false);
    setSakePage(false);
    setVodkaPage(false);
    setWhiskeyPage(false);
    setmakgeolliPage(true);
  };
  const exchageOnePage = () => {
    setOnePage(true);
    setTwoPage(false);
  };
  const exchageTwoPage = () => {
    setOnePage(false);
    setTwoPage(true);
  };

  return (
    <div>
      <div className="ml-[404px] mt-[200px] flex flex-row">
        <div className=" text-4xl text-sky-600 font-bold">TOP 10 레시피</div>
        <div className="text-[24px] text-sky-200 leading-[55px]">
          나도 Top10 도전?
        </div>
      </div>
      <form className="w-[1300px] ml-[357px]">
        <Swiper
          slidesPerView={4}
          rewind={true}
          navigation={true}
          modules={[Navigation]}
          className="h-[448px]"
        >
          <SwiperSlide>
            <div>
              <img src={top1} alt="rangking" className="absolute z-20" />
              <div className="flex  justify-center items-center w-[230px] h-[306px] border-2 border-sky-500 rounded-lg relative top-[35px] left-[45px] z-0">
                <LikeButton></LikeButton>
                <img src={tonightHighball} alt="tonightHighball" className="" />
              </div>
              <div className="text-[23px] relative top-[43px] left-[45px]  w-[230px] h-[64px] text-center">
                오늘 밤 한잔
              </div>
              <div className="flex flex- row relative top-[43px] left-[45px]">
                <img src={good} alt="좋아요" className="mr-2" />
                <div className="text-[#FFB739] text-[22px] relative top-1">
                  {goodConunt}
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={top2} alt="top2" className="absolute z-20" />
              <div className="flex  justify-center items-center w-[230px] h-[306px] border-2 border-sky-500 rounded-lg relative top-[35px] left-[45px] z-0">
                <LikeButton></LikeButton>
                <img src={bluehigball} alt="bluehigball" className=" " />
              </div>
              <div className="text-[23px] relative top-[43px] left-[45px]  w-[230px] h-[64px] text-center">
                bluehigball 블루오션 하이볼
              </div>
              <div className="flex flex- row relative top-[43px] left-[45px]">
                <img src={good} alt="좋아요" className="mr-2" />
                <div className="text-[#FFB739] text-[22px] relative top-1">
                  {goodConunt}
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {/* <img src={sujungbang} alt="수정방" /> */}
            <div>
              <img src={top3} alt="top3" className="absolute z-20" />
              <div className="flex  justify-center items-center w-[230px] h-[306px] border-2 border-sky-500 rounded-lg relative top-[35px] left-[45px] z-0">
                <LikeButton></LikeButton>
                <img src={sujungbang} alt="수정방" className=" " />
              </div>
              <div className="text-[23px] relative top-[43px] left-[45px]  w-[230px] h-[64px] text-center">
                간아~ 가즈아~ 가즈아~ 수정방 들어간다~
              </div>
              <div className="flex flex- row relative top-[43px] left-[45px]">
                <img src={good} alt="좋아요" className="mr-2" />
                <div className="text-[#FFB739] text-[22px] relative top-1">
                  {goodConunt}
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {/* <img src={carryCocktail} alt="carryCocktail" /> */}
            <div>
              <img src={top4} alt="top4" className="absolute z-20" />
              <div className="flex  justify-center items-center w-[230px] h-[306px] border-2 border-sky-500 rounded-lg relative top-[35px] left-[45px] z-0">
                <LikeButton></LikeButton>
                <img src={carryCocktail} alt="carryCocktail" className=" " />
              </div>
              <div className="text-[23px] relative top-[43px] left-[45px]  w-[230px] h-[64px] text-center">
                오빠랑 carryCocktail 한 잔🌸
              </div>
              <div className="flex flex- row relative top-[43px] left-[45px]">
                <img src={good} alt="좋아요" className="mr-2" />
                <div className="text-[#FFB739] text-[22px] relative top-1">
                  {goodConunt}
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={top5} alt="top5" className="absolute z-20" />
              <div className="flex  justify-center items-center w-[230px] h-[306px] border-2 border-sky-500 rounded-lg relative top-[35px] left-[45px] z-0">
                <LikeButton></LikeButton>
                <img
                  src={tonightHighball}
                  alt="tonightHighball"
                  className=" "
                />
              </div>
              <div className="text-[23px] relative top-[43px] left-[45px]  w-[230px] h-[64px] text-center">
                오늘 밤 한잔
              </div>
              <div className="flex flex- row relative top-[43px] left-[45px]">
                <img src={good} alt="좋아요" className="mr-2" />
                <div className="text-[#FFB739] text-[22px] relative top-1">
                  {goodConunt}
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={top6} alt="top6" className="absolute z-20" />
              <div className="flex  justify-center items-center w-[230px] h-[306px] border-2 border-sky-500 rounded-lg relative top-[35px] left-[45px] z-0">
                <LikeButton></LikeButton>
                <img src={bluehigball} alt="bluehigball" className=" " />
              </div>
              <div className="text-[23px] relative top-[43px] left-[45px]  w-[230px] h-[64px] text-center">
                bluehigball 블루오션 하이볼
              </div>
              <div className="flex flex- row relative top-[43px] left-[45px]">
                <img src={good} alt="좋아요" className="mr-2" />
                <div className="text-[#FFB739] text-[22px] relative top-1">
                  {goodConunt}
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {/* <img src={sujungbang} alt="수정방" /> */}
            <div>
              <img src={top7} alt="top7" className="absolute z-20" />
              <div className="flex  justify-center items-center w-[230px] h-[306px] border-2 border-sky-500 rounded-lg relative top-[35px] left-[45px] z-0">
                <LikeButton></LikeButton>
                <img src={sujungbang} alt="수정방" className=" " />
              </div>
              <div className="text-[23px] relative top-[43px] left-[45px]  w-[230px] h-[64px] text-center">
                간아~ 가즈아~ 가즈아~ 수정방 들어간다~
              </div>
              <div className="flex flex- row relative top-[43px] left-[45px]">
                <img src={good} alt="좋아요" className="mr-2" />
                <div className="text-[#FFB739] text-[22px] relative top-1">
                  {goodConunt}
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {/* <img src={carryCocktail} alt="carryCocktail" /> */}
            <div>
              <img src={top8} alt="top8" className="absolute z-20" />
              <div className="flex  justify-center items-center w-[230px] h-[306px] border-2 border-sky-500 rounded-lg relative top-[35px] left-[45px] z-0">
                <LikeButton></LikeButton>
                <img src={carryCocktail} alt="carryCocktail" className=" " />
              </div>
              <div className="text-[23px] relative top-[43px] left-[45px]  w-[230px] h-[64px] text-center">
                오빠랑 carryCocktail 한 잔🌸
              </div>
              <div className="flex flex- row relative top-[43px] left-[45px]">
                <img src={good} alt="좋아요" className="mr-2" />
                <div className="text-[#FFB739] text-[22px] relative top-1">
                  {goodConunt}
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div>
              <img src={top9} alt="top9" className="absolute z-20" />
              <div className="flex  justify-center items-center w-[230px] h-[306px] border-2 border-sky-500 rounded-lg relative top-[35px] left-[45px] z-0">
                <LikeButton></LikeButton>
                <img
                  src={tonightHighball}
                  alt="tonightHighball"
                  className=" "
                />
              </div>
              <div className="text-[23px] relative top-[43px] left-[45px]  w-[230px] h-[64px] text-center">
                오늘 밤 한잔
              </div>
              <div className="flex flex- row relative top-[43px] left-[45px]">
                <img src={good} alt="좋아요" className="mr-2" />
                <div className="text-[#FFB739] text-[22px] relative top-1">
                  {goodConunt}
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={top10} alt="top10" className="absolute z-20" />

              <div className="flex  justify-center items-center w-[230px] h-[306px] border-2 border-sky-500 rounded-lg relative top-[35px] left-[45px] z-0">
                <LikeButton></LikeButton>
                <img src={bluehigball} alt="bluehigball" className=" " />
              </div>
              <div className="text-[23px] relative top-[43px] left-[45px]  w-[230px] h-[64px] text-center">
                bluehigball 블루오션 하이볼
              </div>
              <div className="flex flex- row relative top-[43px] left-[45px]">
                <img src={good} alt="좋아요" className="mr-2" />
                <div className="text-[#FFB739] text-[22px] relative top-1">
                  {goodConunt}
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </form>
      <form className="w-[1300px] ml-[357px]  mt-[36px] relative">
        <div className="m flex flex-row">
          <div className=" text-4xl text-sky-600 font-bold">레시피</div>
          <div className="text-[24px] text-sky-200 leading-[50px]">
            나만의 레시피를 만들어 볼까?
          </div>
        </div>
        <ul className="h-11 text-2xl flex flex-row justify-between mt-6  border-b-2 cursor-pointer">
          <li
            onClick={showAllPage}
            className={`${
              allPage ? "text-sky-600" : ""
            } hover:border-b-4 border-sky-300`}
          >
            전 체
          </li>

          <li
            onClick={showSojuPage}
            className={`${
              sojuPage ? "text-sky-600" : ""
            } hover:border-b-4 border-sky-300`}
          >
            소 주
          </li>
          <li
            onClick={showBeerPage}
            className={`${
              beerPage ? "text-sky-600" : ""
            } hover:border-b-4 border-sky-300`}
          >
            맥 주
          </li>
          <li
            onClick={showWinePage}
            className={`${
              winePage ? "text-sky-600" : ""
            } hover:border-b-4 border-sky-300`}
          >
            와 인
          </li>
          <li
            onClick={showSakePage}
            className={`${
              sakePage ? "text-sky-600" : ""
            } hover:border-b-4 border-sky-300`}
          >
            사 케
          </li>
          <li
            onClick={showVodkaPage}
            className={`${
              vodkaPage ? "text-sky-600" : ""
            } hover:border-b-4 border-sky-300`}
          >
            보드카
          </li>
          <li
            onClick={showWhiskeyPage}
            className={`${
              whiskeyPage ? "text-sky-600" : ""
            } hover:border-b-4 border-sky-300`}
          >
            위스키
          </li>
          <li
            onClick={showmakgeolliPage}
            className={`${
              makgeolliPage ? "text-sky-600" : ""
            } hover:border-b-4 border-sky-300`}
          >
            막걸리
          </li>
        </ul>
        <div
          className=" absolute right-0 flex text-xl justify-center items-center cursor-pointer"
          onClick={() => setOrderMethod(!orderMethod)}
        >
          <div className="mr-1">{orderMethodName ? "추천순" : "최신순"}</div>
          <DownOutlined />
          {orderMethod && (
            <div className="w-[92px] h-[84px] border-[3px] border-black rounded-xl flex flex-col justify-center items-center absolute fixed right-2 top-1 bg-white">
              <div
                className="text-xl w-[80px] h-[38px] rounded-lg text-center  flex flex-col justify-center items-center hover:bg-sky-300 cursor-pointer "
                onClick={() => setOrderMethodName(false)}
              >
                최신순
              </div>
              <div
                className="text-xl w-[80px] h-[38px] rounded-lg text-center  flex flex-col justify-center items-center hover:bg-sky-300 cursor-pointer"
                onClick={() => setOrderMethodName(true)}
              >
                추천순
              </div>
            </div>
          )}
        </div>

        <div className="w-[1300px] flex flex-wrap mt-8">
          {allPage &&
            onePage &&
            recipes.slice(0, 10).map((data, index) => (
              <div
                key={data.id}
                onClick={() => navigate(`/recipe/recipeDetail/${index}`)}
                className=" cursor-pointer mr-8"
              >
                <div className="flex justify-center items-center w-[230px] h-[306px] border-2 border-sky-500 rounded-lg relative top-[44px] z-0">
                  <LikeButton></LikeButton>
                  {data.imageUrl ? (
                    <img
                      src={data.imageUrl}
                      alt=""
                      className="w-[230px] h-[200px]"
                    />
                  ) : (
                    <img src={testpicture} alt="" />
                  )}
                </div>
                <div className="text-[23px] relative top-[43px] w-[230px] h-[64px] text-center">
                  {data.name}
                </div>
              </div>
            ))}
          {allPage &&
            twoPage &&
            items.slice(10, 15).map((item) => (
              <div key={item.id}>
                <div className="flex justify-center items-center w-[230px] h-[306px] border-2 border-sky-500 rounded-lg relative top-[44px] z-0">
                  <LikeButton></LikeButton>
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="text-[23px] relative top-[43px] w-[230px] h-[64px] text-center">
                  {item.title}
                </div>
              </div>
            ))}
          {sojuPage &&
            onePage &&
            sojuItems.slice(0, 15).map((item) => (
              <div key={item.id}>
                <div className="flex justify-center items-center w-[230px] h-[306px] border-2 border-sky-500 rounded-lg relative top-[44px] z-0">
                  <LikeButton></LikeButton>
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="text-[23px] relative top-[43px] w-[230px] h-[64px] text-center">
                  {item.title}
                </div>
              </div>
            ))}
          {beerPage &&
            onePage &&
            beerItems.slice(0, 15).map((item) => (
              <div key={item.id}>
                <div className="flex justify-center items-center w-[230px] h-[306px] border-2 border-sky-500 rounded-lg relative top-[44px] z-0">
                  <LikeButton></LikeButton>
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="text-[23px] relative top-[43px] w-[230px] h-[64px] text-center">
                  {item.title}
                </div>
              </div>
            ))}
          {winePage &&
            onePage &&
            wineItems.slice(0, 15).map((item) => (
              <div key={item.id}>
                <div className="flex justify-center items-center w-[230px] h-[306px] border-2 border-sky-500 rounded-lg relative top-[44px] z-0">
                  <LikeButton></LikeButton>
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="text-[23px] relative top-[43px] w-[230px] h-[64px] text-center">
                  {item.title}
                </div>
              </div>
            ))}
          {sakePage &&
            onePage &&
            sakeItems.slice(0, 15).map((item) => (
              <div key={item.id}>
                <div className="flex justify-center items-center w-[230px] h-[306px] border-2 border-sky-500 rounded-lg relative top-[44px] z-0">
                  <LikeButton></LikeButton>
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="text-[23px] relative top-[43px] w-[230px] h-[64px] text-center">
                  {item.title}
                </div>
              </div>
            ))}
          {vodkaPage &&
            onePage &&
            vodkaItems.slice(0, 15).map((item) => (
              <div key={item.id}>
                <div className="flex justify-center items-center w-[230px] h-[306px] border-2 border-sky-500 rounded-lg relative top-[44px] z-0">
                  <LikeButton></LikeButton>
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="text-[23px] relative top-[43px] w-[230px] h-[64px] text-center">
                  {item.title}
                </div>
              </div>
            ))}
          {whiskeyPage &&
            onePage &&
            whiskeyItems.slice(0, 15).map((item) => (
              <div key={item.id}>
                <div className="flex justify-center items-center w-[230px] h-[306px] border-2 border-sky-500 rounded-lg relative top-[44px] z-0">
                  <LikeButton></LikeButton>
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="text-[23px] relative top-[43px] w-[230px] h-[64px] text-center">
                  {item.title}
                </div>
              </div>
            ))}
          {makgeolliPage &&
            onePage &&
            makgeolliItems.slice(0, 15).map((item) => (
              <div key={item.id}>
                <div className="flex justify-center items-center w-[230px] h-[306px] border-2 border-sky-500 rounded-lg relative top-[44px] z-0">
                  <LikeButton></LikeButton>
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="text-[23px] relative top-[43px] w-[230px] h-[64px] text-center">
                  {item.title}
                </div>
              </div>
            ))}
        </div>
      </form>
      <form className="w-full flex justify-center  my-[40px] ">
        <ul className="w-[650px] flex flex-row items-center justify-between ">
          <LeftOutlined />
          <li
            className={`${
              onePage ? "text-red-500" : "text-black"
            } cursor-pointer`}
            onClick={exchageOnePage}
          >
            1
          </li>
          <li
            onClick={exchageTwoPage}
            className={`${
              twoPage ? "text-red-500" : "text-black"
            } cursor-pointer`}
          >
            2
          </li>
          <RightOutlined />
        </ul>
      </form>
    </div>
  );
}
