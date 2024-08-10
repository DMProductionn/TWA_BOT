import RatingUser from "../../../entities/Rating/RatingUser";
import CreateDeal from "../../../features/CreateDeal";

const User = () => {
  return (
    <div className="bg-blue-medium w-[170px] h-[155px] rounded-[4px] py-[15px] px-[10px] flex items-center flex-col">
      <div className="relative flex flex-col items-center">
        <div className="bg-[#FFFFFF] mb-[5px] rounded-[50%] w-[50px] h-[50px] flex justify-center items-center overflow-hidden relative">
          <img className="w-full h-full object-cover" src="./img/test.png" alt="img-profile" />
        </div>
        <p className="text-[10px] text-blue-super-light absolute -top-[10px] -right-[20px]">
          Premium
        </p>
        <p className="text-[16px] leading-[90%]">Gem4ik01</p>
      </div>
      <RatingUser />
      <CreateDeal />
    </div>
  );
};

export default User;
