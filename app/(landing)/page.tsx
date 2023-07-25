import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

type Props = {};

const LandingPage = (props: Props) => {
  return (
    <div>
      Unprotected Landing Page
      <div>
        <Link href="/sign-in">
          <Button>Login</Button>
        </Link>
      </div>
      <div>
        <Link href="/sign-up">
          <Button>Register</Button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
