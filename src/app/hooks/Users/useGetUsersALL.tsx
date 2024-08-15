import { useQuery } from '@tanstack/react-query';
import { getUsersAll } from '../../services/users.service';

const useGetUsersAll = () => {
  return useQuery({ queryKey: ['usersAll'], queryFn: getUsersAll });
};

export default useGetUsersAll;
