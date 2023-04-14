import { type WheelEvent, useState } from "react";
import { servicesData } from "../../utils/data";
import ServiceCard from "../cards/ServiceCard";
import { useSwipeable } from "react-swipeable";

const ServiceSlider = () => {
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
    if (window.innerWidth < 500 && slidePosition < 4) {
      return setSlidePosition((prev) => prev + 1);
    }
    if (window.innerWidth < 900 && slidePosition < 3) {
      return setSlidePosition((prev) => prev + 1);
    }
    if (slidePosition < 2) {
      return setSlidePosition((prev) => prev + 1);
    }
  };

  const handleNextArrow = () => {
    if (window.innerWidth < 500 && slidePosition > 0 && slidePosition <= 4) {
      return setSlidePosition((prev) => prev - 1);
    }
    if (window.innerWidth < 900 && slidePosition > 0 && slidePosition <= 3) {
      return setSlidePosition((prev) => prev - 1);
    }
    if (slidePosition > 0 && slidePosition <= 2) {
      return setSlidePosition((prev) => prev - 1);
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: handlePrevArrow,
    onSwipedRight: handleNextArrow,
    trackMouse: true,
  });

  return (
    <div className='relative group mt-5'>
      <div
        onWheel={handleWheel}
        className='relative h-[30rem] custom-container mx-auto'
      >
        <div
          {...handlers}
          style={{ transform: `translateX(-${slidePosition * 20}%)` }}
          className={`flex items-center  gap-5 overflow-hidden absolute transition-transform duration-700`}
        >
          {servicesData.map((data) => (
            <ServiceCard key={data.id} data={data} />
          ))}
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
};

export default ServiceSlider;
