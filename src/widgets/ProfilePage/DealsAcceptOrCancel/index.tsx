import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../../../app/redux/store';
import '../../../app/css/Profile/acceptOrCancel/accept-or-cancel.css';
import {
  setActiveLeftProfile,
  setActiveRightProfile,
} from '../../../app/redux/Slices/animation.slice';
import AcceptDeal from '../../../features/AcceptDeal';
import CanceledDeal from '../../../features/CanceledDeal';
import Preloader from '../../../shared/Preloader';
import useCanceledDeal from '../../../app/hooks/Deals/useCanceledDeal';
import useAcceptDeal from '../../../app/hooks/Deals/useAcceptDeal';
import animation from '../../../../public/img/icons/1.json';
import Lottie from 'lottie-react';

const DealsAcceptOrCancel: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { activeLeftProfile, activeRightProfile } = useSelector(
    (state: RootState) => state.animationSlice,
  );
  const { valueTabsProfile } = useSelector((state: RootState) => state.tabsSlice);
  const { dealDetail } = useSelector((state: RootState) => state.dealDetailSlice);
  const {
    mutate: mutateCancel,
    isPending: isPendingCancel,
    isSuccess: isSuccessCancel,
  } = useCanceledDeal();
  const {
    mutate: mutateAccept,
    isPending: isPendingAccept,
    isSuccess: isSuccessAccept,
    error: errorAccept,
    isError: isErrorAccept,
  } = useAcceptDeal();

 
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    if (isSuccessAccept || isSuccessCancel) {
      setShowAnimation(true); 
      const timer = setTimeout(() => {
        dispatch(setActiveLeftProfile(false));
        dispatch(setActiveRightProfile(false));
        setShowAnimation(false); 
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isSuccessAccept, isSuccessCancel]);

  return (
    <div
      className={`${
        activeLeftProfile ? 'go-left-profile' : ''
      } bg-blue-medium absolute z-[99] -top-[10px] w-full h-[600px] py-[10px] rounded-[4px] px-[15px] create-deal-block-profile ${
        activeRightProfile && 'go-right-profile'
      }`}>
      <div className="flex justify-between">
        <button
          onClick={() => (
            dispatch(setActiveRightProfile(true)), dispatch(setActiveLeftProfile(false))
          )}>
          <svg
            width="37"
            height="38"
            viewBox="0 0 37 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M26.2551 34.0897C25.8035 34.5534 25.0715 34.5534 24.6199 34.0897L10.7449 19.8397C10.2934 19.3759 10.2934 18.6241 10.7449 18.1603L24.6199 3.91031C25.0715 3.44657 25.8036 3.44657 26.2551 3.91031C26.7066 4.37406 26.7066 5.12594 26.2551 5.58969L13.1977 19L26.2551 32.4103C26.7066 32.8741 26.7066 33.6259 26.2551 34.0897Z"
              fill="#D9D9D9"
            />
          </svg>
        </button>
        <p style={{ color: valueTabsProfile === 'активно' ? '#00E577' : '#FFB800' }}>
          {valueTabsProfile === 'активно' ? 'Активна' : 'В ожидании'}
        </p>
      </div>
      {isPendingCancel || isPendingAccept ? (
        <div className="w-full mt-[30px] h-[100vh] flex justify-center items-center">
          <Preloader />
        </div>
      ) : isErrorAccept ? (
        <div className="w-full h-[100vh] flex justify-center items-center">
          <p className="text-center">{errorAccept?.message}</p>
        </div>
      ) : showAnimation ? ( 
        <div className="w-full h-[100vh] flex justify-center items-center mb-[40px]">
          <Lottie
            animationData={animation}
            loop={true}
            autoplay={true}
            style={{ width: '100px', height: '100px' }}
          />
        </div>
      ) : (
        <>
          <div className="mt-[40px] flex flex-col items-center justify-center gap-[30px]">
            <div className="flex flex-col justify-center items-center relative">
              <div className="w-[100px] h-[100px] rounded-[50%] overflow-hidden">
                <img className="w-full h-full object-cover" src="./img/test.png" alt="avatar" />
              </div>
              <p className="mt-[5px] text-[20px]">{dealDetail?.user_initiator.username}</p>
              {dealDetail?.user_initiator.is_premium && (
                <p className="text-blue-super-light text-[14px] absolute -top-[12px] -right-[40px]">
                  Premium
                </p>
              )}
            </div>
            <div className="flex flex-col gap-[10px]">
              <div className="bg-white w-[5px] h-[15px]"></div>
              <div className="bg-white w-[5px] h-[15px]"></div>
              <div className="bg-white w-[5px] h-[15px]"></div>
              <div className="bg-white w-[5px] h-[15px]"></div>
            </div>
            <div className="flex flex-col justify-center items-center relative">
              <div className="w-[100px] h-[100px] rounded-[50%] overflow-hidden">
                <img className="w-full h-full object-cover" src="./img/test.png" alt="avatar" />
              </div>
              <p className="mt-[5px] text-[20px]">{dealDetail?.user_user_for.username}</p>
              {dealDetail?.user_user_for.is_premium && (
                <p className="text-blue-super-light text-[14px] absolute -top-[12px] -right-[35px]">
                  Premium
                </p>
              )}
            </div>
          </div>
          <AcceptDeal transaction_id={dealDetail?.id ?? ''} mutate={mutateAccept} />
          <CanceledDeal transaction_id={dealDetail?.id ?? ''} mutate={mutateCancel} />
          <p className="w-full text-center text-[28px] mt-[45px]">{dealDetail?.sum + 'р'}</p>
        </>
      )}
    </div>
  );
};

export default DealsAcceptOrCancel;
