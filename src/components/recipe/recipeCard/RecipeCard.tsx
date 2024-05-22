import { useAppDispatch, useAppSelector } from "../../../stores/hook";
import testpictured from "../../../img/logo.png";

export default function RecipeCard({ index }: any) {
  const recipes = useAppSelector((state) => state.Recipe);
  return (
    <div className="border-2 w-[160px] h-[160px] rounded-[10px]">
      {recipes[index].imageUrl ? (
        <img
          src={recipes[index].imageUrl}
          alt=""
          className=" border-2 w-[160px] h-[160px] rounded-[10px] "
        />
      ) : (
        <img src={testpictured} alt="" />
      )}
    </div>
  );
}
