'use client';

import dynamic from 'next/dynamic';
import { Button } from '@/components';
import { Layout } from '@/containers';
const ShowLottie = dynamic(() => import('@/components/ui/ShowLottie'), {
  ssr: false, // Disable server-side rendering for this component
});

export const metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for does not exist.',
};

const NotFound = () => {
  return (
    <Layout className="grid h-screen place-items-center">
      <div className="w-full max-w-xl text-center">
        <ShowLottie path="/lotties/404.json" className="mx-auto" />

        <p className="mt-5 text-3xl capitalize md:text-4xl text-dark-2">
          Page not found
        </p>

        <Button
          type="link"
          href="/"
          size="lg"
          className="mt-20"
          sameTab
          center
          aria-label="Go back to homepage"
        >
          Go Home
        </Button>
      </div>
    </Layout>
  );
};

export default NotFound;
