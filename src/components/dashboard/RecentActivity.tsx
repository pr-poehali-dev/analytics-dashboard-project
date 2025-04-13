import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const RecentActivity = () => {
  const activities = [
    {
      id: "#ORD-7895",
      customer: "Иван Иванов",
      status: "Завершен",
      statusColor: "success",
      date: "15 сен 2023",
      amount: "₽12,500",
    },
    {
      id: "#ORD-7894",
      customer: "Анна Петрова",
      status: "В обработке",
      statusColor: "warning",
      date: "15 сен 2023",
      amount: "₽2,750",
    },
    {
      id: "#ORD-7893",
      customer: "Сергей Сидоров",
      status: "Завершен",
      statusColor: "success",
      date: "14 сен 2023",
      amount: "₽5,320",
    },
    {
      id: "#ORD-7892",
      customer: "Мария Кузнецова",
      status: "Отменен",
      statusColor: "destructive",
      date: "14 сен 2023",
      amount: "₽3,200",
    },
    {
      id: "#ORD-7891",
      customer: "Дмитрий Козлов",
      status: "Завершен",
      statusColor: "success",
      date: "13 сен 2023",
      amount: "₽8,950",
    },
  ];

  const getStatusBadge = (status: string, color: string) => {
    const colorMap: Record<string, string> = {
      success: "bg-emerald-100 text-emerald-800 hover:bg-emerald-100",
      warning: "bg-amber-100 text-amber-800 hover:bg-amber-100",
      destructive: "bg-red-100 text-red-800 hover:bg-red-100",
    };

    return (
      <Badge variant="outline" className={colorMap[color]}>
        {status}
      </Badge>
    );
  };

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Клиент</TableHead>
            <TableHead>Статус</TableHead>
            <TableHead>Дата</TableHead>
            <TableHead className="text-right">Сумма</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {activities.map((activity) => (
            <TableRow key={activity.id}>
              <TableCell className="font-medium">{activity.id}</TableCell>
              <TableCell>{activity.customer}</TableCell>
              <TableCell>
                {getStatusBadge(activity.status, activity.statusColor)}
              </TableCell>
              <TableCell>{activity.date}</TableCell>
              <TableCell className="text-right">{activity.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default RecentActivity;
