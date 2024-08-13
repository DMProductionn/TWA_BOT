import Search from '../widgets/DealsPage/Search';
import User from '../widgets/DealsPage/User';
import style from '../app/css/Deals/Users/users.module.css';
import { useSelector } from 'react-redux';
import type { RootState } from '../app/redux/store';
import { useEffect } from 'react';


const Deals = () => {

  useEffect(() => {
    const test = localStorage.getItem('user_auth')
    const test2 = localStorage.getItem('dc3_server_salt')
    if (test) {
      console.log(test);
    } else {
      console.log('хуйня');
    }

    if (test2) {
      console.log(test2);
    } else {
      console.log('хуйня2');
    }
    
    
   }, [])

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
    </div>
  );
};

export default Deals;
