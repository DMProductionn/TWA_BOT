import User from '../widgets/DealsPage/User';
import style from '../app/css/Deals/Users/users.module.css';
import { useSelector } from 'react-redux';
import type { RootState } from '../app/redux/store';
import useGetUserSearch from '../app/hooks/Users/useGetUserSearch';
import { useEffect, useState } from 'react';
import { TypeUser } from '../app/types/Deals/user.type';
import Loader from '../shared/Loader';

const Deals = () => {
  const { users } = useSelector((state: RootState) => state.usersSlice);
  const { profileInfo } = useSelector((state: RootState) => state.profileSlice);
  const { search } = useSelector((state: RootState) => state.searchSlice);
  const [filteredData, setFilteredData] = useState([]);
  const [filterUsers, setFilterUsers] = useState<TypeUser[] | undefined>([]);

  const filterUsersTest: TypeUser[] = [
    {
      first_name: 'Dima',
      id: '123333',
      is_premium: true,
      last_name: null,
      rating: 5,
      username: 'Dima',
    },
  ];

  const { data, refetch, isLoading } = useGetUserSearch(search || null);

  useEffect(() => {
    if (search && search.trim() !== '') {
      refetch();
    }
    setFilteredData(data?.filter((user: TypeUser) => !profileInfo?.id.includes(user.id)));
    setFilterUsers(users?.filter((user: TypeUser) => !profileInfo?.id.includes(user.id)));
  }, [search, refetch, data]);

  return (
    <div className={style.users_wrapper_static}>
      <div className={style.users__wrapper_container}>
        {isLoading ? (
          <div className="w-full flex justify-center mt-[80px]">
            <Loader />
          </div>
        ) : filteredData?.length === 0 && search ? (
          <div className="w-full flex flex-col justify-center items-center">
            <div className="bg-blue-medium rounded-[20px] h-[60px] w-full flex justify-center items-center text-[#4E5567]">
              Пользователей не найдено
            </div>
          </div>
        ) : search ? (
          filteredData?.map((user: TypeUser) => <User key={user.id} {...user} />)
        ) : (
          filterUsersTest?.map((user: TypeUser) => <User key={user.id} {...user} />)
        )}
      </div>
    </div>
  );
};

export default Deals;
