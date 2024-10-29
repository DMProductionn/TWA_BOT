import useGetPaymentHistory from '../app/hooks/Payment/useGetPaymentHistory';
import { TypeHistoryBalance } from '../app/types/History/historyBalance.type';
import History from '../widgets/HistoryBalance/History';

const HistoryBalance = () => {
  const { data } = useGetPaymentHistory();

  return (
    <div className="overflow-auto max-h-[600px] p-[15px] flex flex-col gap-[20px]">
      {data?.length === 0 ? (
        <div className="flex h-[100vh] items-center justify-center"><p>нет транзакций</p></div>
      ) : (
        data?.map((history: TypeHistoryBalance) => {
          return <History key={history.id} history={history} />;
        })
      )}
    </div>
  );
};

export default HistoryBalance;
