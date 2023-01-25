import cn from 'classnames';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Button from './ui/Button';

import { useUser } from 'utils/useUser';

type BillingInterval = 'year' | 'month';

export default function Create() {
  const router = useRouter();
  const [billingInterval, setBillingInterval] =
    useState<BillingInterval>('month');
  const [priceIdLoading, setPriceIdLoading] = useState<string>();
  const { user, isLoading, subscription } = useUser();

  return (
    <section className="bg-green2 min-h-screen">
      <div className="max-w-7xl mx-auto py-8 sm:py-24 px-4 sm:px-6 lg:px-8 flex">
        <div className='w-3/4 mx-auto py-8 sm:py-24 px-4 sm:px-6 lg:px-8 flex bg-gray text-center flex-col'>
            <div>
                <h1 className='text-4xl font-extrabold'>I want to create a</h1>
            </div>
            <div className='flex w-100 justify-between'>
            <div className='m-20'>
            <Button>
                <a href="/form">Form</a>
            </Button>
            </div>
        <div className='m-20'>
            <Button>
                <a href="/survey">Survey</a>
            </Button>
        </div>
            </div>
        </div>
        </div>
    </section>
  );
}