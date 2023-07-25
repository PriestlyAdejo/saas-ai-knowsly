import React from 'react';
import { Button } from './button';
import { Menu } from 'lucide-react';
import { UserButton } from '@clerk/nextjs';
import MobileSidebar from '../mobilesidebar';

type Props = {};

const Navbar = () => {
  return (
    <div className="flex items-center p-4">
      <MobileSidebar />
      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Navbar;
