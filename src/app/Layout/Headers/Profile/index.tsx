import { useSelector } from "react-redux";
import RatingProfile from "../../../../entities/Rating/RatingProfile";
import { RootState } from "../../../redux/store";
import Notification from "../../../../widgets/ProfilePage/Notification";

const HeaderProfile = () => {
  const { profileInfo } = useSelector((state: RootState) => state.profileSlice);

  return (
    <>
      <div className="bg-blue-medium flex items-center gap-[15px] h-[90px] w-full rounded-[20px] pl-[20px] relative">
        <p className="text-[14px] text-green absolute right-[15px] top-[10px]">{profileInfo?.is_premium ?? false}</p>
        <div className="w-[52px] h-[52px] rounded-[50%] overflow-hidden">
          <img className="w-full h-full object-cover" src="./img/test.png" alt="" />
        </div>
        <div>
          <p className="text-[20px] font-bold">{profileInfo?.username} Gem4ik01</p>
          <RatingProfile rating={profileInfo?.rating ?? 5.0}/>
        </div>
      </div>
      <Notification />
    </>
  );
};

export default HeaderProfile;
