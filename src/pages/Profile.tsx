import { useSelector } from 'react-redux';
import RatingProfile from '../entities/Rating/RatingProfile';
import TabsProfile from '../widgets/ProfilePage/TabsProfile';
import UserData from '../widgets/ProfilePage/UserData';
import type { RootState } from '../app/redux/store';
import ActiveDeals from '../widgets/ProfilePage/Deals/ActiveDeals';
import DealsPending from '../widgets/ProfilePage/Deals/DealsPending';
import DealsAcceptOrCancel from '../widgets/ProfilePage/DealsAcceptOrCancel';
import useGetTransactions from '../app/hooks/History/useGetTransactions';
import { useEffect, useState } from 'react';
import type { IDeal } from '../app/types/Deals/deal.type';

const Profile = () => {
  const { valueTabsProfile } = useSelector((state: RootState) => state.tabsSlice);
  const [activeTransitions, setActiveTransitions] = useState([]);
  const [pendingTransitions, setPendingTransitions] = useState([]);
  const { profileInfo } = useSelector((state: RootState) => state.profileSlice);
  const { data } = useGetTransactions();

  useEffect(() => {
    if (data) {
      setActiveTransitions(data?.filter((deal: IDeal) => deal.status === 'активно'))
      setPendingTransitions(data?.filter((deal: IDeal) => deal.status === 'в ожидании'))
    }
  }, [data]);


  return (
    <>
    <DealsAcceptOrCancel />
      <UserData
        first_name={profileInfo?.first_name}
        is_premium={profileInfo?.is_premium ?? false}
      />
      <RatingProfile rating={profileInfo?.rating ?? 0} />
      <div className="bg-blue-medium h-[350px] px-[20px] mb-[20px] rounded-b-[4px] overflow-auto pb-[15px]">
        <TabsProfile countDealsPending={activeTransitions.length} countDealsActive={pendingTransitions.length}/>
        <div className="flex flex-col gap-[20px]">
          {valueTabsProfile === 'активно' ? <ActiveDeals activeTransitions={activeTransitions}/> : <DealsPending pendingTransitions={pendingTransitions} />}
        </div>
      </div>
    </>
  );
};

export default Profile;
