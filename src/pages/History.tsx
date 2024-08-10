import { useSelector } from 'react-redux';
import AllBlocks from '../widgets/HistoryPage/HistoryBlocks/AllBlocks';
import Tabs from '../widgets/HistoryPage/Tabs';
import { RootState } from '../app/redux/store';
import CanceledBlock from '../widgets/HistoryPage/HistoryBlocks/CanceledBlock';
import CompletedBlock from '../widgets/HistoryPage/HistoryBlocks/CompletedBlock';

const History = () => {
  const { valueTabsHistory } = useSelector((state: RootState) => state.tabsSlice);

  return (
    <>
      <Tabs />
      <div className=" ">
        {valueTabsHistory === 'Отмененные' ? (
          <CanceledBlock />
        ) : valueTabsHistory === 'Завершенные' ? (
          <CompletedBlock />
        ) : (
          <AllBlocks />
        )}
      </div>
    </>
  );
};

export default History;
