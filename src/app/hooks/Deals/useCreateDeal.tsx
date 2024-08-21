import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createDeal } from "../../services/deals.service"

const useCreateDeal = () => {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationKey: ['createDeal'], 
    mutationFn: (deal_params : {user_for: string, sum: number}) => createDeal(deal_params),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['transactions']})
    }
  })
}

export default useCreateDeal