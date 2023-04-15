import { useSwipeable } from "react-swipeable";
import { type WheelEvent, useState } from "react";
import Icon5 from "../../icons/Icon5";
import Icon6 from "../../icons/Icon6";
import Icon7 from "../../icons/Icon7";
import Icon8 from "../../icons/Icon8";

export default function AwardsSlider() {
  const [slidePosition, setSlidePosition] = useState(0);

  const handleWheel = (e: WheelEvent<HTMLDivElement>) => {
    if (e.deltaX < 0) {
      return handleNextArrow();
    }
    if (e.deltaX > 0) {
      return handlePrevArrow();
    }
  };

  const handlePrevArrow = () => {
    if (window.innerWidth < 500 && slidePosition < 3) {
      return setSlidePosition((prev) => prev + 1);
    }
    if (window.innerWidth < 700 && slidePosition < 2) {
      return setSlidePosition((prev) => prev + 1);
    }
    if (window.innerWidth < 990 && slidePosition < 1) {
      return setSlidePosition((prev) => prev + 1);
    }
  };

  const handleNextArrow = () => {
    if (window.innerWidth < 500 && slidePosition > 0 && slidePosition <= 3) {
      return setSlidePosition((prev) => prev - 1);
    }
    if (window.innerWidth < 700 && slidePosition > 0 && slidePosition <= 2) {
      return setSlidePosition((prev) => prev - 1);
    }
    if (window.innerWidth < 990 && slidePosition > 0 && slidePosition <= 1) {
      return setSlidePosition((prev) => prev - 1);
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: handlePrevArrow,
    onSwipedRight: handleNextArrow,
    trackMouse: true,
  });

  return (
    <div className='relative group mt-5 md:mb-20 mb-14 '>
      <div
        onWheel={handleWheel}
        className='relative h-[240px] custom-container mx-auto'
      >
        <div
          {...handlers}
          style={{ transform: `translateX(-${slidePosition * 20}%)` }}
          className={`flex items-center  gap-5 overflow-hidden absolute transition-transform duration-700`}
        >
          <div className='bg-white flex flex-col p-10 rounded-xl shadow-md my-2 w-[18.5rem] text-lg h-[240px] hover:scale-[1.015] hover:shadow-lg cursor-pointer transition-transform duration-300 ease-out   '>
            <Icon5 />
            <h3 className='mt-4'>2018</h3>
            <p className='text-secondaryText-100 mt-1 font-medium'>
              Cloud Solutions
            </p>
          </div>
          <div className='bg-white p-10 rounded-xl shadow-md my-2 w-[18.5rem] text-lg h-[240px] hover:scale-[1.015] hover:shadow-lg cursor-pointer transition-transform duration-300 ease-out  '>
            <Icon6 />
            <h3 className='mt-4'>2018</h3>
            <p className='text-secondaryText-200 mt-1 font-medium'>
              SME Solutions
            </p>
          </div>
          <div className='bg-white p-10 rounded-xl shadow-md my-2 w-[18.5rem] text-lg h-[240px] hover:scale-[1.015] hover:shadow-lg cursor-pointer transition-transform duration-300 ease-out  '>
            <Icon7 />
            <h3 className='mt-4'>2018 Best</h3>
            <p className='text-secondaryText-100 mt-1 font-medium'>
              Customer award
            </p>
          </div>
          <div className='bg-white p-10 rounded-xl shadow-md my-2 w-[18.5rem] text-lg h-[240px] hover:scale-[1.015] hover:shadow-lg cursor-pointer transition-transform duration-300 ease-out  '>
            <Icon8 />
            <h3 className='bg-gradient-to-r mt-4 from-[#EBA56C] to-[#67b1e4] bg-clip-text text-transparent '>
              2017 Best
            </h3>
            <p className=' mt-1 font-medium'>SME UC solutions</p>
          </div>
        </div>

        <div
          onClick={handlePrevArrow}
          className={`absolute ${
            slidePosition < 2 && "text-white"
          } top-1/2 -translate-y-1/2 z-10 xl:-left-28 left-3 cursor-pointer bg-gray-400/40 opacity-0 group-hover:opacity-100 p-3 rounded-full transition-all duration-700`}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <polyline points='15 18 9 12 15 6'></polyline>
          </svg>
        </div>
      </div>

      <div
        onClick={handleNextArrow}
        className={`absolute ${
          slidePosition > 0 && slidePosition <= 48 && "text-white"
        } top-1/2 -translate-y-1/2 cursor-pointer z-10 right-3 bg-gray-400/40 opacity-0 group-hover:opacity-100 p-3 rounded-full transition-all duration-700`}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <polyline points='9 18 15 12 9 6'></polyline>
        </svg>
      </div>
    </div>
  );
}
