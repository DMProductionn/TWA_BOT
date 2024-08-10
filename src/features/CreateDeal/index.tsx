import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../../app/redux/store';
import { setActive } from '../../app/redux/Slices/animation.slice';
import { useNavigate } from 'react-router-dom';

const CreateDeal = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const onClickCreateDeal = () => {
    dispatch(setActive(true));
    setTimeout(() => {
      navigate('/create-deal/gem4ik01')
    }, 200);

    setTimeout(() => {
      dispatch(setActive(false));
    }, 500);
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
