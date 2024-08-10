import Balance from "../../../../entities/Balance";
import RefillBalance from "../../../../features/RefillBalance";

const HeaderDeals = () => {
  return (
    <>
      <div>
        <p>Лого</p>
      </div>
      <div className="flex gap-[10px] items-center">
        <Balance />
        <RefillBalance />
      </div>
    </>
  );
};

export default HeaderDeals;
