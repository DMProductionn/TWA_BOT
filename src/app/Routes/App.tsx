import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout/Layout';
import History from '../../pages/History';
import Profile from '../../pages/Profile';
import Deals from '../../pages/Deals';

function App() {

  return (
    <>
      <>
      {
        <Routes>
          <Route path='/' element={<Layout />}>
          <Route index path='/' element={<Deals />} />
          <Route path='/history' element={<History />} />
          <Route path='/profile' element={<Profile />} />
          <Route path="*" element={<div>404</div>} />
          </Route>
        </Routes>
      }
    </>
    </>
  );
}

export default App;
