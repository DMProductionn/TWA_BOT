import { useSelector } from 'react-redux';
import RatingProfile from '../entities/Rating/RatingProfile';
import TabsProfile from '../widgets/ProfilePage/TabsProfile';
import UserData from '../widgets/ProfilePage/UserData';
import type { RootState } from '../app/redux/store';
import ActiveDeals from '../widgets/ProfilePage/Deals/ActiveDeals';
import DealsPending from '../widgets/ProfilePage/Deals/DealsPending';

const Profile = () => {
  const { valueTabsProfile } = useSelector((state: RootState) => state.tabsSlice);

  return (
    <>
      <UserData />
      <RatingProfile />
      <div className="bg-blue-medium h-[350px] px-[20px] mb-[20px] rounded-b-[4px] overflow-auto pb-[15px]">
        <TabsProfile />
        <div className='flex flex-col gap-[20px]'>{valueTabsProfile === 'Активные сделки' ? <ActiveDeals /> : <DealsPending />}</div>
      </div>
    </>
  );
};

export default Profile;
