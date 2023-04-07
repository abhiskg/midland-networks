import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { servicesData } from "../../utils/data";
import ServiceCard from "../cards/ServiceCard";

export default function ServiceCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    initialSlide: 0,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 2500,
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
    <div className='mt-5 md:mb-20 mb-14'>
      <Slider {...settings}>
        {servicesData.map((data) => (
          <ServiceCard key={data.id} data={data} />
        ))}
      </Slider>
    </div>
  );
}
