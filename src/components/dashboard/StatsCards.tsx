import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, ShoppingCart, CreditCard } from "lucide-react";

const StatsCards = () => {
  const stats = [
    {
      title: "Доход",
      value: "₽125,400",
      change: "+12.5%",
      isPositive: true,
      icon: <TrendingUp className="h-5 w-5 text-emerald-500" />,
    },
    {
      title: "Пользователи",
      value: "3,456",
      change: "+5.2%",
      isPositive: true,
      icon: <Users className="h-5 w-5 text-blue-500" />,
    },
    {
      title: "Заказы",
      value: "876",
      change: "-1.3%",
      isPositive: false,
      icon: <ShoppingCart className="h-5 w-5 text-orange-500" />,
    },
    {
      title: "Средний чек",
      value: "₽1,230",
      change: "+4.7%",
      isPositive: true,
      icon: <CreditCard className="h-5 w-5 text-violet-500" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card key={index}>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <span className="p-2 rounded-lg bg-muted">{stat.icon}</span>
              <span
                className={`text-sm font-medium ${
                  stat.isPositive ? "text-emerald-500" : "text-red-500"
                }`}
              >
                {stat.change}
              </span>
            </div>
            <div className="mt-3">
              <p className="text-sm text-muted-foreground">{stat.title}</p>
              <p className="text-2xl font-bold">{stat.value}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default StatsCards;
