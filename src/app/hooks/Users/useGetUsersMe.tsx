import { useQuery } from '@tanstack/react-query';
import { getUsersMe } from '../../services/users.service';

const useGetUsersMe = () => {
  const token = localStorage.getItem('token');
  return useQuery({ queryKey: ['usersMe'], queryFn: getUsersMe, enabled: !!token });
};

export default useGetUsersMe;
