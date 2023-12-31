import Sidebar from '@/components/sidebar';
import Navbar from '@/components/ui/navbar';
import { getApiLimitCount } from '@/lib/apilimit';
import { checkSubscription } from '@/lib/subscription';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

const DashboardLayout = async ({ children }: Props) => {
  const apiLimitCount = await getApiLimitCount();
  const isPro = await checkSubscription();

  return (
    <div className="h-full-relative">
      <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 bg-gray-900">
        <Sidebar isPro={isPro} apiLimitCount={apiLimitCount} />
      </div>

      <main className="md:pl-72">
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
