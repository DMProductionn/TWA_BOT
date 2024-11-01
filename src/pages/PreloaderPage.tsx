import { useEffect } from 'react';
import Preloader from '../shared/Preloader';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import useGetUsersAll from '../app/hooks/Users/useGetUsersALL';
import useGetUsersMe from '../app/hooks/Users/useGetUsersMe';
import useGetTransactions from '../app/hooks/History/useGetTransactions';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../app/redux/store';
import { setUsers } from '../app/redux/Slices/users.slice';
import { setProfileInfo } from '../app/redux/Slices/profile.slice';

const PreloaderPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { token } = useParams();
  const dispatch: AppDispatch = useDispatch();
  const { data: usersAll, isSuccess: isUsersAllSuccess } = useGetUsersAll();
  const { data: usersMe, isSuccess: isUsersMeSuccess, } = useGetUsersMe();
  const { isSuccess: isTransactionsSuccess, } = useGetTransactions();

  console.log('TOKEN' + token);
  
  console.log(location.pathname);
  

  useEffect(() => {
    localStorage.setItem('token', token || '');
  }, []);
    

  useEffect(() => {
    dispatch(setUsers(usersAll));
    dispatch(setProfileInfo(usersMe));
    if (isUsersAllSuccess && isUsersMeSuccess && isTransactionsSuccess) {
      navigate('/deals');
    }
  }, [isUsersAllSuccess, isUsersMeSuccess, isTransactionsSuccess, navigate]);

  return (
    <div className='w-full h-[100vh] flex justify-center items-center fixed'>
      <Preloader />
    </div>
  );
};

export default PreloaderPage;
