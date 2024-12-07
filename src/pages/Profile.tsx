import { useSelector } from 'react-redux';
import RatingProfile from '../entities/Rating/RatingProfile';
import TabsProfile from '../widgets/ProfilePage/TabsProfile';
import UserData from '../widgets/ProfilePage/UserData';
import type { RootState } from '../app/redux/store';
import ActiveDeals from '../widgets/ProfilePage/Deals/ActiveDeals';
import DealsPending from '../widgets/ProfilePage/Deals/DealsPending';
import DealsAcceptOrCancel from '../widgets/ProfilePage/DealsAcceptOrCancel';
import useGetTransactions from '../app/hooks/History/useGetTransactions';
import { useEffect, useState, useRef } from 'react';
import type { IDeal } from '../app/types/Deals/deal.type';
import Notification from '../widgets/ProfilePage/Notification';
import style from '../app/css/Profile/main/prodile.module.css';
import Preloader from '../shared/Preloader';

const Profile = () => {
  const { valueTabsProfile } = useSelector((state: RootState) => state.tabsSlice);
  const [activeTransitions, setActiveTransitions] = useState<IDeal[]>([]);
  const [pendingTransitions, setPendingTransitions] = useState<IDeal[]>([]);
  const { profileInfo } = useSelector((state: RootState) => state.profileSlice);
  const { data, isLoading, refetch } = useGetTransactions();
  
  // Создаем ref для хранения предыдущих данных
  const prevDataRef = useRef<any>(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      refetch();
    }, 10000); 

    return () => clearInterval(intervalId); 
  }, [refetch]);

  useEffect(() => {
    if (data) {
      // Сравниваем новые данные с предыдущими
      if (prevDataRef.current) {
        const hasChanges = JSON.stringify(prevDataRef.current) !== JSON.stringify(data);
        if (hasChanges) {
          // Проверяем статус новых данных и выводим соответствующее сообщение
          const newActiveDeals = data.filter((deal: IDeal) => deal.status === 'активно');
          const newPendingDeals = data.filter((deal: IDeal) => deal.status === 'в ожидании');

          if (newPendingDeals.length > 0) {
            console.log('Новые данные со статусом "в ожидании":', newPendingDeals);
          }

          if (newActiveDeals.length > 0) {
            console.log('Новые данные со статусом "активно":', newActiveDeals);
          }
        }
      }

      // Обновляем состояния активных и ожидающих транзакций
      setActiveTransitions(data.filter((deal: IDeal) => deal.status === 'активно'));
      setPendingTransitions(data.filter((deal: IDeal) => deal.status === 'в ожидании'));

      // Сохраняем текущие данные в ref для следующего сравнения
      prevDataRef.current = data;
    }
  }, [data]);

  return (
    <>
      <DealsAcceptOrCancel />
      <UserData
        first_name={profileInfo?.first_name}
        is_premium={profileInfo?.is_premium ?? false}
      />
      <RatingProfile rating={profileInfo?.rating ?? 5.0} />
      <Notification />
      <div className={style.profile}>
        <TabsProfile
          countDealsPending={activeTransitions.length}
          countDealsActive={pendingTransitions.length}
        />
        <div className="flex flex-col gap-[20px]">
          {isLoading ? (
            <div className='flex justify-center items-center w-full h-[250px]'>
              <Preloader />
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
