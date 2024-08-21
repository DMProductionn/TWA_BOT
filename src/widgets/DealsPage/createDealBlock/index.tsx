import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../../../app/redux/store';
import '../../../app/css/Deals/CreateDeal/create-deal.css';
import CreateDealForUser from '../../../features/CreateDealForUser';
import { useState } from 'react';
import useCreateDeal from '../../../app/hooks/Deals/useCreateDeal';
import Preloader from '../../../shared/Preloader';
import { setActive, setActiveRight } from '../../../app/redux/Slices/animation.slice';

const CreateDealBlock = () => {
  const [valueSum, setValueSum] = useState(0);
  const { active, activeRight } = useSelector((state: RootState) => state.animationSlice);
  const { usersFirstName } = useSelector((state: RootState) => state.usersSlice);
  const { data, mutate, isPending, isSuccess, isError, error } = useCreateDeal();
  const dispatch: AppDispatch = useDispatch();

  

  return (
    <div
      className={`${
        active ? 'go-left' : ''
      } bg-blue-medium absolute z-[9] -top-[50px] w-full h-[400px] py-[10px] rounded-[4px] px-[15px] create-deal-block ${activeRight && 'go-right'}`}>
        <button onClick={() => (dispatch(setActiveRight(true)), dispatch(setActive(false)))}>назад</button>
      {isPending ? (
        <div className="w-full h-full flex justify-center items-center">
          <Preloader />
        </div>
      ) : isSuccess ? (
        <div className="w-full h-full flex justify-center items-center">
          <p>{data?.detail}</p>
        </div>
      ) : isError ? (
        <div className="w-full h-full flex justify-center items-center">
          <p className='text-center text-red'>{error?.message}</p>
        </div>
      ) : (
        <>
          <p className="w-full text-center font-[600] mb-[100px]">Сделка с {usersFirstName}</p>
          <div className="w-full text-center mb-[60px]">
            <p className="w-full text-center mb-[20px]">Введите сумму сделки в рублях</p>
            <input
              onChange={(e) => setValueSum(Number(e.target.value))}
              className="w-full max-w-[200px] text-center h-[30px] bg-[transparent] text-[22px] outline-none border-b"
              type="number"
              placeholder="сумма сделки..."
            />
          </div>
          <CreateDealForUser sum={valueSum} mutate={mutate} />
        </>
      )}
    </div>
  );
};

export default CreateDealBlock;
