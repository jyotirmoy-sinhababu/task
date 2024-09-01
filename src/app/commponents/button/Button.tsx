import Image from 'next/image';

import buttonImg from '../../../../public/Button.png';

const Button = ({ func }: any) => {
  return (
    <div className='flex justify-center items-center h-[57%]'>
      <button onClick={func}>
        <Image src={buttonImg} alt='button image' />
      </button>
    </div>
  );
};

export default Button;
