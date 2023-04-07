import AwardsCarousel from "../../../components/carousel/AwardsCarousel";

export default function BusinessModel() {
  return (
    <div className='custom-container mx-auto md:mt-20 mt-14 mb-10'>
      {/*Award/Recognition */}
      <h2 className='font-medium md:text-3xl text-2xl '>
        Award winning service.{" "}
        <span className='text-primaryText-100'>National recognition.</span>
      </h2>
      <AwardsCarousel />

      {/* Way of Business */}
      <h2 className='font-medium md:text-3xl text-2xl'>
        Our believes.{" "}
        <span className='text-primaryText-100'>The way we do business.</span>
      </h2>

      <div className='grid md:grid-cols-2 grid-cols-1 gap-5 md:grid-rows-2 mt-5 mb-10 md:mb-16'>
        <div className='md:col-span-2 bg-white rounded-xl grid md:grid-cols-2 grid-cols-1 shadow-md hover:scale-[1.02] hover:shadow-lg cursor-pointer transition-transform duration-300 ease-out  overflow-hidden'>
          <div className='flex flex-col justify-center items-center p-10'>
            <h3 className='font-medium text-xl text-secondaryText-100'>
              TRUST
            </h3>
            <p className='font-medium sm:text-2xl text-lg text-primaryText-200 text-center'>
              We believe trust is the foundation of any lasting relationship.
            </p>
          </div>
          <img
            src='./images/business-model/trust.jpg'
            alt=''
            className='w-full md:h-full h-40 md:object-contain'
          />
        </div>
        <div className='bg-white rounded-xl flex flex-col justify-between overflow-hidden shadow-md hover:scale-[1.02] hover:shadow-lg cursor-pointer transition-transform duration-300 ease-out '>
          <div>
            <h3 className='font-medium text-xl text-secondaryText-200 text-center mt-10'>
              PASSION
            </h3>
            <p className='font-medium sm:text-2xl text-lg text-primaryText-200 text-center'>
              Think bigger.
            </p>
          </div>
          <img
            src='./images/business-model/passion.jpg'
            alt=''
            className='object-contain w-full h-auto'
          />
        </div>
        <div className='bg-white rounded-xl flex flex-col justify-between overflow-hidden shadow-md hover:scale-[1.02] hover:shadow-lg cursor-pointer transition-transform duration-300 ease-out '>
          <div className='p-10'>
            <h3 className='font-medium text-xl text-secondaryText-300'>
              EXPERTISE
            </h3>
            <p className='font-medium sm:text-2xl text-lg text-primaryText-200 '>
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

      <div className='text-center lg:text-4xl sm:text-3xl text-2xl font-semibold'>
        Let's Connect
      </div>

      <div className='b animate-pulse mx-auto md:h-14 h-11 md:w-52 w-40 flex justify-center items-center mt-5 md:mt-10'>
        <div className='i md:h-14 h-11 md:w-52 w-40 bg-primary-200 items-center rounded-md shadow-2xl cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out'></div>
        <a className='text-center text-white md:font-semibold font-medium z-10 pointer-events-none'>
          GET IN TOUCH
        </a>
      </div>
    </div>
  );
}
