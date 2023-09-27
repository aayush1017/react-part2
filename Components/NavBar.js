'use client';
import { MyContext } from '@/Helper/Context';
import React, { useContext } from 'react';

function Navbar({}) {
  const user = useContext(MyContext);
  return (
    <nav className="bg-blue-500 p-4 flex justify-between items-center">
      {user.companyName}
    </nav>
  );
}

export default Navbar;
