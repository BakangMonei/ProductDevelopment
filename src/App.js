import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'; // Import createStore from redux
import rootReducer from './redux/reducers'; // Import your root reducer
import SplashScreen from './pages/main/SplashScreen';
import LoginPage from './pages/main/LoginPage';
import ForgotPassword from './pages/main/ForgotPassword';
import RegistrationPage from './pages/main/RegistrationPage';
import './App.css';

// Create Redux store
const store = createStore(rootReducer);

function App() {
  return (
    // Provide the Redux store to your React app
    <Provider store={store}>
      <Router>
        <Routes>
          {/* For testing only */}
          <Route path="/" element={<SplashScreen />} />
          <Route path="/SplashScreen" element={<SplashScreen />} />

          {/* More functionality routes as needed */}
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/RegistrationPage" element={<RegistrationPage />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} /> 

        </Routes>
      </Router>
    </Provider>
  );
}

export default App;