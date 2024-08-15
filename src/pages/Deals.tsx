import User from '../widgets/DealsPage/User';
import style from '../app/css/Deals/Users/users.module.css';
import { useSelector } from 'react-redux';
import type { RootState } from '../app/redux/store';

const Deals = () => {
  const { active } = useSelector((state: RootState) => state.animationSlice);
  const { users } = useSelector((state: RootState) => state.usersSlice);

  return (
    <>
      <div className={active ? style.users_wrapper : ''}>
        <div className="max-h-[400px] overflow-auto">
          <div className={style.users__wrapper}>
            {users?.map((user) => (
              <User
                key={user.id}
                {...user}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Deals;
