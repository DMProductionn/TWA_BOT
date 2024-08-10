import { useDispatch } from "react-redux"
import type { AppDispatch } from "../../app/redux/store";
import { setActive } from "../../app/redux/Slices/animation.slice";

const CreateDeal = () => {
  const dispatch: AppDispatch = useDispatch();

  const onClickCreateDeals = () => {
    dispatch(setActive(true))
  }

  return (
    <button onClick={onClickCreateDeals} className="bg-blue-light rounded-[4px] w-[130px] h-[25px] text-[12px] flex justify-center items-center mt-[7px]">Создать сделку</button>
  )
}

export default CreateDeal