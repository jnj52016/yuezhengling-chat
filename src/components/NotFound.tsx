import React from 'react';
import { Link } from 'react-router-dom';

/**
 * 404页面组件
 * 
 * 当用户访问不存在的路径时显示此组件
 */
const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl mb-6">页面不存在</h2>
      <p className="text-gray-400 mb-8">
        你访问的页面可能已被移除、名称已更改或暂时不可用
      </p>
      <Link 
        to="/" 
        className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
      >
        返回首页
      </Link>
    </div>
  );
};

export default NotFound; 