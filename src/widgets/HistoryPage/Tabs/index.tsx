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
  const tabs = ['Завершенные', 'Отмененные', 'Все'];

  const onClickButton = (tab: string, index: number) => {
    setIndexTab(index);
    localStorage.setItem('indexTabHistory', JSON.stringify(index));
    if (tab === 'Отмененные') {
      dispatch(setValueTabsHistory('отменено'));
    } else if (tab === 'Все') {
      dispatch(setValueTabsHistory('все'));
    } else {
      dispatch(setValueTabsHistory('завершено'));
    }
  };

  return (
    <>
      <div className="wrapper__tabs-history">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => onClickButton(tab, index)}
            className={`item-link ${index === indexTab ? 'active' : ''} ${
              index === 2 ? 'full-width' : 'half-width'
            }`}>
            {tab}
          </button>
        ))}
      </div>
    </>
  );
};

export default Tabs;
