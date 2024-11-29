import { useQuery } from '@tanstack/react-query';
import { getUsersMe } from '../../services/users.service';

const useGetUsersMe = () => {
  return useQuery({ queryKey: ['usersMe'], queryFn: getUsersMe });
};

export default useGetUsersMe;
