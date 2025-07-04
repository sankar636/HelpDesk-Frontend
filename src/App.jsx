import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './Pages/Auth/SignIn.jsx';
import SignUp from './Pages/Auth/SignUp.jsx';
import ResetPassword from './Pages/Auth/ResetPassword.jsx';
import UserDashboard from './Pages/Dashboard/UserDashboard.jsx';
import AdminDashboard from './Pages/Dashboard/AdminDashboard.jsx';
import OpsDashboard from './Pages/Dashboard/OpsDashboard.jsx';
import TechDashboard from './Pages/Dashboard/TechDashboard.jsx';
import CreateTicket from './Pages/Tickets/CreateTicket.jsx';
import MyTicket from './Pages/Tickets/Mytickets.jsx';
import UserProfile from './Pages/Profile/UserProfile.jsx';
import UserProfileSetting from './Pages/Profile/UserProfileSetting.jsx';
import UserProtectedWrapper from './Pages/Auth/UserProtectedWrapper.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route
          path="/user/dashboard"
          element={
            <UserProtectedWrapper>
              <UserDashboard />
            </UserProtectedWrapper>
          }
        />
        <Route
          path="/user/create-ticket"
          element={
            <UserProtectedWrapper>
              <CreateTicket />
            </UserProtectedWrapper>
          }
        />
        <Route
          path="/user/my-tickets"
          element={
            <UserProtectedWrapper>
              <MyTicket />
            </UserProtectedWrapper>
          }
        />
        <Route
          path="/user/profile"
          element={
            <UserProtectedWrapper>
              <UserProfile />
            </UserProtectedWrapper>
          }
        />
        <Route
          path="/user/profile-setting"
          element={
            <UserProtectedWrapper>
              <UserProfileSetting />
            </UserProtectedWrapper>
          }
        />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/tech/dashboard" element={<OpsDashboard />} />
        <Route path="/ops/dashboard" element={<TechDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
