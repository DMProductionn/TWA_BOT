import { useSelector } from 'react-redux';
import TabsProfile from '../widgets/ProfilePage/TabsProfile';
import type { RootState } from '../app/redux/store';
import ActiveDeals from '../widgets/ProfilePage/Deals/ActiveDeals';
import DealsPending from '../widgets/ProfilePage/Deals/DealsPending';
import DealsAcceptOrCancel from '../widgets/ProfilePage/DealsAcceptOrCancel';
import useGetTransactions from '../app/hooks/History/useGetTransactions';
import { useEffect, useState } from 'react';
import type { IDeal } from '../app/types/Deals/deal.type';
import style from '../app/css/Profile/main/prodile.module.css';
import Loader from '../shared/Loader';

const Profile = () => {
  const { valueTabsProfile } = useSelector((state: RootState) => state.tabsSlice);
  const [activeTransitions, setActiveTransitions] = useState<IDeal[]>([]);
  const [pendingTransitions, setPendingTransitions] = useState<IDeal[]>([]);
  const { data, isLoading } = useGetTransactions();
  const { profileInfo } = useSelector((state: RootState) => state.profileSlice);

  useEffect(() => {
    if (data) {
      setActiveTransitions(data.filter((deal: IDeal) => deal.status === 'активно'));
      setPendingTransitions(data.filter((deal: IDeal) => deal.status === 'в ожидании'));
    }
  }, [data]);

  return (
    <>
      <DealsAcceptOrCancel />
      <div className='flex flex-col gap-[15px]'>
        <div className="flex flex-col gap-[5px]">
          <p className="text-green">Текущий баланс</p>
          <p className="text-[30px] font-bold leading-[100%]">{profileInfo ? profileInfo?.balance + ' RUB' : '0.00 RUB'}</p>
        </div>
        <div className="flex flex-col gap-[5px]">
          <p className="text-[14px] text-[#67ABDC]">Замороженный баланс</p>
          <p className="text-[20px] font-bold leading-[100%]">{profileInfo ? profileInfo?.frozen_balance + ' RUB' : '0.00 RUB'}</p>
        </div>
      </div>
      <div className={style.profile}>
        <TabsProfile />
        <div className="flex flex-col gap-[10px]">
          {isLoading ? (
            <div className="flex justify-center items-center w-full h-[250px]">
              <Loader />
            </div>
          ) : valueTabsProfile === 'активно' ? (
            <ActiveDeals activeTransitions={activeTransitions} />
          ) : (
            <DealsPending pendingTransitions={pendingTransitions} />
          )}
        </div>
      </div>
    </>
  );
};

export default Profile;
