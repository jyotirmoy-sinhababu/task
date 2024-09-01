import Image from 'next/image';

import vectorImg from '../../../../public/Vector.png';

import { Grand_Hotel } from 'next/font/google';
const grandHotel = Grand_Hotel({ weight: '400', subsets: ['latin'] });

const Button = ({ func }: any) => {
  return (
    <div className='flex justify-center items-center h-[57%]'>
      <button
        onClick={func}
        className={`hover:bg-[#fca0b7] bg-[#FF2157] h-[67px] rounded-[56px] w-[300px] flex justify-center gap-2 text-2xl text-[#FFFFFF] items-center ${grandHotel.className}`}
      >
        <Image src={vectorImg} alt='Button Image' />
        Generate for me
        <Image src={vectorImg} alt='Button Image' />
      </button>
    </div>
  );
};

export default Button;
