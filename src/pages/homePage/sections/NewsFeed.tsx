export default function NewsFeed() {
  return (
    <section className='custom-container mx-auto py-10 md:py-20'>
      <h2 className='font-medium md:text-4xl sm:text-3xl text-2xl text-center'>
        Stay Updated.
      </h2>
      <p className='text-center text-primaryText-100 font-medium'>
        Discover the latest news
      </p>

      {/* Grid Block Sec */}
      <div className='grid md:grid-cols-3 grid-cols-1 grid-rows-3 md:grid-rows-1 gap-5 mt-7 md:mt-10'>
        <div className='md:col-span-3 grid grid-cols-2 shadow-md rounded-xl hover:scale-[1.01] hover:shadow-lg cursor-pointer transition-transform duration-300 ease-out overflow-hidden '>
          <div className='bg-[#D7657F] rounded-l-xl flex items-center sm:pl-10 pl-5 relative overflow-hidden '>
            <h3 className='text-white md:text-4xl sm:text-3xl text-2xl font-medium'>
              Paying too
              <br />
              much for
              <br />
              your mobile?
            </h3>
            <small className='absolute bottom-4 text-white'>
              Mobile phone | 3 min. read
            </small>
          </div>
          <div className='bg-primary-100 flex justify-center items-center p-10 rounded-r-xl'>
            <img
              src='./images/newsfeed/mobile.png'
              alt=''
              className='w-60 h-auto object-contain'
            />
          </div>
        </div>

        <div className='hover:scale-[1.02] hover:shadow-lg shadow-md rounded-xl cursor-pointer transition-transform duration-300 ease-out overflow-hidden'>
          <img
            src='./images/newsfeed/server.png'
            className='rounded-t-xl sm:object-contain w-full sm:h-auto h-44'
            alt=''
          />
          <div className='bg-primary-100 rounded-b-xl pb-3'>
            <h3 className='font-bold sm:text-xl text-lg md:py-6 py-4 lg:pl-8 pl-4'>
              Why Choose a <br className='md:inline hidden' />
              Hosted Telephone <br className='md:inline hidden' />
              System?
            </h3>
            <small className='lg:ml-8 ml-4'>
              Telephone system | 2 min. read
            </small>
          </div>
        </div>

        <div className='bg-[#285883] rounded-xl relative pb-3 md:h-auto  text-white flex justify-center items-center shadow-md hover:scale-[1.02] hover:shadow-lg cursor-pointer transition-transform duration-300 ease-out '>
          <h3 className='font-bold text-xl '>Midland HVS</h3>
          <small className='absolute cursor-pointer bottom-8 border-2 border-white px-5 py-2 uppercase font-medium'>
            Training Videos
          </small>
        </div>

        <div className='h-full shadow-md rounded-xl overflow-hidden hover:scale-[1.02] hover:shadow-lg cursor-pointer transition-transform duration-300 ease-out '>
          <img
            src='./images/newsfeed/installer.png'
            alt=''
            className='rounded-t-xl object-contain h-auto w-full'
          />
          <div className='bg-[#D7657F] rounded-b-xl pb-3 text-white'>
            <h3 className='font-bold text-xl md:py-6 py-4 lg:pl-8 pl-4'>
              10 Things Every <br className='md:inline hidden' />
              Cabling Installer <br className='md:inline hidden' />
              Should Know
            </h3>
            <small className='lg:ml-8 ml-4'>Data cabling | 2 min. read</small>
          </div>
        </div>
      </div>
    </section>
  );
}
