import DashboardSidebar from "../components/Layout/DashboardLayout/components/DashboardSidebar";
import DashboardHero from "../components/Layout/DashboardLayout/components/dashbordHero";

function Dashboard() {
  return (
    <div className="flex">
      <div>
        <DashboardSidebar />
      </div>
      <div>
        <DashboardHero />
      </div>
    </div>
  );
}

export default Dashboard;
