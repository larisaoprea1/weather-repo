import { Route,Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './components/pages/auth/LoginPage';
import WeatherPage from './components/pages/weather/WeatherPage';
import RegisterPage from './components/pages/auth/RegisterPage';

function App() {
  return (
    <Routes>
      <Route path={"/home"} element={<WeatherPage/>}/>
      <Route path={"/"} element={<LoginPage/>}/>
      <Route path={"/register"} element={<RegisterPage/>}/>
    </Routes>
  );
}

export default App;
