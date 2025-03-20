import React from 'react';
import NoDeals from '../../../../shared/NoDeals';
import type { IDeal } from '../../../../app/types/Deals/deal.type';
import { AppDispatch } from '../../../../app/redux/store';
import { useDispatch } from 'react-redux';
import {
  setActiveLeftProfile,
  setActiveRightProfile,
} from '../../../../app/redux/Slices/animation.slice';
import { setDealDetail } from '../../../../app/redux/Slices/dealdetail.slice';
import { useNavigate } from 'react-router-dom';

type Props = {
  pendingTransitions: IDeal[];
};

const DealsPending: React.FC<Props> = ({ pendingTransitions }) => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const onClickDeal = (deal: IDeal) => {
    dispatch(setActiveLeftProfile(true));
    dispatch(setActiveRightProfile(false));
    dispatch(setDealDetail(deal));
    navigate(`/accept-or-cancel/${deal.id}`);
  };

  // const pendingTest: IDeal[] = [
  //   {
  //     id: '4444',
  //     user_creator: {
  //       chat_id: 332323,
  //     },
  //     sum: '400',
  //     status: 'в ожидании',
  //     created_at: '333',
  //     finished_at: '000',
  //     user_initiator: {
  //       chat_id: 222,
  //       first_name: 'Dima',
  //       last_name: 'Goluz',
  //       username: 'Dima',
  //       is_premium: true,
  //     },
  //     user_user_for: {
  //       chat_id: 1212,
  //       first_name: 'Ivan',
  //       last_name: 'Ivan',
  //       username: 'Ivan',
  //       is_premium: true,
  //     },
  //   },
  // ];

  return (
    <>
      {pendingTransitions?.length === 0 ? (
        <NoDeals />
      ) : (
        pendingTransitions?.map((deal: IDeal) => {
          return (
            <div
              onClick={() => onClickDeal(deal)}
              key={deal.id}
              className="w-full bg-blue-medium cursor-pointer h-[70px] rounded-[20px] py-[10px] flex justify-between items-center px-[15px] relative">
              <div className="flex gap-[10px] items-center">
                <div className="w-[25px] h-[25px] bg-white rounded-[50%]"></div>
                <p className="text-[14px]">{deal.user_initiator.first_name}</p>
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

export default DealsPending;
