import React from 'react';
import NoDeals from '../../../../shared/NoDeals';
import type { IDeal } from '../../../../app/types/Deals/deal.type';
import type { AppDispatch } from '../../../../app/redux/store';
import { useDispatch } from 'react-redux';
import {
  setActiveLeftProfile,
  setActiveRightProfile,
} from '../../../../app/redux/Slices/animation.slice';
import { setDealDetail } from '../../../../app/redux/Slices/dealdetail.slice';

const ActiveDeals: React.FC<{ activeTransitions: IDeal[] }> = ({ activeTransitions }) => {
  const dispatch: AppDispatch = useDispatch();

  const onClickDeal = (deal: IDeal) => {
    dispatch(setActiveLeftProfile(true));
    dispatch(setActiveRightProfile(false));
    dispatch(setDealDetail(deal));
  };

  return (
    <>
      {activeTransitions?.length === 0 ? (
        <NoDeals />
      ) : (
        activeTransitions?.map((deal: IDeal) => {
          return (
            <div
              onClick={() => onClickDeal(deal)}
              key={deal.id}
              className="w-full cursor-pointer bg-blue-medium h-[70px] rounded-[20px] py-[10px] flex justify-between items-center px-[15px] relative">
              <div className="flex gap-[10px] items-center">
                <div className="w-[25px] h-[25px] bg-white rounded-[50%]"></div>
                <p className="text-[14px]">{deal.user_initiator.first_name}</p>{' '}
                {/*{deal.user_user_for.first_name} */}
              </div>
              <div className="flex items-center gap-[20px]">
                <p className="text-[16px] font-bold">{deal.sum + ' RUB'}</p>
                <img className="rotate-180" src="./img/icons/coolicon.svg" alt="" />
              </div>
            </div>
          );
        })
      )}
    </>
  );
};

export default ActiveDeals;
