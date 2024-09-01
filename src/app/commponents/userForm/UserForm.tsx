'use client';

import { useState } from 'react';
import { Mistral } from '@mistralai/mistralai';

import vector from '../../../../public/Vector.png';
import Image from 'next/image';

const UserForm = () => {
  let [prompts, setPrompts] = useState({
    prompt1: '',
    prompt2: '',
  });
  const [output, setOutput] = useState<any>();

  const apiKey = 'ZDQbEsE3IeHlaHo8HKPbWDDRAwgyDKM4';
  const client = new Mistral({ apiKey: apiKey });

  console.log(prompts);

  const generateOutput = async ({ param }: any) => {
    if (!prompts.prompt1 || !prompts.prompt2) {
      console.error('Error: Both prompts are required');
      return;
    }
    const chatResponse = await client.chat.complete({
      model: 'mistral-large-latest',
      messages: [
        { role: 'user', content: prompts.prompt1 },
        { role: 'user', content: prompts.prompt2 },
      ],
    });

    setOutput(chatResponse.choices[0].message);
  };
  console.log(output);
  return (
    <div className={`bg-[url('/main.png')] bg-no-repeat bg-cover`}>
      <div className={`h-screen  bg-[rgba(255,255,255,0.8)]  `}>
        <div className='flex justify-between items-center pb-8 pt-14 mr-[4%]'>
          <div></div>
          <h1 className='text-heading 2xl:text-5xl lg:text-4xl'>
            Pickup line Generator
          </h1>
          <button className='border-2 2xl:text-2xl lg:text-xl  px-6 py-1 text-[#B5002C] bg-[#e5d4db] rounded-full'>
            Signout
          </button>
        </div>
        <form className='flex flex-col justify-center mt-[6%] lg:w-[50vw] 2xl:w-[40vw] w-full lg:p-5 p-4 mx-auto'>
          <label
            className='text-subHeading 2xl:text-xl text-left lg:text-lg mb-3'
            htmlFor='text '
          >
            Tell us about your crush
          </label>
          <textarea
            id='text'
            className='border-2 w-full rounded-lg p-4 resize-none mb-4 2xl:mb-8 lg:mb-6 2xl:h-32 lg:h-24 text-2xl'
            onChange={(e) => {
              setPrompts({ ...prompts, prompt1: e.target.value });
            }}
            placeholder='She is 10 but He likes footbal'
          />

          <label
            className='text-subHeading 2xl:text-xl text-left lg:text-lg mb-3'
            htmlFor='style '
          >
            Style
          </label>
          <input
            id='style'
            type='text'
            className='border-2 rounded-lg 2xl:h-14 lg:h-11 pl-4 text-2xl'
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
            className='flex justify-center gap-2 items-center my-4 2xl:my-8 lg:my-6 bg-[#FF2157] text-subHeading text-2xl text-white h-[57px] rounded-[56px]'
          >
            <Image src={vector} alt='Button Image' />
            Generate for me
            <Image src={vector} alt='Button Image' />
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
