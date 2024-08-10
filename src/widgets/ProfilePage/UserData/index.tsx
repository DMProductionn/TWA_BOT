const UserData = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-[30px]">
      <div className="relative">
        <div className="w-[110px] h-[110px] rounded-[50%] overflow-hidden mb-[8px]">
          <p className="text-[13px] text-blue-super-light absolute -top-[10px] -right-[35px]">Premium</p>
          <img className="w-full h-full object-cover" src="./img/test.png" alt="" />
        </div>
      </div>
      <p className="text-[24px]">Gem4ik01</p>
    </div>
  );
};

export default UserData;
