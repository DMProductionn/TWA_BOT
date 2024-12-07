import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../../../app/redux/store';
import '../../../app/css/Deals/CreateDeal/create-deal.css';
import CreateDealForUser from '../../../features/CreateDealForUser';
import { useEffect, useState } from 'react';
import useCreateDeal from '../../../app/hooks/Deals/useCreateDeal';
import Preloader from '../../../shared/Preloader';
import { setActive, setActiveRight } from '../../../app/redux/Slices/animation.slice';
import Lottie from 'lottie-react';
import animation from '../../../../public/img/icons/1.json';
import { useNavigate } from 'react-router-dom';
import { setValueTabsProfile } from '../../../app/redux/Slices/tabs.slice';

const CreateDealBlock = () => {
  const [valueSum, setValueSum] = useState(0);
  const { active, activeRight } = useSelector((state: RootState) => state.animationSlice);
  const { usersFirstName } = useSelector((state: RootState) => state.usersSlice);
  const { mutate, isPending, isSuccess, isError, error } = useCreateDeal();
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        dispatch(setValueTabsProfile('в ожидании'));
        localStorage.setItem('indexTabProfile', JSON.stringify(1));
        navigate('/profile');
        setActiveRight(false);
        dispatch(setActive(false));
      }, 1000);
    }
  }, [isSuccess]);

  return (
    <div
      className={`${
        active ? 'go-left' : ''
      } bg-blue-medium max-h-[400px] absolute z-[999] w-full h-[450px] py-[10px] rounded-[4px] px-[15px] create-deal-block ${
        activeRight && 'go-right'
      }`}>
      {isPending ? (
        <div className="w-full h-full flex justify-center items-center">
          <Preloader />
        </div>
      ) : isSuccess ? (
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
          <button className='absolute' onClick={() => (dispatch(setActiveRight(true)), dispatch(setActive(false)))}>
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
          <p className="w-full text-center font-[600] mb-[100px]">Сделка с {usersFirstName}</p>
          <div className="w-full text-center mb-[60px]">
            <p className="w-full text-center mb-[20px]">Введите сумму сделки в рублях</p>
            <input
              onChange={(e) => setValueSum(Number(e.target.value))}
              className="w-full max-w-[200px] text-center h-[30px] bg-[transparent] text-[22px] outline-none border-b"
              type="number"
              placeholder="сумма сделки..."
            />
            {isError && (
              <p className="w-full mt-[10px] text-center mb-[20px] text-red">{error?.message}</p>
            )}
          </div>
          <CreateDealForUser sum={valueSum} mutate={mutate} />
        </>
      )}
    </div>
  );
};

export default CreateDealBlock;
