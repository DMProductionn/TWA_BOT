import User from '../widgets/DealsPage/User';
import style from '../app/css/Deals/Users/users.module.css';
import { useSelector } from 'react-redux';
import type { RootState } from '../app/redux/store';
import useGetUserSearch from '../app/hooks/Users/useGetUserSearch';
import { useEffect } from 'react';
import { TypeUser } from '../app/types/Deals/user.type';
import Preloader from '../shared/Preloader';
import CreateDealBlock from '../widgets/DealsPage/createDealBlock';

const Deals = () => {
  const { active } = useSelector((state: RootState) => state.animationSlice);
  const { users } = useSelector((state: RootState) => state.usersSlice);
  const { search } = useSelector((state: RootState) => state.searchSlice);

  const { data, refetch, isLoading } = useGetUserSearch(search || null);

  useEffect(() => {
    if (search && search.trim() !== '') {
      refetch();
    }
  }, [search, refetch]);

  return (
    <>
      <div className={active ? style.users_wrapper : ''}>
        <div className="max-h-[400px] overflow-auto">
        <CreateDealBlock />
          <div className={style.users__wrapper}>
            {isLoading ? (
              <div className="w-full flex justify-center mt-[80px]">
                <Preloader />
              </div>
            ) : data?.length === 0 && search ? (
              <div className="w-full flex justify-center mt-[80px]">
                <p>Пользователей не найдено</p>
              </div>
            ) : search ? (
              data?.map((user: TypeUser) => <User key={user.id} {...user} />)
            ) : (
              users?.map((user) => <User key={user.id} {...user} />)
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Deals;
