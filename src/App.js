import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux"; // Import createStore from redux
import rootReducer from "./redux/reducers"; // Import your root reducer
import SplashScreen from "./pages/main/SplashScreen";
import LoginPage from "./pages/main/LoginPage";
import ForgotPassword from "./pages/main/ForgotPassword";
import RegistrationPage from "./pages/main/RegistrationPage";
import UserDashboard from "./pages/user/UserDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import Profile from "./components/Forms/Profile";
import SuperAdminDashboard from "./pages/superadmin/SuperAdminDashboard";
import "./App.css";
import ViewUsers from "./components/Cards/ViewUsers";
import CreateAdmin from "./components/Forms/CreateAdmin";
import CreateUser from "./components/Forms/CreateUser";
import Settings from "./components/Settings";

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

          {/* Dashboards */}
          <Route path="/UserDashboard" element={<UserDashboard />} />
          <Route path="/AdminDashboard" element={<AdminDashboard />} />
          <Route path="/SuperAdminDashboard" element={<SuperAdminDashboard />}/>


          {/* Add more routes as needed */}
          <Route path="/Profile" element={<Profile/>} />
          <Route path="/ViewUsers" element={<ViewUsers/>} />

          <Route path="/create-administrators" element={<CreateAdmin/>}/>
          <Route path="/CreateUser" element={<CreateUser/>}/>


          <Route path="/Settings" element={<Settings/>} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
