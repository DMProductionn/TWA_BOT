import HeaderDeals from './Deals';
import HeaderHistory from './History';
import HeaderProfile from './Profile';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  return location.pathname === '/deals' ? (
    <header className="flex justify-between items-center pt-[15px] pb-[10px] border-b-[3px] mb-[20px] border-[#fff]">
      <HeaderDeals />
    </header>
  ) : location.pathname === '/create-deal/gem4ik01' ? 
     (
      <header className="flex justify-between items-center pt-[15px] pb-[10px] border-b-[3px] mb-[20px] border-[#fff]">
        <HeaderDeals />
      </header>
    ) : location.pathname === '/history' ? (
      <header className="flex justify-between items-center pt-[15px] pb-[10px] border-b-[3px] mb-[20px] border-[#fff]">
        <HeaderHistory />
      </header>
    )
  : location.pathname === '/profile' ? (
    <header className="flex justify-between items-center pt-[15px] pb-[10px] border-b-[3px] mb-[20px] border-[#fff]">
      <HeaderProfile />
    </header>
  ) : null;
};

export default Header;
