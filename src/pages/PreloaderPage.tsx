import { useEffect, useState } from 'react';
import Preloader from '../shared/Preloader';
import { useNavigate } from 'react-router-dom';
import useGetUsersAll from '../app/hooks/Users/useGetUsersALL';
import useGetUsersMe from '../app/hooks/Users/useGetUsersMe';
import useGetTransactions from '../app/hooks/History/useGetTransactions';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../app/redux/store';
import { setUsers } from '../app/redux/Slices/users.slice';
import { setProfileInfo } from '../app/redux/Slices/profile.slice';



const PreloaderPage: React.FC = () => {
    const navigate = useNavigate();
    const dispatch: AppDispatch = useDispatch();
    const [userId, setUserId] = useState<number | null>(null);
    
    const { data: usersAll, isSuccess: isUsersAllSuccess } = useGetUsersAll();
    const { data: usersMe, isSuccess: isUsersMeSuccess } = useGetUsersMe();
    const { isSuccess: isTransactionsSuccess } = useGetTransactions();

    useEffect(() => {
        if (isUsersAllSuccess) {
            dispatch(setUsers(usersAll));
        }
        if (isUsersMeSuccess) {
            dispatch(setProfileInfo(usersMe));
        }
        if (isUsersAllSuccess && isUsersMeSuccess && isTransactionsSuccess) {
            navigate('/deals');
        }
    }, [isUsersAllSuccess, isUsersMeSuccess, isTransactionsSuccess, navigate, dispatch, usersAll, usersMe]);

    useEffect(() => {
        // Проверяем, доступен ли Telegram Web App
        if (window.Telegram) {
            window.Telegram.WebApp.ready();
            const initDataUnsafe = window.Telegram.WebApp.initDataUnsafe;

            // Проверяем, существует ли объект и его свойства
            if (initDataUnsafe && initDataUnsafe.user && initDataUnsafe.user.id) {
                const id = initDataUnsafe.user.id; // Получаем ID пользователя
                setUserId(id);
                console.log("User ID:", userId); // Логируем ID пользователя
            } else {
                console.error("User ID is not available");
            }
        } else {
            console.error("Telegram Web App is not available");
        }
    }, []);

    return (
        <div className="w-full h-[100vh] flex justify-center items-center fixed">
            <Preloader />
        </div>
    );
};

export default PreloaderPage;