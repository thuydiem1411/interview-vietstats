import "./App.css";
import DashboardPage from "./pages/dashboard/DashboardPage";
import { Navigate, Route, Routes } from "react-router-dom";
import DashboardLayout from "./layouts/dashboard/DashboardLayout";
import LoginPage from "./pages/login/LoginPage";
import CalendarPage from "./pages/dashboard/CalendarPage";

function App() {
  return (
    <Routes>
      <Route path="dashboard" element={<DashboardLayout />}>
        <Route path="" element={<DashboardPage />} />
        <Route path="calendar" element={<CalendarPage />} />
        <Route path="*" element={<Navigate to="" replace />} />
      </Route>
      <Route path="login" element={<LoginPage />} />
      <Route path="*" element={<Navigate to="login" replace />} />
    </Routes>
  );
}

export default App;
