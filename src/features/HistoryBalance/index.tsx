import { useNavigate } from "react-router-dom"

const HistoryBalance = () => {
    const navigate = useNavigate();

  return (
    <button onClick={() => navigate('/history-balance')} className="bg-blue-light rounded-[4px] w-[130px] h-[25px] text-[12px] flex justify-center items-center">История пополнений</button>
  )
}

export default HistoryBalance