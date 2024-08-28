import Image from 'next/image';

import buttonImg from '../../../../public/Button.png';

const Button = () => {
  return (
    <div className='flex justify-center items-center h-[57%]'>
      <button>
        <Image src={buttonImg} alt='button image' />
      </button>
    </div>
  );
};

export default Button;
