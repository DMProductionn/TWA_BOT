import useGetPaymentHistory from "../app/hooks/Payment/useGetPaymentHistory"

const HistoryBalance = () => {

  const { data } = useGetPaymentHistory()

  return (
    <div className="">
      
    </div>
  )
}

export default HistoryBalance