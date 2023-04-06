export default function SupportAndPartners() {
  return (
    <section className='bg-white py-10'>
      {/* Support Section */}
      <div className='bg-secondary-100 custom-container mx-auto p-10 grid grid-cols-2 items-center gap-5 my-20 rounded-xl'>
        <div className=''>
          <h2 className='text-4xl font-medium flex flex-col'>
            <span>Supporting any</span> <span>business size</span>
          </h2>
          <p className='my-8'>
            Our clients range from small start-up businesses who just need a
            phone line and broadband, right through to national retailers who
            require multi-site business telephone systems, lease line internet
            connectivity or cloud-based data networks. So we are confident we
            will be able to help your business.
          </p>
          <button className='bg-primary-200 text-white font-medium px-7 py-3 rounded'>
            Contact Us
          </button>
        </div>
        <div>
          <img src='./images/support-partners/support.png' alt='' />
        </div>
      </div>

      {/* Partners */}
      <div className='flex custom-container mx-auto gap-5 justify-between mb-10'>
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
    </section>
  );
}
