import React from 'react';

interface LandinLayoutProps {
  children: React.ReactNode;
}

const LandinLayout = ({ children }: LandinLayoutProps) => {
  return (
    <main className="h-full bg-[#111827] overflow-auto">
      <div className="mx-auto max-w-screen-xl h-full w-full">{children}</div>
    </main>
  );
};

export default LandinLayout;
