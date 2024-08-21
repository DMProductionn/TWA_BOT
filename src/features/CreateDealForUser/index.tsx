import React from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../app/redux/store"

const CreateDealForUser: React.FC<{ sum: number, mutate: any }> = ({ sum, mutate }) => {

  const user_for = useSelector((state: RootState) => state.usersSlice.usersId);

  const onClickCreateDeal = () => {
    const deal_params = {
      user_for,
      sum
    };
    mutate(deal_params);
  }

  return (
    <button onClick={onClickCreateDeal} className="w-full bg-blue-light rounded-[4px] text-center h-[30px] text-[18px]">Создать</button>
  )
}

export default CreateDealForUser