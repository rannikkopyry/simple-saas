import cn from 'classnames';
import { useRouter } from 'next/router';
import { useState } from 'react';

import Button from 'components/ui/Button';
import { postData } from 'utils/helpers';
import { getStripe } from 'utils/stripe-client';
import { useUser } from 'utils/useUser';
import { Price, ProductWithPrice } from 'types';

interface Props {
  products: ProductWithPrice[];
}

type BillingInterval = 'year' | 'month';

export default function Homepage() {
  const router = useRouter();
  const [billingInterval, setBillingInterval] =
    useState<BillingInterval>('month');
  const [priceIdLoading, setPriceIdLoading] = useState<string>();
  const { user, isLoading, subscription } = useUser();

  return (
    <section className="bg-green2 min-h-screen">
      <div className="max-w-7xl mx-auto py-8 sm:py-24 px-4 sm:px-6 lg:px-8 flex">
        <div className="w-3/4 sm:flex sm:flex-col mt-20 text-left">
          <h1 className="text-xl text-left font-extrabold text-black sm:text-left sm:text-6xl">
          Need feedback? <span /> Party coming up?
          </h1>
          <Button
                className='hover:bg-green3 text-white text-left py-2 px-4 mt-10 border border-x-secondary font-extrabold'
              >
                <a className="font-extrabold" href="/signin">Sign up and start building</a>
              </Button>
        </div>
        <div className="w-4/4 text-left mt-20">
            <img src="/homepagepic.svg" alt="" />
        </div>
        </div>
        <div>
          <p className="mt-5 text-xs uppercase text-black text-center font-bold tracking-[0.3em]">
            Brought to you by
          </p>
          <div className="flex flex-col items-center my-12 space-y-4 sm:mt-8 sm:space-y-0 md:mx-auto md:max-w-2xl sm:grid sm:gap-6 sm:grid-cols-5">
            <div className="flex items-center justify-start">
              <a href="https://nextjs.org" aria-label="Next.js Link">
                <img
                  src="/nextjs.svg"
                  alt="Next.js Logo"
                  className="h-12 text-black"
                />
              </a>
            </div>
            <div className="flex items-center justify-start">
              <a href="https://vercel.com" aria-label="Vercel.com Link">
                <img
                  src="/vercel.svg"
                  alt="Vercel.com Logo"
                  className="h-6 text-black"
                />
              </a>
            </div>
            <div className="flex items-center justify-start">
              <a href="https://stripe.com" aria-label="stripe.com Link">
                <img
                  src="/stripe.svg"
                  alt="stripe.com Logo"
                  className="h-12 text-black"
                />
              </a>
            </div>
            <div className="flex items-center justify-start">
              <a href="https://supabase.io" aria-label="supabase.io Link">
                <img
                  src="/supabase.svg"
                  alt="supabase.io Logo"
                  className="h-10 text-black"
                />
              </a>
            </div>
            <div className="flex items-center justify-start">
              <a href="https://github.com" aria-label="github.com Link">
                <img
                  src="/github.svg"
                  alt="github.com Logo"
                  className="h-8 text-black"
                />
              </a>
            </div>
          </div>
          </div>
    </section>
  );
}
