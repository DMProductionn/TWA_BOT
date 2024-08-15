import { useSelector } from 'react-redux';
import RatingProfile from '../entities/Rating/RatingProfile';
import TabsProfile from '../widgets/ProfilePage/TabsProfile';
import UserData from '../widgets/ProfilePage/UserData';
import type { RootState } from '../app/redux/store';
import ActiveDeals from '../widgets/ProfilePage/Deals/ActiveDeals';
import DealsPending from '../widgets/ProfilePage/Deals/DealsPending';
import NoDeals from '../shared/NoDeals';
import useGetTransactionsWithStatus from '../app/hooks/History/useGetTransitionsWithStatus';
import { IDeal } from '../app/types/Deals/deal.type';

const Profile = () => {
  const { valueTabsProfile } = useSelector((state: RootState) => state.tabsSlice);

  const { profileInfo } = useSelector((state: RootState) => state.profileSlice);

  const { data } = useGetTransactionsWithStatus(valueTabsProfile);

  return (
    <>
      <UserData
        first_name={profileInfo?.first_name}
        is_premium={profileInfo?.is_premium ?? false}
      />
      <RatingProfile rating={profileInfo?.rating ?? 0} />
      <div className="bg-blue-medium h-[350px] px-[20px] mb-[20px] rounded-b-[4px] overflow-auto pb-[15px]">
        <TabsProfile />
        <div className="flex flex-col gap-[20px]">
          {data?.length === 0 ? (
            <NoDeals />
          ) : valueTabsProfile === 'активно' ? (
            <>
              {data?.map((deal: IDeal) => (
                <ActiveDeals key={deal.id} {...deal.user_user_for} sum={deal.sum}/>
              ))}
            </>
          ) : valueTabsProfile === 'в ожидании' && (
            <>
              {data?.map((deal: IDeal) => (
                <DealsPending key={deal.id} {...deal.user_user_for} sum={deal.sum} />
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Profile;
