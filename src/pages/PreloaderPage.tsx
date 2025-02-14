import { useEffect, useState } from 'react';
import Preloader from '../shared/Preloader';
import { useNavigate } from 'react-router-dom';
import useGetUsersAll from '../app/hooks/Users/useGetUsersALL';
import useGetUsersMe from '../app/hooks/Users/useGetUsersMe';
import useGetTransactions from '../app/hooks/History/useGetTransactions';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../app/redux/store';
import { setUsers } from '../app/redux/Slices/users.slice';
import { setProfileInfo } from '../app/redux/Slices/profile.slice';
import useGetToken from '../app/hooks/Auth/useGetToken';

const PreloaderPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const [userName, setUserName] = useState<string>('');

  const { data: usersAll, isSuccess: isUsersAllSuccess } = useGetUsersAll();
  const { data: usersMe, isSuccess: isUsersMeSuccess } = useGetUsersMe();
  const { isSuccess: isTransactionsSuccess } = useGetTransactions();
  const { mutate: getToken, data: tokenData, isSuccess: isTokenSuccess } = useGetToken();

  const username = {
    username: userName,
  };

  useEffect(() => {
    if (userName) {
      getToken(username);
    }
  }, [userName, getToken]);

  useEffect(() => {
    localStorage.setItem('token', tokenData?.token);
    if (isUsersAllSuccess) {
      dispatch(setUsers(usersAll));
    }
    if (isUsersMeSuccess) {
      dispatch(setProfileInfo(usersMe));
    }
    if (isUsersAllSuccess && isUsersMeSuccess && isTransactionsSuccess && isTokenSuccess) {
      navigate('/deals');
    }
  }, [
    isUsersAllSuccess,
    isUsersMeSuccess,
    isTransactionsSuccess,
    isTokenSuccess,
    getToken,
    navigate,
    dispatch,
    usersAll,
    usersMe,
  ]);

  useEffect(() => {
    if (window.Telegram) {
      window.Telegram.WebApp.ready();
      const initDataUnsafe = window.Telegram.WebApp.initDataUnsafe;

      if (initDataUnsafe && initDataUnsafe.user && initDataUnsafe.user.id) {
        const id = initDataUnsafe.user.username;
        id && setUserName(id);
      } else {
        console.error('User ID is not available');
      }
    } else {
      console.error('Telegram Web App is not available');
    }
  }, []);
  return (
    <div className="w-full h-[100vh] flex justify-center items-center fixed">
      <Preloader />
      <button onClick={() => navigate('/deals')}>11</button>
    </div>
  );
};

export default PreloaderPage;
