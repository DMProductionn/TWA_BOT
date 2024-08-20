import { useQuery } from "@tanstack/react-query"
import { getPaymentHistory } from "../../services/payment.service"

const useGetPaymentHistory = () => {
  return useQuery({queryKey: ['paymentHistory'], queryFn: getPaymentHistory})
}

export default useGetPaymentHistory