import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../../app/redux/store';
import { setActive, setActiveRight } from '../../app/redux/Slices/animation.slice';
import React from 'react';
import { setUsersFirstName, setUsersId } from '../../app/redux/Slices/users.slice';

const CreateDeal: React.FC<{firstName: string, user_for: string}> = ({ firstName, user_for }) => {
  const dispatch: AppDispatch = useDispatch();

  const onClickCreateDeal = () => {
    dispatch(setActive(true));
    dispatch(setActiveRight(false))
    dispatch(setUsersFirstName(firstName));
    dispatch(setUsersId(user_for))
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
