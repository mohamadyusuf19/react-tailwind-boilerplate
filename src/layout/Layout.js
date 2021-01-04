import React from "react";

const Layout = ({ children }) => {
  return (
    <div className='flex max-h-full'>
      <div className='bg-gray-300 w-1/5 h-screen p-10 hidden'>
        <p className='text-blue-600 font-bold'>Bu Nafik Store</p>
      </div>
      <div className='w-full'>{children}</div>
    </div>
  );
};

export default Layout;
