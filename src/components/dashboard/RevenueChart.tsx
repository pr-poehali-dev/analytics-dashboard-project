import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const RevenueChart = () => {
  // Примерные данные для графика
  const data = [
    { name: "Янв", revenue: 65000 },
    { name: "Фев", revenue: 58000 },
    { name: "Мар", revenue: 90000 },
    { name: "Апр", revenue: 81000 },
    { name: "Май", revenue: 56000 },
    { name: "Июн", revenue: 55000 },
    { name: "Июл", revenue: 70000 },
    { name: "Авг", revenue: 110000 },
    { name: "Сен", revenue: 93000 },
    { name: "Окт", revenue: 85000 },
    { name: "Ноя", revenue: 105000 },
    { name: "Дек", revenue: 125000 },
  ];

  const formatRevenue = (value: number) => {
    return `₽${value.toLocaleString()}`;
  };

  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8} />
              <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis 
            dataKey="name" 
            axisLine={false}
            tickLine={false}
            tick={{ fill: 'hsl(var(--muted-foreground))' }}
          />
          <YAxis 
            tickFormatter={formatRevenue} 
            axisLine={false}
            tickLine={false}
            tick={{ fill: 'hsl(var(--muted-foreground))' }}
          />
          <Tooltip 
            formatter={(value: number) => [`${formatRevenue(value)}`, 'Доход']}
            contentStyle={{
              backgroundColor: 'hsl(var(--card))',
              borderColor: 'hsl(var(--border))',
              borderRadius: 'var(--radius)',
            }}
          />
          <Area
            type="monotone"
            dataKey="revenue"
            stroke="hsl(var(--primary))"
            fillOpacity={1}
            fill="url(#colorRevenue)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueChart;
