import { useRouter } from 'next/router';
import { useState } from 'react';

import Button from './ui/Button';

import { useUser } from 'utils/useUser';
import SidebarLeft from './ui/SidebarLeft';
import SidebarRight from './ui/SidebarRight';
import { Forms } from 'types';

interface Props {
  forms: Forms[];
}

export default function Form({ forms }: Props) {
  const router = useRouter();
  const { user, isLoading, subscription } = useUser();

  console.log(forms)

  return (
    <section className="bg-green2 min-h-screen">
      <div className="max-w-7xl mx-auto py-8 sm:py-24 px-4 sm:px-6 lg:px-8 flex">
        <div className='w-3/4 mx-auto py-8 sm:py-24 px-4 sm:px-6 lg:px-8 flex bg-gray text-center flex-col'>
            <div>
                <h1 className='text-4xl font-extrabold'>What kind of form?</h1>
            </div>
            <div className='flex w-100 justify-between'>
            <div className='m-20'>
            <Button>
                <a href="/form">Contact form</a>
            </Button>
            </div>
        <div className='m-20'>
            <Button>
                <a href="/survey">feedback form</a>
            </Button>
        </div>
            </div>
        </div>
        </div>
    </section>
  );
}