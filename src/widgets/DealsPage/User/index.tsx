import React from 'react';
import RatingUser from '../../../entities/Rating/RatingUser';
import CreateDeal from '../../../features/CreateDeal';

type TypeUserProps = {
  first_name: string;
  id: string;
  is_premium: null | true;
  last_name: null | string;
  rating: number;
  username: string;
};

const User: React.FC<TypeUserProps> = ({ id, first_name, is_premium, rating }) => {
  return (
    <div className="bg-blue-medium max-w-[175px] w-full min-h-[170px] rounded-[18px] py-[20px] px-[10px] flex items-center flex-col">
      <div className="relative flex flex-col items-center">
        <div className="mb-[5px] rounded-[50%] w-[50px] h-[50px] flex justify-center items-center overflow-hidden relative">
          <img className="w-full h-full object-cover" src="./img/test.png" alt="img-profile" />
        </div>
        {is_premium ? (
          <p className="text-[10px] text-green absolute -top-[10px] -right-[30px]">Premium</p>
        ) : null}
        <p className="text-[14px] font-bold leading-[90%] my-[5px]">{first_name}</p>
      </div>
      <RatingUser rating={rating} />
      <CreateDeal firstName={first_name} user_for={id} />
    </div>
  );
};

export default User;
