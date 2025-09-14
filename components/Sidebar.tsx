
import React from 'react';
import { NavLink } from 'react-router-dom';
import { DashboardIcon, OrdersIcon, ProductsIcon, CustomersIcon, LogoIcon } from './icons/Icons';

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
}

const NavItem: React.FC<NavItemProps> = ({ to, icon, label }) => {
  const activeClass = 'bg-indigo-600 text-white';
  const inactiveClass = 'text-slate-300 hover:bg-indigo-500 hover:text-white';
  
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center px-4 py-3 rounded-md text-sm font-medium transition-colors duration-200 ${isActive ? activeClass : inactiveClass}`
      }
    >
      {icon}
      <span className="ml-4">{label}</span>
    </NavLink>
  );
};

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-slate-800 text-white flex-shrink-0 flex flex-col">
      <div className="h-16 flex items-center justify-center px-4 bg-slate-900">
        <div className="flex items-center text-white">
          <LogoIcon className="h-8 w-8 text-indigo-400" />
          <span className="ml-2 font-bold text-lg">SalesManager</span>
        </div>
      </div>
      <nav className="flex-1 px-4 py-6 space-y-2">
        <NavItem to="/dashboard" icon={<DashboardIcon className="h-6 w-6" />} label="ダッシュボード" />
        <NavItem to="/orders" icon={<OrdersIcon className="h-6 w-6" />} label="受注管理" />
        <NavItem to="/products" icon={<ProductsIcon className="h-6 w-6" />} label="商品管理" />
        <NavItem to="/customers" icon={<CustomersIcon className="h-6 w-6" />} label="顧客管理" />
      </nav>
    </aside>
  );
};

export default Sidebar;
