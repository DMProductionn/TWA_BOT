import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout/Layout';
import History from '../../pages/History';
import Profile from '../../pages/Profile';
import Deals from '../../pages/Deals';
import CreateDeal from '../../pages/CreateDeal';
import Preloader from '../../pages/PreloaderPage';
import PreloaderPage from '../../pages/PreloaderPage';

function App() {

  return (
    <>
      <>
      {
        <Routes>
          <Route path='/' element={<Layout />}>
          <Route index path='/' element={<PreloaderPage />} />
          <Route index path='/deals' element={<Deals />} />
          <Route path='/history' element={<History />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/create-deal/gem4ik01' element={<CreateDeal />} />
          <Route path="*" element={<div>404</div>} />
          </Route>
        </Routes>
      }
    </>
    </>
  );
}

export default App;
