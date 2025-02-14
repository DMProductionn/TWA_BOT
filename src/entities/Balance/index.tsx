import { useDispatch } from 'react-redux';
import useGetUsersMe from '../../app/hooks/Users/useGetUsersMe';
import { useEffect } from 'react';
import { setBalances } from '../../app/redux/Slices/users.slice';

const Balance = () => {
  const { data } = useGetUsersMe();
  const dispatch = useDispatch();

  useEffect(() => {
    const balance = {
      balance: data?.balance,
      frozen_balance: data?.frozen_balance,
    };
    dispatch(setBalances(balance));
  }, [data]);

  return (
    <div className='flex flex-col'>
      <p className='text-[16px] font-bold text-green'>Текущий баланс</p>
      <p
        className="text-[30px] font-bold leading-[100%]">
        {data ? data?.balance + 'RUB' : '0.00 RUB'}
      </p>
    </div>
  );
};

export default Balance;
