export default function SupportAndPartners() {
  return (
    <section className='bg-white md:py-20 py-16'>
      {/* Support Section */}
      <div className='bg-secondary-100 custom-container mx-auto md:p-10 p-5 grid lg:grid-cols-2 grid-cols-1 items-center gap-5 md:mb-20 mb-10  rounded-xl'>
        <div className=''>
          <h2 className='md:text-4xl sm:text-3xl text-2xl font-medium flex lg:flex-col flex-row flex-wrap gap-2 justify-center lg:gap-0'>
            <span>Supporting any</span> <span>business size</span>
          </h2>
          <p className='sm:my-8 my-4 text-center lg:text-left'>
            Our clients range from small start-up businesses who just need a
            phone line and broadband, right through to national retailers who
            require multi-site business telephone systems, lease line internet
            connectivity or cloud-based data networks. So we are confident we
            will be able to help your business.
          </p>
          <button className='bg-primary-200 text-white font-medium px-7 py-3 rounded flex  justify-center lg:justify-start mx-auto lg:mx-0 '>
            Contact Us
          </button>
        </div>
        <div>
          <img src='./images/support-partners/support.png' alt='' />
        </div>
      </div>

      <hr className='mx-auto h-0.5 bg-black custom-container mb-5' />

      {/* Partners */}
      <div className='custom-container mx-auto'>
        <h2 className='font-medium  text-2xl text-center mb-10'>
          Midland Networks Partnership
        </h2>
        <div className='grid md:grid-cols-6 grid-cols-3 items-center place-items-center md:gap-5 gap-3 mb-10'>
          <img
            src='./images/support-partners/partner-2.png'
            width={100}
            alt=''
            className='h-auto object-contain'
          />
          <img
            src='./images/support-partners/partner-4.png'
            width={100}
            alt=''
            className='h-auto object-contain'
          />
          <img
            src='./images/support-partners/partner-3.png'
            width={100}
            alt=''
            className='h-auto object-contain'
          />
          <img
            src='./images/support-partners/partner-5.png'
            width={100}
            alt=''
            className='h-auto object-contain'
          />
          <img
            src='./images/support-partners/partner-6.png'
            width={100}
            alt=''
            className='h-auto object-contain'
          />
          <img
            src='./images/support-partners/partner-1.png'
            width={100}
            alt=''
            className='h-auto object-contain'
          />
        </div>
      </div>
    </section>
  );
}
