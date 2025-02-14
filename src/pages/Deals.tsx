import User from '../widgets/DealsPage/User';
import style from '../app/css/Deals/Users/users.module.css';
import { useSelector } from 'react-redux';
import type { RootState } from '../app/redux/store';
import useGetUserSearch from '../app/hooks/Users/useGetUserSearch';
import { useEffect, useState } from 'react';
import { TypeUser } from '../app/types/Deals/user.type';
import CreateDealBlock from '../widgets/DealsPage/createDealBlock';
import Loader from '../shared/Loader';
const Deals = () => {
  const { users } = useSelector((state: RootState) => state.usersSlice);
  const { profileInfo } = useSelector((state: RootState) => state.profileSlice);
  const { search } = useSelector((state: RootState) => state.searchSlice);
  const [filteredData, setFilteredData] = useState([]);
  const [filterUsers, setFilterUsers] = useState<TypeUser[] | undefined>([]);

  const { data, refetch, isLoading } = useGetUserSearch(search || null);

  useEffect(() => {
    if (search && search.trim() !== '') {
      refetch();
    }
    setFilteredData(data?.filter((user: TypeUser) => !profileInfo?.id.includes(user.id)));
    setFilterUsers(users?.filter((user: TypeUser) => !profileInfo?.id.includes(user.id)));
  }, [search, refetch, data]);

  return (
    <>
      <CreateDealBlock />
      <div className={style.users_wrapper_static}>
        <div className={style.users__wrapper_container}>
          {isLoading ? (
            <div className="w-full flex justify-center mt-[80px]">
              <Loader />
            </div>
          ) : filteredData?.length === 0 && search ? (
            <div className="w-full flex justify-center mt-[80px]">
              <p>Пользователей не найдено</p>
            </div>
          ) : search ? (
            filteredData?.map((user: TypeUser) => <User key={user.id} {...user} />)
          ) : (
            filterUsers?.map((user: TypeUser) => <User key={user.id} {...user} />)
          )}
        </div>
      </div>
    </>
  );
};

export default Deals;
