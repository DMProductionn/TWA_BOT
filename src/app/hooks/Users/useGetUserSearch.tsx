import { useQuery } from '@tanstack/react-query';
import { getUserSearch } from '../../services/users.service';

const useGetUserSearch = (search: string | null) => {
  return useQuery({ queryKey: ['userSearch'], queryFn: () => getUserSearch(search) });
};

export default useGetUserSearch;
