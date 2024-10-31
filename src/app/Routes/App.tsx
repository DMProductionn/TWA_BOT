import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout/Layout';
import History from '../../pages/History';
import Profile from '../../pages/Profile';
import Deals from '../../pages/Deals';
import PreloaderPage from '../../pages/PreloaderPage';
import HistoryBalance from '../../pages/HistoryBalance';

function App() {
  return (
    <>
      {
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index path="/token/:token" element={<PreloaderPage />} />
            <Route path="/deals" element={<Deals />} />
            <Route path="/history" element={<History />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/history-balance" element={<HistoryBalance />} />
            <Route path="*" element={<div>404</div>} />
          </Route>
        </Routes>
      }
    </>
  );
}

export default App;
