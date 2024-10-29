import { useMutation, useQueryClient } from "@tanstack/react-query";
import { acceptDeal } from "../../services/deals.service";

const useAcceptDeal = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationKey: ['acceptDeal'], 
    mutationFn: (transaction_id: { transaction_id: string }) => acceptDeal(transaction_id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['transactions'] });
    }
  });
}

export default useAcceptDeal;
