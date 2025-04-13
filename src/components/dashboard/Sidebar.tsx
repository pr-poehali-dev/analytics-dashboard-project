import { 
  LayoutDashboard, 
  BarChart3, 
  Users, 
  Settings, 
  LogOut 
} from "lucide-react";

const Sidebar = () => {
  const menuItems = [
    { icon: <LayoutDashboard size={20} />, label: "Дашборд", isActive: true },
    { icon: <BarChart3 size={20} />, label: "Аналитика", isActive: false },
    { icon: <Users size={20} />, label: "Пользователи", isActive: false },
  ];

  return (
    <div className="w-64 h-full bg-sidebar text-sidebar-foreground p-4 flex flex-col">
      <div className="mb-8 mt-4 flex items-center">
        <img src="/logo-b.svg" alt="Логотип" className="w-10 h-10 mr-3" />
        <h1 className="text-xl font-bold">Аналитика</h1>
      </div>

      <nav className="flex-1">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <button
                className={`flex items-center w-full py-2 px-4 rounded-md transition-colors ${
                  item.isActive
                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                    : "hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
                }`}
              >
                <span className="mr-3">{item.icon}</span>
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="border-t border-sidebar-border pt-4">
        <ul className="space-y-2">
          <li>
            <button
              className="flex items-center w-full py-2 px-4 rounded-md hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground transition-colors"
            >
              <span className="mr-3"><Settings size={20} /></span>
              Настройки
            </button>
          </li>
          <li>
            <button
              className="flex items-center w-full py-2 px-4 rounded-md hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground transition-colors"
            >
              <span className="mr-3"><LogOut size={20} /></span>
              Выйти
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
