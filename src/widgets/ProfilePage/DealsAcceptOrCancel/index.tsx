import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../../../app/redux/store';
import '../../../app/css/Profile/acceptOrCancel/accept-or-cancel.css';
import {
  setActiveLeftProfile,
  setActiveRightProfile,
} from '../../../app/redux/Slices/animation.slice';

const DealsAcceptOrCancel: React.FC = () => {
  const { activeLeftProfile, activeRightProfile } = useSelector(
    (state: RootState) => state.animationSlice,
  );
  const dispatch: AppDispatch = useDispatch();
  const { valueTabsProfile } = useSelector((state: RootState) => state.tabsSlice);

  return (
    <div
      className={`${
        activeLeftProfile ? 'go-left-profile' : ''
      } bg-blue-medium absolute z-[99] -top-[5px] w-full h-[600px] py-[10px] rounded-[4px] px-[15px] create-deal-block-profile ${
        activeRightProfile && 'go-right-profile'
      }`}>
      <div className="flex justify-between">
        <button
          onClick={() => (
            dispatch(setActiveRightProfile(true)), dispatch(setActiveLeftProfile(false))
          )}>
          назад
        </button>
        <p style={{ color: valueTabsProfile === 'активно' ? '#00E577' : '#FFB800' }}>{valueTabsProfile === 'активно' ? 'Активна' : 'В ожидании'}</p>
      </div>
    </div>
  );
};

export default DealsAcceptOrCancel;

// onClick={() => (dispatch(setActiveRight(true)), dispatch(setActive(false)))}
