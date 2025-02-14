import Search from '../../../widgets/DealsPage/Search';
import HeaderDeals from './Deals';
import HeaderHistory from './History';
import HeaderHistoryBalance from './HistoryBalance';
import HeaderProfile from './Profile';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  return location.pathname === '/deals' ? (
    <>
      <header className="flex justify-between items-center pt-[15px] mb-[20px]">
        <HeaderDeals />
      </header>
      <Search />
    </>
  ) : location.pathname === '/create-deal/gem4ik01' ? (
    <header className="flex justify-between items-center pt-[15px] pb-[10px] mb-[20px]">
      <HeaderDeals />
    </header>
  ) : location.pathname === '/history' ? (
    <header className="pt-[15px] pb-[10px] mb-[20px]">
      <HeaderHistory />
    </header>
  ) : location.pathname === '/profile' ? (
    <header className="flex flex-col gap-[15px] justify-between items-center pt-[15px] pb-[10px] mb-[20px]">
      <HeaderProfile />
    </header>
  ) : location.pathname === '/history-balance' ? (
    <header className="flex justify-between items-center pt-[15px] pb-[10px] mb-[20px]">
      <HeaderHistoryBalance />
    </header>
  ) : null;
};

export default Header;
