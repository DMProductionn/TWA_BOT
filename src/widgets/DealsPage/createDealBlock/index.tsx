import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../../../app/redux/store';
import '../../../app/css/Deals/CreateDeal/create-deal.css';
import CreateDealForUser from '../../../features/CreateDealForUser';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import useCreateDeal from '../../../app/hooks/Deals/useCreateDeal';
import { setActive, setActiveRight } from '../../../app/redux/Slices/animation.slice';
import Lottie from 'lottie-react';
import animation from '../../../../public/img/icons/success.json';
import { useNavigate } from 'react-router-dom';
import { setValueTabsProfile } from '../../../app/redux/Slices/tabs.slice';
import Loader from '../../../shared/Loader';

const CreateDealBlock = () => {
  const [valueSum, setValueSum] = useState('');
  const { active, activeRight } = useSelector((state: RootState) => state.animationSlice);
  const { usersFirstName } = useSelector((state: RootState) => state.usersSlice);
  const { mutate, isPending, isSuccess, isError, error } = useCreateDeal();
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const inputRef = useRef<HTMLInputElement>(null);

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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value.replace(/\D/g, '');
    setValueSum(newValue);
  };

  return (
    <div
      className={`${
        active ? 'go-left' : ''
      } bg-blue-dark max-h-[100vh] h-full top-[0px] fixed z-[999] w-full py-[10px] rounded-[4px] px-[15px] create-deal-block ${
        activeRight && 'go-right'
      }`}>
      {isPending ? (
        <div className="w-full h-full flex justify-center items-center">
          <Loader />
        </div>
      ) : isSuccess ? (
        <div className="w-full h-full flex flex-col justify-center items-center mb-[40px]">
          <Lottie
            animationData={animation}
            loop={true}
            autoplay={true}
            style={{ width: '150px', height: '150px' }}
          />
          <div className="success_text">Сделка успешно создана</div>
        </div>
      ) : (
        <>
          <button
            className="absolute z-[999] flex gap-[10px] justify-center items-center bg-blue-medium h-[40px] top-[40px] w-auto px-[15px] rounded-[20px]"
            onClick={() => (dispatch(setActiveRight(true)), dispatch(setActive(false)))}>
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
          <div className="w-full h-full flex flex-col justify-center items-center text-center mb-[60px] relative">
            <div className="bg-blue-medium h-[50px] w-[330px] rounded-[20px] flex justify-center items-center mb-[30px]">
              <p className="w-full text-center font-bold">
                Сделка с <span className="text-green">{usersFirstName}Gem4ik01</span>
              </p>
            </div>
            <p className="w-full text-center mb-[5px] font-bold">Введите сумму в рублях</p>
            <div className="flex items-center">
              <input
                ref={inputRef}
                value={valueSum}
                onChange={handleChange}
                className="leading-[100%] w-[50%] text-center text-white bg-[transparent] font-bold text-[50px] outline-none flex-grow"
                type="text"
                placeholder="0.00"
              />
            </div>
            {!isError && (
              // @ts-ignore
              <p className="w-full mt-[10px] text-center mb-[20px] text-red">{error?.message}</p>
            )}
            <CreateDealForUser sum={valueSum} mutate={mutate} />
          </div>
        </>
      )}
    </div>
  );
};

export default CreateDealBlock;
