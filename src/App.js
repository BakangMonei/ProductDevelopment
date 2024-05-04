import { lazy } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux"; // Import createStore from redux
import rootReducer from "./redux/reducers"; // Import your root reducer
import SplashScreen from "./pages/main/SplashScreen";
// import LoginPage from "./pages/main/LoginPage";
import UserDashboard from "./pages/user/UserDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import Profile from "./components/Forms/Profile";
import SuperAdminDashboard from "./pages/superadmin/SuperAdminDashboard";
import "./App.css";
import ViewUsers from "./components/Cards/ViewUsers";
import CreateAdmin from "./components/Forms/CreateAdmin";
import CreateUser from "./components/Forms/CreateUser";
import Settings from "./components/Settings";
import ViewAdmins from "./components/Cards/ViewAdmins";
import ViewUploadedVideos from "./components/BroadCastorComponents/ViewUploadedVideos";
import { auth } from "./firebase";

const ProfileAdmin = lazy(() => import("./components/Forms/ProfileAdmin"));
const RegistrationPage = lazy(() => import("./pages/main/RegistrationPage"));
const ForgotPassword = lazy(() => import("./pages/main/ForgotPassword"));
const LoginPage = lazy(() => import("./pages/main/LoginPage"));

// Create Redux store
const store = createStore(rootReducer);

// Function to check if user is authenticated
const isAuthenticated = () => {
  return auth.currentUser !== null;
};

// Private Route component to handle authentication
const PrivateRoute = ({ element, path }) => {
  return isAuthenticated() ? element : <Navigate to="/LoginPage" />;
};

function App() {
  return (
    // Provide the Redux store to your React app
    <Provider store={store}>
      <Router>
        <Routes>
          {/* For testing only */}
          <Route path="/" element={<SplashScreen />} />
          {/* <Route path="/" element={<UserDashboard />} /> */}
          <Route path="/SplashScreen" element={<SplashScreen />} />

          {/* More functionality routes as needed */}
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/RegistrationPage" element={<RegistrationPage />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />

          {/* Dashboards */}
          <Route
            path="/UserDashboard"
            element={<PrivateRoute element={<UserDashboard />} />}
          />
          <Route
            path="/AdminDashboard"
            element={<PrivateRoute element={<AdminDashboard />} />}
          />
          <Route
            path="/SuperAdminDashboard"
            element={<PrivateRoute element={<SuperAdminDashboard />} />}
          />

          {/* Add more routes as needed */}
          <Route
            path="/Profile"
            element={<PrivateRoute element={<Profile />} />}
          />
          <Route
            path="/ProfileAdmin"
            element={<PrivateRoute element={<ProfileAdmin />} />}
          />
          <Route
            path="/ViewUsers"
            element={<PrivateRoute element={<ViewUsers />} />}
          />
          <Route
            path="/ViewAdmins"
            element={<PrivateRoute element={<ViewAdmins />} />}
          />

          <Route
            path="/create-administrators"
            element={<PrivateRoute element={<CreateAdmin />} />}
          />
          <Route
            path="/CreateUser"
            element={<PrivateRoute element={<CreateUser />} />}
          />

          <Route
            path="/ViewUploadedVideos"
            element={<PrivateRoute element={<ViewUploadedVideos />} />}
          />

          <Route
            path="/Settings"
            element={<PrivateRoute element={<Settings />} />}
          />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
