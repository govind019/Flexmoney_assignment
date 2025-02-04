import Login from './pages/login/Login'
import SignUp from './pages/signup/SignUp'
import{ Toaster } from 'react-hot-toast';
import { useAuthContext } from './context/authContext';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';

function App() {
  const { authUser }=useAuthContext()
  return (
    <div className='min-h-screen custom-scrollbar'>
      <Routes>
        <Route path='/' element={authUser? <Home/> : <Navigate to={'/login'}/>} />
        <Route path='/profile/:id' element={authUser? <Profile/> : <Navigate to={'/login'}/>} />
        <Route path='/login' element={authUser? <Navigate to={'/'}/> : <Login/>} />
        <Route path='/signup' element={authUser? <Navigate to={'/'}/> : <SignUp/>} />
      </Routes>
      <Toaster/>
    </div>
  )
}

export default App
