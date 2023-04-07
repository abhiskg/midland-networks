import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Icon1 from "../../icons/Icon1";
import Icon2 from "../../icons/Icon2";
import Icon3 from "../../icons/Icon3";
import Icon4 from "../../icons/Icon4";

export default function ServiceCarousel2() {
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
        <div className='bg-white flex flex-col p-10 rounded-xl shadow-md mr-2 text-lg font-medium h-[240px] hover:scale-[1.015] hover:shadow-lg cursor-pointer transition-transform duration-300 ease-out  '>
          <Icon1 />
          <h3 className='mt-4'>Quality assurance.</h3>
          <p className='text-secondaryText-100'>Only the best for you.</p>
        </div>
        <div className='bg-white p-10 rounded-xl shadow-md mr-2 text-lg font-medium h-[240px] hover:scale-[1.015] hover:shadow-lg cursor-pointer transition-transform duration-300 ease-out '>
          <Icon2 />
          <h3 className='mt-4'>
            Price match.{" "}
            <span className='text-secondaryText-200'>
              Quality great deals promise.
            </span>
          </h3>
        </div>
        <div className='bg-white p-10 rounded-xl shadow-md mr-2 text-lg font-medium h-[240px] hover:scale-[1.015] hover:shadow-lg cursor-pointer transition-transform duration-300 ease-out '>
          <Icon3 />
          <h3 className='mt-4'>
            Customer service.{" "}
            <span className='text-secondaryText-100'>
              More than just shopping.
            </span>
          </h3>
        </div>
        <div className='bg-white p-10 rounded-xl shadow-md mr-2 text-lg font-medium h-[240px] hover:scale-[1.015] hover:shadow-lg cursor-pointer transition-transform duration-300 ease-out '>
          <Icon4 />
          <h3 className='bg-gradient-to-r mt-4 from-[#EBA56C] to-[#67b1e4] bg-clip-text text-transparent '>
            Installation
          </h3>
          <p>and exceed this industry standards</p>
        </div>
      </Slider>
    </div>
  );
}
