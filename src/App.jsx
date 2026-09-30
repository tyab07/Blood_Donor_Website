import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './pages/Login';
import Register from './pages/Register';
import VerifyOTP from './pages/VerifyOTP';
import ForgotPassword from './pages/ForgotPassword';
import DonorDashboard from './pages/DonorDashboard';
import DonorProfile from './pages/DonorProfile';
import RequestList from './pages/RequestList';
import CreateRequest from './pages/CreateRequest';
import AdminDashboard from './pages/AdminDashboard';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {/* Auth pages (no sidebar) */}
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/verify-otp" element={<VerifyOTP />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          {/* Donor */}
          <Route path="/donor/dashboard" element={<DonorDashboard />} />
          <Route path="/donor/profile" element={<DonorProfile />} />

          {/* Requests */}
          <Route path="/requests" element={<RequestList />} />
          <Route path="/requests/create" element={<CreateRequest />} />

          {/* Admin */}
          <Route path="/admin" element={<AdminDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
