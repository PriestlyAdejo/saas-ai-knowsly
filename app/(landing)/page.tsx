import { LandingContent } from '@/components/landingcomponent';
import { LandingHero } from '@/components/landinghero';
import { LandingNavbar } from '@/components/landingnavbar';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

type Props = {};

const LandingPage = (props: Props) => {
  return (
    <div className="h-full">
      <LandingNavbar />
      <LandingHero />
      <LandingContent />
    </div>
  );
};

export default LandingPage;
