
import React from 'react';

const UserIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm p-4 flex justify-between items-center z-10">
      <h1 className="text-xl font-semibold text-slate-800">販売管理システム</h1>
      <div className="flex items-center space-x-4">
        <span className="text-sm text-slate-600">デモユーザー</span>
        <UserIcon />
      </div>
    </header>
  );
};

export default Header;
