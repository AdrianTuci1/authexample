import { Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import Signup from './components/Signup/index';
import Login from './components/Login/index';
import axios from 'axios';
import { Toaster } from 'react-hot-toast';
import { UserContextProvider } from './context/userContext';
import Dashboard from './components/Dashboard/Dashboard';
import { useState } from 'react';
import ProtectedRoute from './routes/ProtectedRoutes'

axios.defaults.baseURL = 'http://localhost:8800';
axios.defaults.withCredentials = true;

function App() {
  const [ user ] = useState(null);
  const login = window.localStorage.getItem("isLogedIn");

  return (
    <UserContextProvider value={{ user }}>
    <Toaster position='bottom-right' toastOptions={{duration: 2000}}/>
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path="/register" element={login ? (<Main />) : (<Signup />)}/>
      <Route path="/login" element={!login && <Login />}/>
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
        <Dashboard />
         </ProtectedRoute>}
      />
    </Routes>
    </UserContextProvider>
  );
}

export default App;
