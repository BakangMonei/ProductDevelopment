import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import the necessary components
import SplashScreen from './pages/main/SplashScreen';
import LoginPage from './pages/main/LoginPage';
import RegistrationPage from './pages/main/RegistrationPage';
import './App.css';

function App() {

  return (
    <Router>
      <Routes>
        {/* For testing only */}
        <Route path="/" element={<SplashScreen />} />
        <Route path="/SplashScreen" element={<SplashScreen />} />

        {/* More functionality routes as needed */}
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/RegistrationPage" element={<RegistrationPage />} />
        {/* <Route path="/ForgotPassword" element={<ForgotPassword />} /> */}

      </Routes>
    </Router>
  );
}

export default App;