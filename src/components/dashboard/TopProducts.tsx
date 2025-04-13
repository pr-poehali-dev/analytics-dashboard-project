import { Progress } from "@/components/ui/progress";

const TopProducts = () => {
  const products = [
    { name: "Смартфон X Pro", sales: 347, percentage: 85 },
    { name: "Планшет Air", sales: 290, percentage: 72 },
    { name: "Умные часы S7", sales: 260, percentage: 64 },
    { name: "Беспроводные наушники", sales: 189, percentage: 48 },
    { name: "Портативный аккумулятор", sales: 105, percentage: 26 },
  ];

  return (
    <div className="space-y-5">
      {products.map((product, index) => (
        <div key={index}>
          <div className="flex justify-between items-center mb-1.5">
            <span className="text-sm font-medium">{product.name}</span>
            <span className="text-sm text-muted-foreground">{product.sales} шт.</span>
          </div>
          <Progress value={product.percentage} className="h-2" />
        </div>
      ))}
    </div>
  );
};

export default TopProducts;
