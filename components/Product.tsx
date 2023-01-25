import cn from 'classnames';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { useUser } from 'utils/useUser';

type BillingInterval = 'year' | 'month';

export default function Product() {
  const router = useRouter();
  const [billingInterval, setBillingInterval] =
    useState<BillingInterval>('month');
  const [priceIdLoading, setPriceIdLoading] = useState<string>();
  const { user, isLoading, subscription } = useUser();

  return (
    <section className="bg-green2 min-h-screen">
      <div className="max-w-7xl mx-auto py-8 sm:py-24 px-4 sm:px-6 lg:px-8 flex">
        <div className="w-4/4 sm:flex sm:flex-col sm:align-center mt-20">
          <h1 className="text-2xl font-extrabold text-black sm:text-left sm:text-6xl">
            Formitor. Forms made fun and simple.
          </h1>
        </div>
        <div className="w-4/4 text-left mt-20">
            <img src="/FormitorPicture.svg" alt="" />
        </div>
        </div>
        <div className="mt-20">
            <div>
                <h2 className="text-2xl font-extrabold text-black sm:text-center sm:text-5xl"> Collecting data is hard. Formitor helps you with it.</h2>
            </div>
        </div>
        <div className="mt-20 max-w-7xl min-h-screen">
            <div>
                <h1 className="text-2xl font-extrabold text-black sm:text-center sm:text-5xl"></h1>
            </div>
        </div>
    </section>
  );
}