import { useSwipeable } from "react-swipeable";
import Icon1 from "../../icons/Icon1";
import Icon2 from "../../icons/Icon2";
import Icon3 from "../../icons/Icon3";
import Icon4 from "../../icons/Icon4";
import { useState } from "react";

export default function ServiceSlider2() {
  const [slidePosition, setSlidePosition] = useState(0);

  const handlePrevArrow = () => {
    // if (slidePosition < 2) {
    //   setSlidePosition((prev) => prev + 1);
    // }
  };

  const handleNextArrow = () => {
    // if (slidePosition > 0 && slidePosition <= 2) {
    //   setSlidePosition((prev) => prev - 1);
    // }
  };

  const handlers = useSwipeable({
    onSwipedLeft: handlePrevArrow,
    onSwipedRight: handleNextArrow,
    trackMouse: true,
  });

  return (
    <div className='relative group mt-5 md:mb-20 mb-14'>
      <div className='relative h-[240px] custom-container mx-auto'>
        <div
          {...handlers}
          style={{ transform: `translateX(-${slidePosition * 20}%)` }}
          className={`flex items-center  gap-5 overflow-hidden absolute transition-transform duration-500`}
        >
          <div className='bg-white flex flex-col p-10 rounded-xl shadow-md  text-lg font-medium h-[240px] w-[18.5rem] my-2 hover:scale-[1.015] hover:shadow-lg cursor-pointer transition-transform duration-300 ease-out  '>
            <Icon1 />
            <h3 className='mt-4'>Quality assurance.</h3>
            <p className='text-secondaryText-100'>Only the best for you.</p>
          </div>
          <div className='bg-white p-10 rounded-xl shadow-md  text-lg font-medium h-[240px] w-[18.5rem] my-2 hover:scale-[1.015] hover:shadow-lg cursor-pointer transition-transform duration-300 ease-out '>
            <Icon2 />
            <h3 className='mt-4'>
              Price match.{" "}
              <span className='text-secondaryText-200'>
                Quality great deals promise.
              </span>
            </h3>
          </div>
          <div className='bg-white p-10 rounded-xl shadow-md  text-lg font-medium h-[240px] w-[18.5rem] my-2 hover:scale-[1.015] hover:shadow-lg cursor-pointer transition-transform duration-300 ease-out '>
            <Icon3 />
            <h3 className='mt-4'>
              Customer service.{" "}
              <span className='text-secondaryText-100'>
                More than just shopping.
              </span>
            </h3>
          </div>
          <div className='bg-white p-10 rounded-xl shadow-md  text-lg font-medium h-[240px] w-[18.5rem] my-2 hover:scale-[1.015] hover:shadow-lg cursor-pointer transition-transform duration-300 ease-out '>
            <Icon4 />
            <h3 className='bg-gradient-to-r mt-4 from-[#EBA56C] to-[#67b1e4] bg-clip-text text-transparent '>
              Installation
            </h3>
            <p>and exceed this industry standards</p>
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
