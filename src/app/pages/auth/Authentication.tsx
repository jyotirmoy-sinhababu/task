'use client';

import audionotes from '../../../../public/Audionotes.svg';
import google from '../../../../public/google.svg';

import Image from 'next/image';

import { auth } from '../../firebaseConfig/FirebaseConfig';

import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const Authentication = () => {
  const loginFunct = async () => {
    const provider = await new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  return (
    <div className='flex justify-center items-center h-[100vh]'>
      <Image src={audionotes} alt='logo' />
      <p>Pickup line generator</p>
      <p>Generate pickup line for your crush now!</p>
      <button
        onClick={loginFunct}
        className='flex justify-center items-center h-[57px] w-[394px]'
      >
        <Image src={google} alt='google icon' /> Sign up with google
      </button>
    </div>
  );
};

export default Authentication;
