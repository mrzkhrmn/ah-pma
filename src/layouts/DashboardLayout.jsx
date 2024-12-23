import { Sidebar } from "../components/UserDashboard/Sidebar";
import { UserDashboard } from "../pages/UserDashboard";

export const DashboardLayout = ({ children }) => {
  return (
    <div className="w-full border border-black flex">
      <Sidebar />
      <UserDashboard />
    </div>
  );
};
