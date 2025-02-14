import Balance from '../../../../entities/Balance';
import FrozenBalance from '../../../../entities/FrozenBalances';

const HeaderDeals = () => {
  return (
    <div className="flex justify-between w-full">
      <div className="flex flex-wrap w-full justify-between items-center gap-y-[15px] gap-x-[40px] font-sans">
        <Balance />
        <FrozenBalance />
      </div>
    </div>
  );
};

export default HeaderDeals;
