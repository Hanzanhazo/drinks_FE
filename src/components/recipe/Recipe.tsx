import { Link } from "react-router-dom";
import RecipeCard from "./recipeCard/RecipeCard";


export default function Recipe() {
  return (
    <div className='flex flex-col w-[500px]'>
            <div className="flex justify-between">
              <span className="font-['TTLaundryGothicB'] text-[20px]">휘리릭 만드는 오늘의 레시피</span>
              <Link to='/Recipe'><span className='text-[10px]'>레시피 바로가기</span></Link>
            </div>
            <div className='flex mt-5 gap-3'>
              <RecipeCard/>
              <RecipeCard/>
              <RecipeCard/>
            </div>
    </div>
  )
}
