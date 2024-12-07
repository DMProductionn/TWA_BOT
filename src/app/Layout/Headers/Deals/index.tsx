import Balance from '../../../../entities/Balance';
import RefillBalance from '../../../../features/RefillBalance';

const HeaderDeals = () => {
  return (
    <div className="flex justify-between w-full">
      <div>
        <p>Лого</p>
      </div>
      <div className='flex gap-[10px]'>
        <Balance />
        <RefillBalance />
      </div>
    </div>
  );
};

export default HeaderDeals;
