import { useSelector } from "react-redux"
import { RootState } from "../../../app/redux/store";
import '../../../app/css/Deals/CreateDeal/create-deal.css'

const CreateDealBlock = () => {

  const { active } = useSelector((state: RootState) => state.animationSlice);
  const { usersFirstName } = useSelector((state: RootState) => state.usersSlice);
  

  return (
    <div className={`${active ? 'go-left' : ''} bg-blue-medium absolute z-[9] -bottom-[148px] w-full h-[400px] py-[10px] rounded-[4px] px-[15px] create-deal-block`}>
      <p className="w-full text-center mb-[100px]">Сделка с {usersFirstName}</p>
      <div className="w-full text-center mb-[60px]">
        <p className="w-full text-center mb-[20px]">Введите сумму сделки в рублях</p>
        <input className="w-full max-w-[200px] text-center h-[30px] bg-[transparent] text-[22px] outline-none border-b" type="number" placeholder="сумма сделки..." />
      </div>
      <button className="w-full bg-blue-light rounded-[4px] text-center h-[30px] text-[18px]">Создать</button>
    </div>
  )
}

export default CreateDealBlock