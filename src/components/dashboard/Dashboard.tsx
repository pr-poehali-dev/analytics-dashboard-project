import { Card } from "@/components/ui/card";
import Sidebar from "@/components/dashboard/Sidebar";
import StatsCards from "@/components/dashboard/StatsCards";
import RevenueChart from "@/components/dashboard/RevenueChart";
import TopProducts from "@/components/dashboard/TopProducts";
import RecentActivity from "@/components/dashboard/RecentActivity";

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <div className="flex-1 p-8 overflow-auto">
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold">Аналитический дашборд</h1>
            <p className="text-muted-foreground">Анализ бизнес-показателей и статистика</p>
          </div>
          
          <StatsCards />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="md:col-span-2 p-6">
              <h3 className="text-xl font-medium mb-4">Доходы за период</h3>
              <RevenueChart />
            </Card>
            
            <Card className="p-6">
              <h3 className="text-xl font-medium mb-4">Популярные продукты</h3>
              <TopProducts />
            </Card>
          </div>
          
          <Card className="p-6">
            <h3 className="text-xl font-medium mb-4">Недавняя активность</h3>
            <RecentActivity />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
