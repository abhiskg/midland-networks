import AwardsCarousel from "../../../components/carousel/AwardsCarousel";

export default function BusinessModel() {
  return (
    <div className='custom-container mx-auto py-10'>
      {/*Award/Recognition */}
      <h2 className='font-medium text-3xl'>
        Award winning service.{" "}
        <span className='text-primaryText-100'>National recognition.</span>
      </h2>
      <AwardsCarousel />

      {/* Way of Business */}
      <h2 className='font-medium text-3xl'>
        Our believes.{" "}
        <span className='text-primaryText-100'>The way we do business.</span>
      </h2>

      <div className='grid md:grid-cols-2 grid-cols-1 gap-5 md:grid-rows-2 mt-5 pb-10'>
        <div className='md:col-span-2 bg-white rounded-xl grid md:grid-cols-2 grid-cols-1'>
          <div className='flex flex-col justify-center items-center p-10'>
            <h3 className='font-medium text-xl text-secondaryText-100'>
              TRUST
            </h3>
            <p className='font-medium text-2xl text-primaryText-200 text-center'>
              We believe trust is the foundation of any lasting relationship.
            </p>
          </div>
          <img
            src='./images/business-model/trust.jpg'
            alt=''
            className='w-full md:h-full h-60 object-contain'
          />
        </div>
        <div className='bg-white rounded-xl flex flex-col justify-between overflow-hidden'>
          <div>
            <h3 className='font-medium text-xl text-secondaryText-200 text-center mt-10'>
              PASSION
            </h3>
            <p className='font-medium text-2xl text-primaryText-200 text-center'>
              Think bigger.
            </p>
          </div>
          <img
            src='./images/business-model/passion.jpg'
            alt=''
            className='object-contain w-full h-auto'
          />
        </div>
        <div className='bg-white rounded-xl flex flex-col justify-between'>
          <div className='p-10'>
            <h3 className='font-medium text-xl text-secondaryText-300'>
              EXPERTISE
            </h3>
            <p className='font-medium text-2xl text-primaryText-200 '>
              Over 20 years of experience.
            </p>
          </div>
          <img
            src='./images/business-model/expertise.jpg'
            className='object-contain h-auto w-48 self-center'
            alt=''
          />
        </div>
      </div>

      <div className='text-center text-4xl font-semibold'>Let's Connect</div>
      <button className=''>GET IN TOUCH</button>
    </div>
  );
}
