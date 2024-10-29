import { useMutation, useQueryClient } from "@tanstack/react-query";
import { canceledDeal } from "../../services/deals.service";

const useCanceledDeal = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationKey: ['canceledDeal'], 
    mutationFn: (transaction_id: { transaction_id: string }) => canceledDeal(transaction_id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['transactions'] });
    }
  });
}

export default useCanceledDeal;
