export default function Services() {
  return (
    <section className='custom-container mx-auto'>
      {/* Main Services/ with Service blocks */}
      <h2 className='font-medium text-3xl'>
        Help is here.{" "}
        <span className='text-primaryText-100'>Always ready for you.</span>
      </h2>
      <div className='grid md:grid-cols-2 grid-cols-1 md:grid-rows-3 grid-rows-5 gap-5 mb-10 mt-4'>
        <div className='bg-white md:row-span-2 rounded-xl p-8 flex flex-row md:flex-col items-center md:items-baseline justify-between shadow-md'>
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

        <div className='bg-white rounded-xl flex flex-col justify-between overflow-hidden shadow-md'>
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

        <div className='flex justify-between items-center rounded-xl bg-white p-8 shadow-md'>
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

        <div className='flex justify-between items-center bg-white rounded-xl shadow-md'>
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

        <div className='flex justify-between items-center bg-white rounded-xl shadow-md'>
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
    </section>
  );
}
