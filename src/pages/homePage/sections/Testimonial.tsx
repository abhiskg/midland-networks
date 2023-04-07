import TestimonialCarousel from "../../../components/carousel/TestimonialCarousel";

export default function Testimonial() {
  return (
    <section className='bg-gradient-to-br from-[#359ad5] to-[#359ad5] py-10'>
      <div className='custom-container mx-auto'>
        <h2 className='text-center text-4xl font-medium text-white'>
          Client Testimonial
        </h2>
        <p className='font-medium text-center mt-3 text-lg text-[#CFCFCF] mb-10'>
          Don't just take our word for it.
        </p>
        <TestimonialCarousel />
      </div>
    </section>
  );
}
