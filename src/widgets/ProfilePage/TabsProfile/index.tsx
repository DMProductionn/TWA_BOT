import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../../../app/redux/store';
import React, { useState } from 'react';
import { setValueTabsProfile } from '../../../app/redux/Slices/tabs.slice';
import '../../../app/css/Profile/Tabs/tabs-profile.css';

const TabsProfile: React.FC<{ countDealsPending: number, countDealsActive: number }> = ({countDealsPending, countDealsActive}) => {
  const dispatch: AppDispatch = useDispatch();
  const [indexTab, setIndexTab] = useState(
    JSON.parse(localStorage.getItem('indexTabProfile') || '0'),
  );
  const tabs = ['Активные сделки', 'Сделки в ожидании'];

  const onClickButton = (tab: string, index: number) => {
    setIndexTab(index);
    localStorage.setItem('indexTabProfile', JSON.stringify(index));
    if (tab === 'Активные сделки') {
      dispatch(setValueTabsProfile('активно'));
    } else {
      dispatch(setValueTabsProfile('в ожидании'));
    }
  };
  

  return (
    <>
      <div className="wrapper__tabs-profile pr-[8px] flex justify-between items-center relative">
        <div className="w-[16px] h-[16px] absolute left-[120px] top-[10px] rounded-[50%] bg-[#00E577] flex justify-center items-center text-[12px] font-[600]">
          {countDealsPending}
        </div>
        <div className="w-[16px] h-[16px] absolute -right-[9px] top-[10px] rounded-[50%] bg-[#FFB800] flex justify-center items-center text-[12px] font-[600]">
        {countDealsActive}
        </div>
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => onClickButton(tab, index)}
            className={index === indexTab ? 'item-link mt-[15px] text-[14px] active' : 'item-link mt-[15px] text-[14px]'}>
            {tab}
          </button>
        ))}
      </div>
    </>
  );
};

export default TabsProfile;
