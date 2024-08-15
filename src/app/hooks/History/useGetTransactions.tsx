import { useQuery } from "@tanstack/react-query"
import { getTransactions } from "../../services/history.service"

const useGetTransactions = () => {
  return useQuery({queryKey: ['transactions'], queryFn: getTransactions})
}

export default useGetTransactions