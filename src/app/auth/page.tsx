'use client';

import audionotes from '../../../public/Audionotes.svg';
// import audionotes from '../../../../public/Audionotes.svg';
import google from '../../../public/google.svg';

import Image from 'next/image';

import { auth } from '../firebaseConfig/FirebaseConfig';

import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

import { Grand_Hotel } from 'next/font/google';
import { useRouter } from 'next/navigation';

import { setCookie } from 'cookies-next';

const grandHotel = Grand_Hotel({ weight: '400', subsets: ['latin'] });

const Authentication = () => {
  const router = useRouter();

  const loginFunct = async () => {
    const provider = await new GoogleAuthProvider();
    return signInWithPopup(auth, provider).then((res: any) => {
      router.push('/chat');
      console.log(res);
      setCookie('user', res.user.accessToken);
    });
  };

  return (
    <div className='flex flex-col justify-center items-center h-[100vh] m-2'>
      <Image src={audionotes} alt='logo' />
      <p className='text-[#212121] font-semibold text-2xl mt-[4%]'>
        Pickup line generator
      </p>
      <p className='mt-[14px] text-gray-300 font-medium'>
        Generate pickup line for your crush now!
      </p>
      <button
        onClick={loginFunct}
        className='flex justify-center items-center h-[57px] w-72 mt-[24px] text-[#212121] font-semibold text-xl gap-2 bg-gray-200 rounded-[52px]'
      >
        <Image className='w-[24px]' src={google} alt='google icon' /> Sign up
        with google
      </button>
      <div className='mt-[12%]'>
        <p className='text-center font-medium text-gray-600'>
          By signing up, you agree of the Terms of Use, Privacy Notice
        </p>
      </div>
    </div>
  );
};

export default Authentication;
