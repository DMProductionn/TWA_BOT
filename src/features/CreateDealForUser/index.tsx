import React from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../app/redux/store"

const CreateDealForUser: React.FC<{ sum: string, mutate: any }> = ({ sum, mutate }) => {

  const user_for = useSelector((state: RootState) => state.usersSlice.usersId);

  const onClickCreateDeal = () => {
    const deal_params = {
      user_for,
      sum
    };
    mutate(deal_params);
  }

  return (
    <button disabled={!sum.trim()} onClick={onClickCreateDeal} className={`max-w-[360px] h-[50px] text-text-black mt-[40px] font-bold w-full bg-green rounded-[20px] text-center text-[18px] ${!sum.trim() && 'opacity-50 cursor-not-allowed'}`}>Создать</button>
  )
}

export default CreateDealForUser