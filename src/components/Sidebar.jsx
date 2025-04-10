import { BarChart2, ShoppingBag, Users, Settings, TrendingUp, ShoppingCart, DollarSign, Menu } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const SIDEBAR_ITEMS = [
  { name: "Overview", icon: BarChart2, color: "#6366f1", path: "/" },
  { name: "Products", icon: ShoppingBag, color: "#8B5CF6", path: "/productsPage" },
  { name: "Users", icon: Users, color: "#EC4899", path: "/users" },
  { name: "Sales", icon: DollarSign, color: "#10B981", path: "/sales" },
  { name: "Orders", icon: ShoppingCart, color: "#F59E0B", path: "/orders" },
  { name: "Analytics", icon: TrendingUp, color: "#3B82F6", path: "/analytics" },
  { name: "Settings", icon: Settings, color: "#6EE7B7", path: "/settings" }
];

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div
      className={`relative z-10 h-screen transition-all duration-300 ease-in-out flex-shrink-0 ${
        isSidebarOpen ? 'w-64' : 'w-20'
      }`}
    >
      <div className="h-full bg-gray-800 bg-opacity-50 backdrop-blur-md p-4 flex flex-col border-r border-gray-700">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-3 rounded-full hover:bg-gray-700 transition-colors max-w-fit"
        >
          <Menu className="text-gray-200" size={24} />
        </motion.button>

        <nav className="mt-8 flex-grow">
          {SIDEBAR_ITEMS.map((item) => (
            <Link key={item.path} to={item.path}>
              <div className="flex items-center p-4 text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors mb-2">
                <item.icon size={20} style={{ color: item.color, minWidth: '20px' }} />

                <div className="overflow-hidden">
                  <AnimatePresence initial={false}>
                    {isSidebarOpen && (
                      <motion.span
                        className="ml-4 whitespace-nowrap inline-block"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.name}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
