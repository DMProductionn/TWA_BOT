import Search from '../widgets/DealsPage/Search';
import User from '../widgets/DealsPage/User';
import style from '../app/css/Deals/Users/users.module.css';
import Refresh from '../features/Refresh';
import { useSelector } from 'react-redux';
import type { RootState } from '../app/redux/store';


const Deals = () => {

  const { active } = useSelector((state: RootState) => state.animationSlice)

  return (
    <div className={active ? style.users_wrapper : ''}>
      <Search />
      <div className="max-h-[400px] overflow-auto">
        <div className={style.users__wrapper}>
          <User />
          <User />
          <User />
          <User />
        </div>
      </div>
      <Refresh />
    </div>
  );
};

export default Deals;
