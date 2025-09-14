
import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import OrderList from './components/OrderList';
import ProductList from './components/ProductList';
import CustomerList from './components/CustomerList';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex h-screen bg-slate-100 text-slate-800">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-slate-100 p-4 md:p-8">
            <Routes>
              <Route path="/" element={<Navigate replace to="/dashboard" />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/orders" element={<OrderList />} />
              <Route path="/products" element={<ProductList />} />
              <Route path="/customers" element={<CustomerList />} />
            </Routes>
          </main>
        </div>
      </div>
    </HashRouter>
  );
};

export default App;
