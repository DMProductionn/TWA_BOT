import { useMutation } from '@tanstack/react-query';
import { toggleNotification } from '../../services/notification.service';

const useToggleNotification = () => {
  return useMutation({
    mutationKey: ['toggleNotification'],
    mutationFn: (action: { action: boolean }) => toggleNotification(action),
  });
};

export default useToggleNotification;
