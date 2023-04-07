import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Icon5 from "../../icons/Icon5";
import Icon6 from "../../icons/Icon6";
import Icon7 from "../../icons/Icon7";
import Icon8 from "../../icons/Icon8";

export default function AwardsCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 2500,
    initialSlide: 0,
    slidesToShow: 3,
    slidesToScroll: 1,
    // centerMode: true,
    // className: "center",
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className='mt-5 mb-14 md:mb-20'>
      <Slider {...settings}>
        <div className='bg-white flex flex-col p-10 rounded-xl shadow-md mr-2 text-lg h-[240px] hover:scale-[1.015] hover:shadow-lg cursor-pointer transition-transform duration-300 ease-out   '>
          <Icon5 />
          <h3 className='mt-4'>2018</h3>
          <p className='text-secondaryText-100 mt-1 font-medium'>
            Cloud Solutions
          </p>
        </div>
        <div className='bg-white p-10 rounded-xl shadow-md mr-2 text-lg h-[240px] hover:scale-[1.015] hover:shadow-lg cursor-pointer transition-transform duration-300 ease-out  '>
          <Icon6 />
          <h3 className='mt-4'>2018</h3>
          <p className='text-secondaryText-200 mt-1 font-medium'>
            SME Solutions
          </p>
        </div>
        <div className='bg-white p-10 rounded-xl shadow-md mr-2 text-lg h-[240px] hover:scale-[1.015] hover:shadow-lg cursor-pointer transition-transform duration-300 ease-out  '>
          <Icon7 />
          <h3 className='mt-4'>2018 Best</h3>
          <p className='text-secondaryText-100 mt-1 font-medium'>
            Customer award
          </p>
        </div>
        <div className='bg-white p-10 rounded-xl shadow-md mr-2 text-lg h-[240px] hover:scale-[1.015] hover:shadow-lg cursor-pointer transition-transform duration-300 ease-out  '>
          <Icon8 />
          <h3 className='bg-gradient-to-r mt-4 from-[#EBA56C] to-[#67b1e4] bg-clip-text text-transparent '>
            2017 Best
          </h3>
          <p className=' mt-1 font-medium'>SME UC solutions</p>
        </div>
      </Slider>
    </div>
  );
}
