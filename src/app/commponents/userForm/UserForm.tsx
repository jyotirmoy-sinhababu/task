'use client';

import { useState } from 'react';
import { Mistral } from '@mistralai/mistralai';

import buttonImg from '../../../../public/Button.png';
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
    <div className='flex  flex-col'>
      <div className='flex justify-between'>
        <p>Pickup line Generator</p>
        <button className=''>Signout</button>
      </div>
      <form className='flex flex-col justify-center items-center'>
        <input
          type='text'
          className='border-2'
          onChange={(e) => {
            setPrompts({ ...prompts, prompt1: e.target.value });
          }}
        />
        <input
          type='text'
          className='border-2'
          onChange={(e) => {
            setPrompts({ ...prompts, prompt2: e.target.value });
          }}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            generateOutput(prompts);
          }}
        >
          <Image src={buttonImg} alt='Button Image' />
        </button>
      </form>
    </div>
  );
};

export default UserForm;
