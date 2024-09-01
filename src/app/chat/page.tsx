'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import UserForm from '../commponents/userForm/UserForm';

const Chat = () => {
  const router = useRouter();
  // useEffect(() => {
  //   if (!user) router?.push('/auth');
  // }, []);

  return (
    <>
      <UserForm />{' '}
    </>
  );
};

export default Chat;
