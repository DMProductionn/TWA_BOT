import { useLocation, useNavigate } from 'react-router-dom';
import style from '../../css/Footer/footer.module.css';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const onClickNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <>
      {location.pathname === '/' ? null : (
        <footer className="bg-blue-medium h-[65px] flex justify-center items-center z-[999]">
          <nav className="w-full">
            <ul className="flex justify-around">
              <li
                className={location.pathname === '/deals' ? `${style.link} ${style.active}` : `${style.link}`}
                onClick={() => onClickNavigation('/deals')}>
                <svg
                  width="24"
                  height="27"
                  viewBox="0 0 24 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 19.5C0 19.0398 0.383756 18.6667 0.857143 18.6667H21.0735L15.6796 13.4226C15.3449 13.0972 15.3449 12.5695 15.6796 12.2441C16.0144 11.9186 16.5571 11.9186 16.8918 12.2441L23.7489 18.9107C24.0837 19.2362 24.0837 19.7638 23.7489 20.0893L16.8918 26.7559C16.5571 27.0814 16.0144 27.0814 15.6796 26.7559C15.3449 26.4305 15.3449 25.9028 15.6796 25.5774L21.0735 20.3333H0.857143C0.383756 20.3333 0 19.9602 0 19.5Z"
                    fill={location.pathname === '/deals' ? '#1FA9FF' : '#fff'}
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M24 7.5C24 7.96024 23.6162 8.33333 23.1429 8.33333L2.92647 8.33333L8.32038 13.5774C8.65511 13.9028 8.65511 14.4305 8.32038 14.7559C7.98564 15.0814 7.44293 15.0814 7.10819 14.7559L0.251051 8.08926C-0.0836853 7.76382 -0.0836852 7.23618 0.251051 6.91074L7.10819 0.244077C7.44293 -0.08136 7.98564 -0.0813599 8.32038 0.244077C8.65511 0.569514 8.65511 1.09715 8.32038 1.42259L2.92647 6.66667L23.1429 6.66667C23.6162 6.66667 24 7.03976 24 7.5Z"
                    fill={location.pathname === '/deals' ? '#1FA9FF' : '#fff'}
                  />
                </svg>
                <p
                  style={{ color: location.pathname === '/deals' ? '#1FA9FF' : '#fff' }}
                  className="text-[14px]">
                  Сделки
                </p>
              </li>
              <li
                className={location.pathname === '/history' ? `${style.link} ${style.active}` : `${style.link}`}
                onClick={() => onClickNavigation('/history')}>
                <svg
                  width="21"
                  height="28"
                  viewBox="0 0 21 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M6.125 12.25C5.64175 12.25 5.25 12.6418 5.25 13.125C5.25 13.6082 5.64175 14 6.125 14H14.875C15.3582 14 15.75 13.6082 15.75 13.125C15.75 12.6418 15.3582 12.25 14.875 12.25H6.125Z"
                    fill={location.pathname === '/history' ? '#1FA9FF' : '#fff'}
                  />
                  <path
                    d="M5.25 16.625C5.25 16.1418 5.64175 15.75 6.125 15.75H14.875C15.3582 15.75 15.75 16.1418 15.75 16.625C15.75 17.1082 15.3582 17.5 14.875 17.5H6.125C5.64175 17.5 5.25 17.1082 5.25 16.625Z"
                    fill={location.pathname === '/history' ? '#1FA9FF' : '#fff'}
                  />
                  <path
                    d="M5.25 20.125C5.25 19.6418 5.64175 19.25 6.125 19.25H9.625C10.1082 19.25 10.5 19.6418 10.5 20.125C10.5 20.6082 10.1082 21 9.625 21H6.125C5.64175 21 5.25 20.6082 5.25 20.125Z"
                    fill={location.pathname === '/history' ? '#1FA9FF' : '#fff'}
                  />
                  <path
                    d="M13.125 0H3.5C1.567 0 0 1.567 0 3.5V24.5C0 26.433 1.567 28 3.5 28H17.5C19.433 28 21 26.433 21 24.5V7.875L13.125 0ZM13.125 1.75V5.25C13.125 6.69975 14.3003 7.875 15.75 7.875H19.25V24.5C19.25 25.4665 18.4665 26.25 17.5 26.25H3.5C2.5335 26.25 1.75 25.4665 1.75 24.5V3.5C1.75 2.5335 2.5335 1.75 3.5 1.75H13.125Z"
                    fill={location.pathname === '/history' ? '#1FA9FF' : '#fff'}
                  />
                </svg>
                <p
                  style={{ color: location.pathname === '/history' ? '#1FA9FF' : '#fff' }}
                  className="text-[14px]">
                  История
                </p>
              </li>
              <li
                className={location.pathname === '/profile' ? `${style.link} ${style.active}` : `${style.link}`}
                onClick={() => onClickNavigation('/profile')}>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M15 15C18.1066 15 20.625 12.4816 20.625 9.375C20.625 6.2684 18.1066 3.75 15 3.75C11.8934 3.75 9.375 6.2684 9.375 9.375C9.375 12.4816 11.8934 15 15 15ZM18.75 9.375C18.75 11.4461 17.0711 13.125 15 13.125C12.9289 13.125 11.25 11.4461 11.25 9.375C11.25 7.30393 12.9289 5.625 15 5.625C17.0711 5.625 18.75 7.30393 18.75 9.375Z"
                    fill={location.pathname === '/profile' ? '#1FA9FF' : '#fff'}
                  />
                  <path
                    d="M26.25 24.375C26.25 26.25 24.375 26.25 24.375 26.25H5.625C5.625 26.25 3.75 26.25 3.75 24.375C3.75 22.5 5.625 16.875 15 16.875C24.375 16.875 26.25 22.5 26.25 24.375ZM24.375 24.3685C24.3723 23.9057 24.0867 22.5196 22.8148 21.2477C21.5918 20.0247 19.2921 18.75 15 18.75C10.7079 18.75 8.40816 20.0247 7.18518 21.2477C5.91329 22.5196 5.62767 23.9057 5.625 24.3685H24.375Z"
                    fill={location.pathname === '/profile' ? '#1FA9FF' : '#fff'}
                  />
                </svg>
                <p
                  style={{ color: location.pathname === '/profile' ? '#1FA9FF' : '#fff' }}
                  className='text-[14px]'>
                  Профиль
                </p>
              </li>
            </ul>
          </nav>
        </footer>
      )}
    </>
  );
};

export default Footer;
