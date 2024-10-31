import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from '../Layout/Layout';
import History from '../../pages/History';
import Profile from '../../pages/Profile';
import Deals from '../../pages/Deals';
import PreloaderPage from '../../pages/PreloaderPage';
import HistoryBalance from '../../pages/HistoryBalance';

function App() {

  const token = localStorage.getItem('token');

  return (
    <>
      {
        <Routes>
          <Route index path="/token/:token" element={<PreloaderPage />} />
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Navigate to={`/token/${token}`} />} />
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
