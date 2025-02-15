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
import useCanceledDeal from '../../../app/hooks/Deals/useCanceledDeal';
import useAcceptDeal from '../../../app/hooks/Deals/useAcceptDeal';
import animation from '../../../../public/img/icons/success.json';
import animationCancel from '../../../../public/img/icons/2.json';
import Lottie from 'lottie-react';
import useCompletionDeal from '../../../app/hooks/Deals/useCompletionDeal';
import Loader from '../../../shared/Loader';

const DealsAcceptOrCancel: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { activeLeftProfile, activeRightProfile } = useSelector(
    (state: RootState) => state.animationSlice,
  );
  const { valueTabsProfile } = useSelector((state: RootState) => state.tabsSlice);
  const { dealDetail } = useSelector((state: RootState) => state.dealDetailSlice);

  const {
    mutate: mutateCompletion,
    isPending: isPendingCompletion,
    isSuccess: isSuccessCompletion,
  } = useCompletionDeal();

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
  const [showAnimationCancel, setShowAnimationCancel] = useState(false);

  useEffect(() => {
    if (isSuccessAccept || isSuccessCompletion) {
      setShowAnimation(true);
      const timer = setTimeout(() => {
        dispatch(setActiveLeftProfile(false));
        dispatch(setActiveRightProfile(false));
        setShowAnimation(false);
      }, 1300);
      return () => clearTimeout(timer);
    }
  }, [isSuccessAccept, isSuccessCompletion]);

  useEffect(() => {
    if (isSuccessCancel) {
      setShowAnimationCancel(true);
      const timer = setTimeout(() => {
        dispatch(setActiveLeftProfile(false));
        dispatch(setActiveRightProfile(false));
        setShowAnimationCancel(false);
      }, 1300);
      return () => clearTimeout(timer);
    }
  }, [isSuccessCancel]);

  return (
    <div
      className={`${
        activeLeftProfile ? 'go-left' : ''
      } bg-blue-dark max-h-[100vh] h-full top-[0px] fixed z-[999] w-full py-[10px] rounded-[4px] px-[15px] create-deal-block ${
        activeRightProfile && 'go-right'
      }`}>
      {isPendingCancel || isPendingAccept || isPendingCompletion ? (
        <div className="w-full mt-[30px] h-[100vh] flex justify-center items-center">
          <Loader />
        </div>
      ) : isErrorAccept ? (
        <div className="w-full h-[100vh] flex justify-center items-center">
          <p className="text-center text-red">{errorAccept?.message}</p>
        </div>
      ) : showAnimation ? (
        <div className="w-full h-[100vh] flex flex-col justify-center gap-[10px] items-center mb-[40px]">
          <Lottie
            animationData={animation}
            loop={true}
            autoplay={true}
            style={{ width: '100px', height: '100px' }}
          />
          <div className="success_text text-green">Сделка успешно принята</div>
        </div>
      ) : showAnimationCancel ? (
        <div className="w-full h-[100vh] flex flex-col justify-center gap-[15px] items-center mb-[40px]">
          <Lottie
            animationData={animationCancel}
            loop={true}
            autoplay={true}
            style={{ width: '80px', height: '80px' }}
          />
          <div className="success_text text-red">Сделка отменена</div>
        </div>
      ) : (
        <>
          <button
            className="flex gap-[10px] justify-center items-center bg-blue-medium h-[40px] top-[40px] w-auto px-[15px] rounded-[20px]"
            onClick={() => (
              dispatch(setActiveRightProfile(true)), dispatch(setActiveLeftProfile(false))
            )}>
            <div className="border-r flex justify-center items-center h-full border-[#4E5567]">
              <svg
                className="mr-[15px]"
                width="9"
                height="13"
                viewBox="0 0 9 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0.833305 6.27963L6.94629 12.3916L8.38428 10.9536L3.70623 6.27557L8.38428 1.60464L6.94629 0.166652L0.833305 6.27963Z"
                  fill="white"
                />
              </svg>
            </div>
            <p className="text-[14px] font-bold">Назад</p>
          </button>
          <div className="w-full h-full px-[15px] flex flex-col justify-center items-center text-center mb-[60px] relative">
            <div className="bg-blue-medium h-[50px] w-full max-w-[330px] rounded-[20px] flex justify-center items-center mb-[30px]">
              <p className="w-full text-center font-bold">
                Сделка с <span className="text-green">{dealDetail?.user_user_for.username}</span>
              </p>
            </div>
            <p className="w-full text-center mb-[5px] font-bold">Сумма сделки</p>
            <div className="flex items-center gap-[10px]">
              <p className="text-white text-[50px] leading-[100%] font-bold summ__AorC">{dealDetail?.sum}</p>
              <p className="text-[#21242D] text-[50px] leading-[100%] font-bold summ__AorC">RUB</p>
            </div>
            <AcceptDeal
              transaction_id={dealDetail?.id ?? ''}
              mutateAccept={mutateAccept}
              mutateCompletion={mutateCompletion}
              valueTabsProfile={valueTabsProfile}
            />
            <CanceledDeal transaction_id={dealDetail?.id ?? ''} mutate={mutateCancel} />
          </div>
        </>
      )}
    </div>
  );
};

export default DealsAcceptOrCancel;
