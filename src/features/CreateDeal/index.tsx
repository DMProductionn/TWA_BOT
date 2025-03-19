import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../../app/redux/store';
import { setActive, setActiveRight } from '../../app/redux/Slices/animation.slice';
import React from 'react';
import { setUsersFirstName, setUsersId } from '../../app/redux/Slices/users.slice';
import { useNavigate } from 'react-router-dom';

const CreateDeal: React.FC<{firstName: string, user_for: string}> = ({ firstName, user_for }) => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const onClickCreateDeal = () => {
    dispatch(setActive(true));
    dispatch(setActiveRight(false))
    dispatch(setUsersFirstName(firstName));
    dispatch(setUsersId(user_for));
    navigate(`/create-deal/${firstName}`);
  }

  return (
    <button
      onClick={onClickCreateDeal}
      className="bg-green rounded-[10px] active:opacity-[70%] w-[130px] h-[40px] text-[12px] font-medium text-text-black flex justify-center items-center mt-[7px]">
      Создать сделку
    </button>
  );
  
};

export default CreateDeal;
