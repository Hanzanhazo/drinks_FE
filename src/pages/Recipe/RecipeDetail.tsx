import React, { ChangeEvent, useState, useRef, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { CameraOutlined } from "@ant-design/icons";
import { createRecipe } from "../../Api/axios";
import alcoholicTest from "../../img/alcoholicTest.webp";
import { UserRecipeList } from "../../Api/axios";
import { useAppDispatch, useAppSelector } from "../../stores/hook";
import { useNavigate } from "react-router-dom";
import testPicture from "../../img/testpicture.png";

type foodIngredientField = {
  id: number;
  value: string;
  value2: string;
};

type Step = {
  id: number;
  value: string;
  imageUrl: string;
};

type Comment = {
  id: number;
  imageUrl: string;
  userName: string;
  value: string;
};

const items = {
  id: 1,
  imageUrl: "alcoholicTest",
  createRecipeName: "alcoholicTest",
  createRecipeIntroduce:
    "이 하이볼은 박나래가 만든 술로 집에서 쉽게 만들어 먹기 좋은 하이볼입니다.",
  sojuType: true,
  beerType: false,
  wineType: true,
  sakeType: false,
  vodkaType: false,
  whiskeyType: false,
  makgeolliType: false,
  foodIngredient: [
    { id: 1, value: "안녕", value2: "하세요" },
    { id: 2, value: "안녕2", value2: "하세요2" },
  ],
  foodStep: [{ id: 1, value: "test", imageUrl: "alcoholicTesdt" }],
  comment: [
    {
      id: 1,
      imageUrl: "1",
      userName: "가무가무",
      value: "토니워터가 없음면 뭘로 대체 가능할까요?",
    },
  ],
};

console.log(items);
export default function RecipeDetail() {
  const [imageUrl, setImageUrl] = useState<string>(items.imageUrl);
  const [createRecipeName, setCreateRecipeName] = useState<string>(
    items.createRecipeName
  );
  const [createRecipeIntroduce, setCreateRecipeIntroduce] = useState<string>(
    items.createRecipeIntroduce
  );
  const [sojuType, setSojuType] = useState<boolean>(items.sojuType);
  const [beerType, setBeerType] = useState<boolean>(items.beerType);
  const [wineType, setWineType] = useState<boolean>(items.wineType);
  const [sakeType, setSakeType] = useState<boolean>(items.sakeType);
  const [vodkaType, setVodkaType] = useState<boolean>(items.vodkaType);
  const [whiskeyType, setWhiskeyType] = useState<boolean>(items.whiskeyType);
  const [makgeolliType, setMakgeolliType] = useState<boolean>(
    items.makgeolliType
  );
  const [foodIngredient, setFoodIngredient] = useState<foodIngredientField[]>(
    items.foodIngredient
  );

  const [foodStep, setFoodStep] = useState<Step[]>(items.foodStep);
  const [comment, setComment] = useState<Comment[]>(items.comment);
  const [newComment, setNewComment] = useState("");
  console.log(comment);
  console.log(newComment);

  const { index } = useParams<{ index: string }>();
  const recipes = useAppSelector((state) => state.Recipe);
  const recipe = recipes[parseInt(index || "0")];
  console.log(recipe);
  // useEffect(() => {
  //   const UserRecipeData = async () => {
  //     const data = await UserRecipeList(); // 레시피 데이터 가져오기
  //     if (data) {
  //       setImageUrl(items.imageUrl);
  //       setCreateRecipeName(items.createRecipeName);
  //       setCreateRecipeIntroduce(items.createRecipeIntroduce);
  //       setSojuType(items.sojuType);
  //       setBeerType(items.beerType);
  //       setWineType(items.wineType);
  //       setSakeType(items.sakeType);
  //       setVodkaType(items.vodkaType);
  //       setWhiskeyType(items.whiskeyType);
  //       setMakgeolliType(items.makgeolliType);
  //       setFoodIngredient(items.foodIngredient);
  //       setFoodStep(items.foodStep);
  //     }
  //   };

  //   UserRecipeData();
  // }, []);

  // step 별로 textvalue 주기
  const onChangeStepValue = (
    index: number,
    e: ChangeEvent<HTMLTextAreaElement>
  ) => {
    const updatedSteps = foodStep.map((step, idx) => {
      if (idx === index) {
        return { ...step, value: e.target.value };
      }
      return step;
    });
    setFoodStep(updatedSteps);
  };

  // 데이터를 서버에 전송하는 함수
  // const handleSubmit = async () => {
  //   const response = await createRecipe(
  //     imageUrl,
  //     createRecipeName,
  //     createRecipeIntroduce,
  //     sojuType,
  //     beerType,
  //     wineType,
  //     sakeType,
  //     vodkaType,
  //     whiskeyType,
  //     makgeolliType,
  //     foodIngredient,
  //     foodStep
  //   );

  //   if (response) {
  //     console.log("Recipe created successfully:", response);
  //     // 성공 처리, 예를 들어 알림 표시나 페이지 이동 등
  //   } else {
  //     console.error("Failed to create recipe");
  //     // 실패 처리, 예를 들어 에러 메시지 표시 등
  //   }
  // };

  const onChangeComment = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setNewComment(e.target.value);
  };

  const addComment = () => {
    const newCommentObj: Comment = {
      id: comment.length + 1,
      imageUrl: "1",
      userName: "NewUser", // 사용자 이름 설정 필요
      value: newComment,
    };

    if (newComment.trim() !== "") {
      setComment([...comment, newCommentObj]);
      setNewComment(""); // 입력 필드 초기화
    }
  };

  return (
    <div>
      <section className="ml-[404px] mt-[200px]">
        <div className="text-4xl mb-16 text-[#FFB739]"></div>
        <form className="flex">
          {recipe.imageUrl ? (
            <div className="w-[320px] h-[232px] border-2 border-sky-500 bg-sky-200 rounded-2xl flex flex-col justify-center items-center ml-[97px] mr-[34px] overflow-hidden">
              <img
                src={recipe.imageUrl}
                alt="Uploaded Image"
                className="size-full"
              />
            </div>
          ) : (
            <div className="w-[320px] h-[232px] border-2 border-sky-500 bg-sky-200 rounded-2xl flex flex-col justify-center items-center ml-[97px] mr-[34px] overflow-hidden">
              <img
                src={testPicture}
                alt="Uploaded Image"
                className="size-full"
              />
            </div>
          )}
          <form>
            <div className="flex flex-row justify-center items-center"></div>
            <div className="flex mt-4">
              <div className="mr-20">
                <div className="text-2xl">종 류</div>
              </div>
              <ul className="flex flex-row w-[546px] flex-wrap text-xl">
                {recipe.types.soju && <li className="mr-4">소 주</li>}
                {recipe.types.beer && <li className="mr-4">맥 주</li>}
                {recipe.types.wine && <li className="mr-4">와 인</li>}
                {recipe.types.sake && <li className="mr-4">사 케</li>}
                {recipe.types.vodka && <li className="mr-4">보드카</li>}
                {recipe.types.whiskey && <li className="mr-4">위스키</li>}
                {recipe.types.makgeolli && <li className="mr-4">막걸리</li>}
              </ul>
            </div>
            <div className="flex flex-row mt-6">
              <div className="text-2xl mr-10">요리소개</div>
              <div className="w-[546px] h-[110px]  flex items-start">
                <textarea
                  placeholder="이 레시피 탄생 배경을 적어주세요"
                  className="w-full h-full text-2xl rounded-2xl placeholder-white resize-none"
                  value={recipe.introduce}
                />
              </div>
            </div>
          </form>
        </form>
      </section>
      <section className="w-[1115px] ml-[404px] mt-16 rounded-2xl bg-[#003A66] flex flex-col justify-center items-center">
        <form className="w-[1050px] flex justify-between mb-4">
          <div className="text-3xl text-[#FFB739] mt-3">재료</div>
        </form>
        <form className="w-[1050px] flex flex-row flex-wrap justify-between">
          {recipe.ingredients.map((data, index) => (
            <form
              className={`${
                data.id % 2 !== 0 ? "mr-5" : ""
              } mb-3 flex justify-between`}
            >
              <div className="w-[500px] flex justify-between">
                <div className=" bg-[#003A66]  text-xl text-white">
                  {recipe.ingredients[index].material}
                </div>
                <div className=" bg-[#003A66]  text-xl text-white">
                  {recipe.ingredients[index].quantity}
                </div>
              </div>
            </form>
          ))}
        </form>
      </section>
      <section className="ml-[404px] mt-16">
        <form className="w-[1115px] flex justify-between mb-16">
          <div className="text-4xl text-[#FFB739]">제조 순서</div>
        </form>
        {recipe.steps.map((data, index) => (
          <form key={data.id} className={`${data.id > 1 ? "mt-8" : ""} flex`}>
            <div className="w-[320px] h-[232px] border-2 border-sky-500 bg-sky-200 rounded-2xl flex flex-col justify-center items-center ml-[97px] mr-[34px] overflow-hidden">
              {data.imageUrl ? (
                <img
                  src={recipe.steps[index].imageUrl}
                  alt={`Uploaded for step ${data.id}`}
                  className="size-full"
                />
              ) : (
                <img
                  src={testPicture}
                  alt={`Uploaded for step ${data.id}`}
                  className="size-full"
                />
              )}
            </div>
            <div>
              <div className="text-3xl text-[#FFB739] mb-3">STEP{data.id}</div>

              <textarea
                className="w-[488px] h-[190px] text-2xl flex items-start resize-none"
                value={recipe.steps[index].description}
                onChange={(e) => onChangeStepValue(index, e)}
              />
            </div>
          </form>
        ))}
      </section>
      <div className="ml-[404px] w-[1115px] flex flex-col justify-center my-20 ">
        {/* <div className="text-4xl text-[#003A66] mb-5">댓글</div>
        <ul>
          {comment.map((comment) => (
            <li key={comment.id} className="flex mb-4">
              <div className=" w-[100px] h-[100px] bg-black ">
                {comment.imageUrl}
              </div>
              <div className="text-3xl text-[#003A66] font-bold ml-5 ">
                {comment.userName}
                <p className=" text-xl mt-9 text-black">{comment.value}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="border-2 rounded-2xl w-[1115px] h-[200px] flex justify-center items-center">
          <textarea
            className="w-[885px] h-[115px] resize-none text-xl"
            placeholder="댓글을 남겨주세요"
            value={newComment}
            onChange={onChangeComment}
          ></textarea>
          <button
            className="w-[140px] h-[115px] bg-[#003A66] rounded-2xl text-3xl text-[#FFB739]"
            onClick={addComment}
          >
            등록
          </button>
        </div> */}
        <Link to="/Recipe" className="flex justify-center">
          <button className="w-[166px] h-[66px] border-2 rounded-lg  text-[#FFB739] bg-[#003A66] text-2xl flex justify-center items-center">
            확인
          </button>
        </Link>
      </div>
    </div>
  );
}
