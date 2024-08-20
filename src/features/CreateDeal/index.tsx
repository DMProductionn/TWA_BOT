import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../../app/redux/store';
import { setActive } from '../../app/redux/Slices/animation.slice';
import React from 'react';
import { setUsersFirstName } from '../../app/redux/Slices/users.slice';

const CreateDeal: React.FC<{firstName: string}> = ({ firstName }) => {
  const dispatch: AppDispatch = useDispatch();

  const onClickCreateDeal = () => {
    dispatch(setActive(true));
    dispatch(setUsersFirstName(firstName));
  }

  return (
    <button
      onClick={onClickCreateDeal}
      className="bg-blue-light rounded-[4px] w-[130px] h-[25px] text-[12px] flex justify-center items-center mt-[7px]">
      Создать сделку
    </button>
  );
  
};

export default CreateDeal;
