import Balance from '../../../../entities/Balance';
import FrozenBalance from '../../../../entities/FrozenBalances';
import Search from '../../../../widgets/DealsPage/Search';

const HeaderDeals = () => {
  return (
    <>
      <div className="flex flex-col gap-[20px] justify-between w-full">
        <div className="flex flex-wrap w-full justify-between items-center gap-y-[15px] gap-x-[40px] font-sans">
          <Balance />
          <FrozenBalance />
        </div>
        <Search />
      </div>
    </>
  );
};

export default HeaderDeals;
