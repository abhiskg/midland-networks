import ServiceCarousel from "../../../components/carousel/ServiceCarousel";
import ServiceCarousel2 from "../../../components/carousel/ServiceCarousel2";

export default function Services() {
  return (
    <section className='custom-container mx-auto'>
      <h2 className='font-medium md:text-3xl text-2xl'>
        Services.{" "}
        <span className='text-primaryText-100'>Here where the fun begins.</span>
      </h2>
      <ServiceCarousel />

      {/* Main Services/ with Service blocks */}
      <h2 className='font-medium md:text-3xl text-2xl'>
        Help is here.{" "}
        <span className='text-primaryText-100'>Always ready for you.</span>
      </h2>
      <div className='grid md:grid-cols-2 grid-cols-1 md:grid-rows-3 grid-rows-5 gap-5 md:mb-20 mb-14 mt-5'>
        <div className='bg-white md:row-span-2 rounded-xl p-8 flex flex-row md:flex-col items-center md:items-baseline justify-between shadow-md hover:scale-[1.02] hover:shadow-lg cursor-pointer transition-transform duration-300 ease-out '>
          <div className='flex-1'>
            <h3 className='text-secondaryText-200 font-medium text-lg '>
              ADVICE
            </h3>
            <p className=' font-medium text-lg text-primaryText-200 mt-2'>
              Specialist advice
            </p>
          </div>
          <img
            src='./images/services/advice.png'
            alt=''
            className='object-contain md:w-80 w-48 mx-auto h-auto md:mt-20'
          />
        </div>

        <div className='bg-white rounded-xl flex flex-col justify-between overflow-hidden shadow-md hover:scale-[1.02] hover:shadow-lg cursor-pointer transition-transform duration-300 ease-out '>
          <div className='mt-8 ml-8'>
            <h3 className='text-secondaryText-100 font-medium text-lg'>
              TRAINING
            </h3>
            <p className=' font-medium text-lg text-primaryText-200 mt-2'>
              100 + training videos to support you
            </p>
          </div>
          <img
            src='./images/services/training.jpg'
            alt=''
            className='object-contain w-full h-auto'
          />
        </div>

        <div className='flex justify-between items-center rounded-xl bg-white p-8 shadow-md hover:scale-[1.02] hover:shadow-lg cursor-pointer transition-transform duration-300 ease-out '>
          <div>
            <h3 className=' font-medium text-lg'>SUPPORT</h3>
            <p className=' font-medium text-lg text-primaryText-200 mt-2'>
              Log a ticket in <br />
              our customer <br />
              support portal
            </p>
          </div>
          <img
            src='./images/services/support.png'
            alt=''
            className='object-contain w-28 h-auto'
          />
        </div>

        <div className='flex justify-between items-center bg-white rounded-xl shadow-md hover:scale-[1.02] hover:shadow-lg cursor-pointer transition-transform duration-300 ease-out '>
          <div className='ml-8'>
            <h3 className='text-secondaryText-100 font-medium text-lg'>
              MESSAGING
            </h3>
            <p className=' font-medium text-lg text-primaryText-200 mt-2'>
              Quick and efficient communication
            </p>
          </div>
          <img
            src='./images/services/messaging.jpg'
            alt=''
            className='object-contain w-40'
          />
        </div>

        <div className='flex justify-between items-center bg-white rounded-xl shadow-md hover:scale-[1.02] hover:shadow-lg cursor-pointer transition-transform duration-300 ease-out '>
          <div className='ml-8'>
            <h3 className='text-[#04D2FF] font-medium text-lg'>GUIDANCE</h3>
            <p className=' font-medium text-lg text-primaryText-200 mt-2'>
              User guides & software
            </p>
          </div>
          <img
            src='./images/services/guidance.png'
            alt=''
            className='object-contain w-48'
          />
        </div>
      </div>

      {/* Other Services */}
      <h2 className='font-medium md:text-3xl text-2xl'>
        The Midland Networks difference.{" "}
        <span className='text-primaryText-100'>Thats right!</span>
      </h2>
      <ServiceCarousel2 />
    </section>
  );
}
