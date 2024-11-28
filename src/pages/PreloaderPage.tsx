import { useEffect } from 'react';
import Preloader from '../shared/Preloader';
import { useNavigate } from 'react-router-dom';
import useGetUsersAll from '../app/hooks/Users/useGetUsersALL';
import useGetUsersMe from '../app/hooks/Users/useGetUsersMe';
import useGetTransactions from '../app/hooks/History/useGetTransactions';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../app/redux/store';
import { setUsers } from '../app/redux/Slices/users.slice';
import { setProfileInfo } from '../app/redux/Slices/profile.slice';

const PreloaderPage = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  
  const { data: usersAll, isSuccess: isUsersAllSuccess } = useGetUsersAll();
  const { data: usersMe, isSuccess: isUsersMeSuccess } = useGetUsersMe();
  const { isSuccess: isTransactionsSuccess } = useGetTransactions();

  useEffect(() => {
    dispatch(setUsers(usersAll));
    dispatch(setProfileInfo(usersMe));
    if (
      isUsersAllSuccess &&
      isUsersMeSuccess &&
      isTransactionsSuccess &&
      localStorage.getItem('token')
    ) {
      navigate('/deals');
    }
  }, [isUsersAllSuccess, isUsersMeSuccess, isTransactionsSuccess, navigate]);


  return (
    <div className="w-full h-[100vh] flex justify-center items-center fixed">
      <Preloader />
    </div>
  );
};

export default PreloaderPage;
