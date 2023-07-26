import React from 'react';
import { Button } from './ui/button';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import Sidebar from './sidebar';

interface MobileSidebarProps {
  apiLimitCount: number;
}

const MobileSidebar = ({ apiLimitCount }: MobileSidebarProps) => {
  return (
    <Sheet>
      <SheetTrigger>
        <div>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu />
          </Button>
        </div>
      </SheetTrigger>

      <SheetContent side="left" className="p-0">
        <Sidebar apiLimitCount={apiLimitCount} />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
