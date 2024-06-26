import { lazy } from "react";
import {
  BrowserRouter as Router,
  Route, Routes, Navigate,
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
import { auth } from "./Database/firebase";
import UserProfile from "./components/Forms/UserProfile";
import FavoritesList from "./components/list/FavoritesList";
import UserFavorites from "./components/list/FavoritesList";
import BlogPage from "./components/blog/BlogPage";
import Setting from "./components/settings/Setting";
import AdminBlogPage from "./components/blog/AdminBlogPage";
import ProfileAdmin from "./components/Forms/ProfileAdmin";
import AdminTwoBlogPage from "./components/blog/AdminTwoBlogPage";
import CreateSuperAdmin from "./components/Forms/CreateSuperAdmin";
import ContactAdmins from "./components/Forms/ContactAdmins";
import LandingPage from "./pages/main/LandingPage";
import ChatBot from "./components/chatbot/ChatBot";
import EnquiryForm from "./components/Forms/EnquiryForm";
import SuperAdminEnquiryForm from "./components/Forms/SuperAdminEnquiryForm";
import UserEnquiry from "./components/enquiry/UserEnquiry";
import SuperAdminEnquiry from "./components/enquiry/SuperAdminEnquiry";

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
    <Provider store={store}>
      <Router>
        <Routes>
          {/* For testing only */}
          <Route path="/" element={<SplashScreen />} />
          <Route path="/LandingPage" element={<LandingPage />} />
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

          {/* SuperAdmin*/}
          <Route
            path="/Profile"
            element={<PrivateRoute element={<Profile />} />}
          />

          {/* Broadcaster*/}
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
            path="/create-super-administrators"
            element={<PrivateRoute element={<CreateSuperAdmin />} />}
          />
          <Route
            path="/ContactAdmins"
            element={<PrivateRoute element={<ContactAdmins />} />}
          />

          <Route
            path="/create-administrators"
            element={<PrivateRoute element={<CreateAdmin />} />}
          />
          <Route
            path="/CreateUser" element={<PrivateRoute element={<CreateUser />} />} />

          <Route path="/ViewUploadedVideos" element={<PrivateRoute element={<ViewUploadedVideos />} />} />

          <Route path="/Settings" element={<PrivateRoute element={<Settings />} />} />

          <Route path="/EnquiryForm" element={<EnquiryForm />} />
          <Route path="/UserProfile" element={<UserProfile />} />
          <Route path="/SuperAdminEnquiryForm" element={<SuperAdminEnquiryForm />} />
          <Route path="/FavoritesList" element={<FavoritesList />} />
          <Route path="/UserFavorites" element={<UserFavorites />} />
          <Route path="/BlogPage" element={<BlogPage />} />
          <Route path="/AdminBlogPage" element={<AdminBlogPage />} />
          <Route path="/AdminTwoBlogPage" element={<AdminTwoBlogPage />} />

          <Route path="/UserEnquiry" element={<UserEnquiry />} />
          <Route path="/SuperAdminEnquiry" element={<SuperAdminEnquiry />} />
          <Route path="/Setting" element={<Setting />} />

          <Route path="/ChatBot" element={<ChatBot />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
