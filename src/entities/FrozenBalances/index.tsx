import { useSelector } from 'react-redux';
import { RootState } from '../../app/redux/store';

const FrozenBalance = () => {
  const { balances } = useSelector((state: RootState) => state.usersSlice);
  return (
    <div className="flex flex-col">
      <p className="text-[14px] font-bold text-[#67ABDC]">Замороженный баланс</p>
      <p className="text-[20px] font-bold leading-[100%]">
        {balances?.frozen_balance ? balances?.frozen_balance + 'RUB' : '0.00 RUB'}
      </p>
    </div>
  );
};

export default FrozenBalance;
