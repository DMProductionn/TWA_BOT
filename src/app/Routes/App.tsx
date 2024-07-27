import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home';


function App() {

  return (
    <>
      {
        <Routes>
          <Route path='/' element={<Home />}></Route>
          {/* <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path="/profile/:slug/" element={<Profile />} />
          </Route>
          <Route path="/auth/users/activation/:uid/:token" element={<EmailConfirmation />} />
          <Route path="/auth/users/reset_password_confirm/:uid/:token" element={<Recovery />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/login" element={<Auth />} /> */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      }
    </>
  )
}

export default App
