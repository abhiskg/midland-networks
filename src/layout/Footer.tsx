export default function Footer() {
  return (
    <footer className=' bg-secondary-400  text-white'>
      <div className='custom-container2 mx-auto flex flex-col justify-between py-10 lg:flex-row gap-10 lg:gap-20 '>
        <div className='max-w-[340px]'>
          <div>
            <img
              src='./images/logo/logo.png'
              alt=''
              className='object-contain w-28 h-auto'
            />
          </div>
          <p className='my-5'>
            Midland Networks started life as a business lines and calls provider
            in Birmingham City Centre, we moved our offices to Halesowen in
            2012. We expanded over the following years to cover all forms of
            business communications and gained customers from all over the UK.
          </p>
          <div className='mt-4 flex items-center gap-3'>
            <div className='border-2 rounded-full p-2 border-[#0a81ed]'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='22'
                height='22'
                viewBox='0 0 24 24'
                fill='#0a81ed'
                stroke='#0a81ed'
                strokeWidth='0'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z'></path>
              </svg>
            </div>

            <div className='border-2 rounded-full p-2 border-[#01aaed]'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='22'
                height='22'
                viewBox='0 0 24 24'
                fill='#01aaed'
                stroke='#01aaed'
                strokeWidth='0'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z'></path>
              </svg>
            </div>

            <div className='border-2 rounded-full p-2 border-[#b31212]'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='22'
                height='22'
                viewBox='0 0 24 24'
                fill='none'
                stroke='#b31212'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z'></path>
                <polygon points='9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02'></polygon>
              </svg>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-6 sm:grid-cols-3 '>
          <div className='space-y-3'>
            <h3 className='font-medium text-2xl  tracking-wide dark:text-gray-50'>
              Services
            </h3>
            <ul className='space-y-1 font-medium'>
              <li>
                <a rel='noopener noreferrer' href='#'>
                  Telephone Systems
                </a>
              </li>
              <li>
                <a rel='noopener noreferrer' href='#'>
                  Lines & Calls
                </a>
              </li>
              <li>
                <a rel='noopener noreferrer' href='#'>
                  Internet
                </a>
              </li>
              <li>
                <a rel='noopener noreferrer' href='#'>
                  Mobile & 4G
                </a>
              </li>
              <li>
                <a rel='noopener noreferrer' href='#'>
                  Cabling
                </a>
              </li>
              <li>
                <a rel='noopener noreferrer' href='#'>
                  Wifi
                </a>
              </li>
              <li>
                <a rel='noopener noreferrer' href='#'>
                  Hosted Telephony System
                </a>
              </li>
            </ul>
          </div>
          <div className='space-y-3'>
            <h3 className='font-medium text-2xl tracking-wide dark:text-gray-50'>
              Useful Links
            </h3>
            <ul className='space-y-1 font-medium'>
              <li>
                <a rel='noopener noreferrer' href='#'>
                  Our Brochure
                </a>
              </li>
              <li>
                <a rel='noopener noreferrer' href='#'>
                  Order Form
                </a>
              </li>
              <li>
                <a rel='noopener noreferrer' href='#'>
                  Finance Calculator
                </a>
              </li>
              <li>
                <a rel='noopener noreferrer' href='#'>
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div className='space-y-3'>
            <h3 className='font-medium text-2xl dark:text-gray-50'>
              Contact Us
            </h3>
            <ul className='space-y-2 font-medium'>
              <li className='flex items-start gap-2'>
                <div className='rounded-full bg-primary-100  p-2 text-white'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='20'
                    height='20'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <title>Map</title>
                    <path d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z'></path>
                    <circle cx='12' cy='10' r='3'></circle>
                  </svg>
                </div>
                <a rel='noopener noreferrer' href='#'>
                  Midland Networks Group Holdings Ltd, <br />
                  Commercial House, 21a Stone Street, <br />
                  Dudley, West Midlands, DY1 1NJ
                </a>
              </li>

              <li className='flex items-center gap-2'>
                <div className='rounded-full bg-primary-100 p-2 text-white'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='20'
                    height='20'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <title>Phone</title>
                    <path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z'></path>
                  </svg>
                </div>
                <a rel='noopener noreferrer' href='#'>
                  0800 849 8585
                </a>
              </li>

              <li className='flex items-center gap-2'>
                <div className='rounded-full bg-primary-100 p-2 text-white'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    width='20'
                    height='20'
                    stroke='currentColor'
                    fill='none'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <title>Mail</title>
                    <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                    <rect x='3' y='5' width='18' height='14' rx='2'></rect>
                    <polyline points='3 7 12 13 21 7'></polyline>
                  </svg>
                </div>
                <a rel='noopener noreferrer' href='#'>
                  hello@midlandnetworks.co.uk
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <hr className='mx-auto h-px bg-gray-400 custom-container2 mb-3' />
      <small className='text-center block pb-3 text-base'>
        © 2022 Midland Networks Group Holdings Ltd. All Rights Reserved.
      </small>
    </footer>
  );
}
