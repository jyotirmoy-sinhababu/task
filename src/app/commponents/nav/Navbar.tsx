import { Grand_Hotel } from 'next/font/google';

const grandHotel = Grand_Hotel({ weight: '400', subsets: ['latin'] });

const Navbar = () => {
  return (
    <div className='flex justify-center items-center h-[30%]'>
      <div className=''>
        <p className={grandHotel.className}>Pickup line </p>
        <p className={grandHotel.className}>Generator</p>
      </div>
    </div>
  );
};

export default Navbar;
