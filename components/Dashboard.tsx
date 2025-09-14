
import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import { getDashboardStats } from '../services/api';
import { DashboardStats } from '../types';
import StatCard from './StatCard';
import { ChartIcon, DollarIcon, OrderIcon, UserGroupIcon } from './icons/Icons';

const Dashboard: React.FC = () => {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getDashboardStats();
        setStats(data);
      } catch (error) {
        console.error("ダッシュボードデータの取得に失敗しました:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center h-full"><div className="text-lg">読み込み中...</div></div>;
  }

  if (!stats) {
    return <div className="text-center text-red-500">データの読み込みに失敗しました。</div>;
  }
  
  const formatCurrency = (value: number) => `¥${value.toLocaleString()}`;

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard icon={<DollarIcon />} title="総売上" value={formatCurrency(stats.totalSales)} />
        <StatCard icon={<OrderIcon />} title="総注文件数" value={`${stats.orderCount} 件`} />
        <StatCard icon={<UserGroupIcon />} title="新規顧客数" value={`${stats.newCustomers} 人`} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-slate-700 mb-4 flex items-center">
             <ChartIcon className="h-5 w-5 mr-2 text-indigo-500" />
            月次売上
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={stats.monthlySales}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" tick={{ fill: '#64748b' }} />
              <YAxis tickFormatter={val => `¥${Number(val) / 10000}万`} tick={{ fill: '#64748b' }} />
              <Tooltip formatter={(value: number) => [formatCurrency(value), "売上"]} />
              <Legend />
              <Bar dataKey="売上" fill="#4f46e5" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
           <h3 className="text-lg font-semibold text-slate-700 mb-4 flex items-center">
             <ChartIcon className="h-5 w-5 mr-2 text-indigo-500" />
            日次注文件数
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={stats.dailyOrders}>
              <CartesianGrid strokeDasharray="3 3" vertical={false}/>
              <XAxis dataKey="name" tick={{ fill: '#64748b' }} />
              <YAxis tick={{ fill: '#64748b' }} />
              <Tooltip formatter={(value: number) => [`${value}件`, "注文件数"]} />
              <Legend />
              <Line type="monotone" dataKey="注文件数" stroke="#10b981" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 8 }}/>
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
