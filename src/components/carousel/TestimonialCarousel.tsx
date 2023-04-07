import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { testimonialData } from "../../utils/data";
import TestimonialCard from "../cards/TestimonialCard";

export default function TestimonialCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    initialSlide: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className='mt-5 mb-14'>
      <Slider {...settings}>
        {testimonialData.map((data) => (
          <TestimonialCard key={data.id} data={data} />
        ))}
      </Slider>
    </div>
  );
}
