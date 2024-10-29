import { useEffect, useState } from 'react';
import Preloader from '../shared/Preloader';
import useAddToken from '../app/hooks/Users/useAddToken';
import { useNavigate, useParams } from 'react-router-dom';
import useGetUsersAll from '../app/hooks/Users/useGetUsersALL';
import useGetUsersMe from '../app/hooks/Users/useGetUsersMe';
import useGetTransactions from '../app/hooks/History/useGetTransactions';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../app/redux/store';
import { setUsers } from '../app/redux/Slices/users.slice';
import { setProfileInfo } from '../app/redux/Slices/profile.slice';

const PreloaderPage = () => {
  const [chatId, setChatId] = useState<{ chat_id: number }>();
  const navigate = useNavigate();
  const { token } = useParams();
  const dispatch: AppDispatch = useDispatch();
  const { mutate, isSuccess: isTokenSuccess } = useAddToken();
  const { data: usersAll, isSuccess: isUsersAllSuccess } = useGetUsersAll();
  const { data: usersMe, isSuccess: isUsersMeSuccess, } = useGetUsersMe();
  const { isSuccess: isTransactionsSuccess, } = useGetTransactions();

  console.log(token);
  
  
  
  useEffect(() => {
    localStorage.setItem('token', token || '');
    const chat_id = { chat_id: token ? Number(token) : 0 };
    setChatId(chat_id);
  }, []);

  useEffect(() => {
    if (chatId) {
      mutate(chatId);
    }
  }, [chatId, mutate]);
    

  useEffect(() => {
    dispatch(setUsers(usersAll));
    dispatch(setProfileInfo(usersMe));
    if (isTokenSuccess && isUsersAllSuccess && isUsersMeSuccess && isTransactionsSuccess) {
      navigate('/deals');
      console.log('заебись');
    }
  }, [isTokenSuccess, isUsersAllSuccess, isUsersMeSuccess, isTransactionsSuccess, navigate]);

  return (
    <div className='w-full h-[100vh] flex justify-center items-center fixed'>
      <Preloader />
    </div>
  );
};

export default PreloaderPage;
