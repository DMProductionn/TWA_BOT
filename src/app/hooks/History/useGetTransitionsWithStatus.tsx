import { useQuery } from "@tanstack/react-query"
import { getTransactionsWithStatus } from "../../services/history.service"

const useGetTransactionsWithStatus = (statuses: string) => {
  return useQuery({queryKey: ['transactionsWithStatus'], queryFn:() => getTransactionsWithStatus(statuses)})
}

export default useGetTransactionsWithStatus