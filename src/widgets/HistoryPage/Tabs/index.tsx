import { useState } from 'react';
import '../../../app/css/History/Tabs/tabs.css';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../../../app/redux/store';
import { setValueTabsHistory } from '../../../app/redux/Slices/tabs.slice';

const Tabs = () => {
  const dispatch: AppDispatch = useDispatch();
  const [indexTab, setIndexTab] = useState(
    JSON.parse(localStorage.getItem('indexTabHistory') || '0'),
  );
  const tabs = ['Все', 'Завершенные', 'Отмененные'];

  const onClickButton = (tab: string, index: number) => {
    setIndexTab(index);
    localStorage.setItem('indexTabHistory', JSON.stringify(index));
    dispatch(setValueTabsHistory(tab));
  };

  return (
    <>
      <div className="wrapper__tabs-history">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => onClickButton(tab, index)}
            className={index === indexTab ? 'item-link active' : 'item-link'}>
            {tab}
          </button>
        ))}
      </div>
    </>
  );
};

export default Tabs;
