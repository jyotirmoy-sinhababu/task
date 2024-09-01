'use client';

import Navbar from './commponents/nav/Navbar';
import Button from './commponents/button/Button';
import { useRouter } from 'next/navigation';

import { useEffect } from 'react';

import { getCookie } from 'cookies-next';

export default function Home() {
  const user: any = getCookie('user') || '';

  const router = useRouter();
  const handleClick = () =>
    user ? router?.push('/chat') : router?.push('/auth');

  return (
    <main>
      {' '}
      <div className='main'>
        <Navbar />
        <Button func={handleClick} />
      </div>
    </main>
  );
}
