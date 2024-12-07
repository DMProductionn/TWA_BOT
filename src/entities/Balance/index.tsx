import { useDispatch, useSelector } from 'react-redux';
import useGetUsersMe from '../../app/hooks/Users/useGetUsersMe';
import { setActiveBalances } from '../../app/redux/Slices/animation.slice';
import { RootState } from '../../app/redux/store';
import { useEffect } from 'react';
import { setBalances } from '../../app/redux/Slices/users.slice';

const Balance = () => {
  const { data } = useGetUsersMe();
  const { activeBalances } = useSelector((state: RootState) => state.animationSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    const balance = {
      balance: data?.balance,
      frozen_balance: data?.frozen_balance,
    };
    dispatch(setBalances(balance));
  }, [data]);

  return (
    <button
      onClick={() => dispatch(setActiveBalances(!activeBalances))}
      className="text-[14px] flex justify-center items-center bg-blue-medium rounded-[4px] w-auto px-[10px] h-[25px]">
      {data ? data?.balance + 'р' : '0р'}
    </button>
  );
};

export default Balance;
