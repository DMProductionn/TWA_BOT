import { useSelector } from 'react-redux';
import AllBlocks from '../widgets/HistoryPage/HistoryBlocks/AllBlocks';
import Tabs from '../widgets/HistoryPage/Tabs';
import { RootState } from '../app/redux/store';
import CanceledBlock from '../widgets/HistoryPage/HistoryBlocks/CanceledBlock';
import CompletedBlock from '../widgets/HistoryPage/HistoryBlocks/CompletedBlock';

const History = () => {
  const { valueTabsHistory } = useSelector((state: RootState) => state.tabsSlice);

  return (
    <div className='p-[15px]'>
      <Tabs />
      <div>
        {valueTabsHistory === 'отменено' ? (
          <CanceledBlock />
        ) : valueTabsHistory === 'завершено' ? (
          <CompletedBlock />
        ) : (
          <AllBlocks />
        )}
      </div>
    </div>
  );
};

export default History;
