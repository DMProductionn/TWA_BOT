import { useSelector } from 'react-redux';
import AllBlocks from '../widgets/HistoryPage/HistoryBlocks/AllBlocks';
import Tabs from '../widgets/HistoryPage/Tabs';
import type { RootState } from '../app/redux/store';
import CanceledBlock from '../widgets/HistoryPage/HistoryBlocks/CanceledBlock';
import CompletedBlock from '../widgets/HistoryPage/HistoryBlocks/CompletedBlock';
import useGetTransactions from '../app/hooks/History/useGetTransactions';
import { useEffect, useState } from 'react';
import type { IDeal } from '../app/types/Deals/deal.type';

const History = () => {
  const { valueTabsHistory } = useSelector((state: RootState) => state.tabsSlice);
  const [transitionsCanceled, setTransitionsCanceled] = useState([]);
  const [transitionsCompleted, setTransitionsCompleted] = useState([]);
  const [transitionsAll, setTransitionsAll] = useState([]);

  const { data } = useGetTransactions();

  useEffect(() => {
    if (data) {
      setTransitionsCanceled(data?.filter((deal: IDeal) => (deal.status === 'отменено')));
      setTransitionsCompleted(data?.filter((deal: IDeal) => deal.status === 'завершено'));
      setTransitionsAll(data?.filter((deal: IDeal) => deal.status === 'завершено' || deal.status === 'отменено'));
    }
  }, [data])
  

  return (
    <div className='p-[15px]'>
      <Tabs />
      <div className='flex flex-col gap-[15px]'>
        {valueTabsHistory === 'отменено' ? (
          <CanceledBlock transitionsCanceled={transitionsCanceled}/>
        ) : valueTabsHistory === 'завершено' ? (
          <CompletedBlock transitionsCompleted={transitionsCompleted}/>
        ) : (
          <AllBlocks transitionsAll={transitionsAll}/>
        )}
      </div>
    </div>
  );
};

export default History;
