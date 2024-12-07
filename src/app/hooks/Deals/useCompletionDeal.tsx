import { useMutation, useQueryClient } from '@tanstack/react-query';
import { completionDeal } from '../../services/deals.service';

const useCompletionDeal = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['completionDeal'],
    mutationFn: (transaction_id: { transaction_id: string }) => completionDeal(transaction_id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['transactions'] });
      queryClient.invalidateQueries({ queryKey: ['usersMe'] });
    },
  });
};

export default useCompletionDeal;
