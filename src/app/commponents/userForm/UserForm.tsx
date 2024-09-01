'use client';

import { useState } from 'react';
import { Mistral } from '@mistralai/mistralai';

import { Grand_Hotel } from 'next/font/google';
const grandHotel = Grand_Hotel({ weight: '400', subsets: ['latin'] });

import vector from '../../../../public/Vector.png';
import Image from 'next/image';

import { signOut } from 'firebase/auth';
import { auth } from '../../firebaseConfig/FirebaseConfig';
import { deleteCookie } from 'cookies-next';

import { useRouter } from 'next/navigation';

import { RiFileCopyLine } from 'react-icons/ri';

const UserForm = () => {
  let [prompts, setPrompts] = useState({
    prompt1: '',
    prompt2: '',
  });
  let [output, setOutput] = useState<any>();

  const apiKey = 'ZDQbEsE3IeHlaHo8HKPbWDDRAwgyDKM4';
  const client = new Mistral({ apiKey: apiKey });

  const router = useRouter();

  const generateOutput = async ({ param }: any) => {
    if (!prompts.prompt1 || !prompts.prompt2) {
      console.error('Error: Both prompts are required');
      return;
    }
    const chatResponse: any = await client.chat.complete({
      model: 'mistral-large-latest',
      messages: [
        { role: 'user', content: prompts.prompt1 },
        { role: 'user', content: prompts.prompt2 },
      ],
    });

    setOutput(chatResponse.choices[0].message.content);
  };
  console.log(output);

  const copyFunction = async ({ text }: any) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (error) {
      console.log(error);
    }
  };

  const signOutFunction = () => {
    signOut(auth).then(() => {
      deleteCookie('user');
      router.push('/');
    });
  };

  return (
    <div
      className={`bg-[url('/main.png')] bg-no-repeat bg-cover ${grandHotel.className}`}
    >
      <div className={`h-screen  bg-[rgba(255,255,255,0.8)]  `}>
        <div className='flex justify-between items-center pb-8 pt-20 mx-[8%]'>
          <div></div>
          <h1 className='text-heading 2xl:text-[78px] lg:text-4xl'>
            Pickup line Generator
          </h1>
          <button
            onClick={signOutFunction}
            className='border-2 2xl:text-2xl lg:text-xl  px-6 py-1 text-[#B5002C] hover:bg-[#e9a3c0] bg-[#e5d4db] rounded-full h-[67px] w-[151px]'
          >
            Signout
          </button>
        </div>
        {output ? (
          <div className='flex justify-center items-center'>
            <div className='flex flex-col items-center mt-[3%]'>
              <p className='text-[#A5455C] text-xl'>
                Copy the below pick up lines
              </p>
              <div className='mt-[11%] lg:w-[50vw] 2xl:w-[40vw] rounded border-2 border-[#FF6A8E] p-[2%] 2xl:h-60 lg:h-24'>
                <div className='flex justify-between  text-2xl  p-[2%]'>
                  <p className='text-[#B5002C] '>Pickup lines </p>
                  <button
                    onClick={() => {
                      copyFunction(output);
                    }}
                  >
                    <RiFileCopyLine className='text-[#FF6A8E]' />
                  </button>
                </div>
                <div>
                  <p className='text-[#FF6A8E] text-xl'>{output}</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <form className='flex flex-col justify-center mt-[4%] lg:w-[50vw] 2xl:w-[40vw] w-full lg:p-5 p-4 mx-auto'>
            <label
              className='text-subHeading 2xl:text-4xl text-left lg:text-lg mb-3'
              htmlFor='text '
            >
              Tell us about your crush
            </label>
            <textarea
              id='text'
              className='border-2 w-full rounded-lg p-4 resize-none mb-4 2xl:mb-8 lg:mb-6 2xl:h-32 lg:h-24 text-2xl text-[#FF2157]'
              required
              onChange={(e) => {
                setPrompts({ ...prompts, prompt1: e.target.value });
              }}
              placeholder='She is 10 but He likes footbal'
            />

            <label
              className='text-subHeading 2xl:text-4xl text-left lg:text-lg mb-3 '
              htmlFor='style '
            >
              Style
            </label>
            <input
              id='style'
              type='text'
              className='border-2 rounded-lg 2xl:h-14 lg:h-11 pl-4 text-2xl text-[#FF2157]'
              required
              onChange={(e) => {
                setPrompts({ ...prompts, prompt2: e.target.value });
              }}
              placeholder='eg:funny'
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                generateOutput(prompts);
              }}
              className='flex justify-center gap-2 items-center my-5 2xl:my-8 lg:my-6 hover:bg-[#fca0b7] bg-[#FF2157] text-subHeading text-2xl text-white h-[67px] rounded-[56px]'
            >
              <Image src={vector} alt='Button Image' />
              Generate for me
              <Image src={vector} alt='Button Image' />
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default UserForm;
