import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../../../app/redux/store';
import React, { useState } from 'react';
import { setValueTabsProfile } from '../../../app/redux/Slices/tabs.slice';
import '../../../app/css/Profile/Tabs/tabs-profile.css';

const TabsProfile: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const [indexTab, setIndexTab] = useState(
    JSON.parse(localStorage.getItem('indexTabProfile') || '0'),
  );
  const tabs = ['Активные', 'В ожидании'];

  const onClickButton = (tab: string, index: number) => {
    setIndexTab(index);
    localStorage.setItem('indexTabProfile', JSON.stringify(index));
    if (tab === 'Активные') {
      dispatch(setValueTabsProfile('активно'));
    } else {
      dispatch(setValueTabsProfile('в ожидании'));
    }
  };

  return (
    <>
      <div className="wrapper__tabs-profile gap-[10px] pr-[8px] flex justify-between items-center relative">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => onClickButton(tab, index)}
            className={
              index === indexTab
                ? 'item-link mt-[15px] text-[14px] font-bold w-[calc(50%-5px)] rounded-[10px] active'
                : 'item-link mt-[15px] rounded-[10px] font-bold text-[14px] w-[calc(50%-5px)]'
            }>
            {tab}
          </button>
        ))}
      </div>
    </>
  );
};

export default TabsProfile;
