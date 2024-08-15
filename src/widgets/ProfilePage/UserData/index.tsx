import React from "react";

type TypeUserDataProps = {
  first_name?: string;
  is_premium?: boolean;
};

const UserData: React.FC<TypeUserDataProps> = ({first_name, is_premium}) => {
  return (
    <div className="flex flex-col items-center justify-center bg-blue-dark mt-[30px]">
      <div className="relative">
        <div className="w-[110px] h-[110px] rounded-[50%] overflow-hidden mb-[8px]">
          {
            is_premium ? <p className="text-[13px] text-blue-super-light absolute -top-[10px] -right-[35px]">Premium</p> : null
          }
          <img className="w-full h-full object-cover" src="./img/test.png" alt="" />
        </div>
      </div>
      <p className="text-[24px] mb-[10px]">{first_name}</p>
    </div>
  );
};

export default UserData;
