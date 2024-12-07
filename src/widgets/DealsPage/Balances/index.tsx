import { useSelector } from 'react-redux';
import style from '../../../app/css/Deals/Balances/balances.module.css';
import { RootState } from '../../../app/redux/store';

const Balances = () => {
  const { activeBalances } = useSelector((state: RootState) => state.animationSlice);
  const { balances } = useSelector((state: RootState) => state.usersSlice);

  return (
    <div className={activeBalances ? `${style.balances} ${style.active}` : `${style.balances}`}>
      <p className="text-center w-full mt-[10px]">Баланс</p>
      <div className='flex flex-col gap-[10px] mt-[25px]'>
        <div className='flex justify-between items-center bg-blue-dark p-[10px] rounded-[4px]'>
          <p className='text-[14px] leading-7'>Основной баланс</p>
          <p>{balances?.balance + 'р'}</p>
        </div>
        <div className='flex justify-between items-center bg-blue-dark p-[10px] rounded-[4px]'>
          <p className='text-[14px] leading-7'>Замороженный баланс</p>
          <p>{balances?.frozen_balance + 'р'}</p>
        </div>
      </div>
    </div>
  );
};

export default Balances;
