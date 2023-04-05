export default function Footer() {
  return (
    <footer className=' bg-secondary-400 px-4 text-white'>
      <div className='custom-container mx-auto flex flex-col justify-between space-y-8 py-10 lg:flex-row lg:space-y-0'>
        <div className=''>
          <div className='text-3xl font-extrabold'>
            <span className='text-btn-secondary'>CRYPTO</span>
            <span className='text-white'> GURU DEALS</span>
          </div>
          <div>© 2023 Crypto Guru Deals. All rights reserved</div>
          <div className='mt-4 flex items-center gap-3'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='22'
              height='22'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z'></path>
            </svg>

            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='22'
              height='22'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path d='M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z'></path>
            </svg>

            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='22'
              height='22'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z'></path>
              <rect x='2' y='9' width='4' height='12'></rect>
              <circle cx='4' cy='4' r='2'></circle>
            </svg>

            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='22'
              height='22'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <rect x='2' y='2' width='20' height='20' rx='5' ry='5'></rect>
              <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z'></path>
              <line x1='17.5' y1='6.5' x2='17.51' y2='6.5'></line>
            </svg>

            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='22'
              height='22'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path d='M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z'></path>
              <polygon points='9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02'></polygon>
            </svg>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-x-6 gap-y-8 text-sm sm:grid-cols-3 '>
          <div className='space-y-3'>
            <h3 className='font-medium uppercase tracking-wide dark:text-gray-50'>
              Information
            </h3>
            <ul className='space-y-1'>
              <li>
                <a rel='noopener noreferrer' href='#'>
                  My Account
                </a>
              </li>
              <li>
                <a rel='noopener noreferrer' href='#'>
                  Affiliates Home
                </a>
              </li>
              <li>
                <a rel='noopener noreferrer' href='#'>
                  Affiliate Login
                </a>
              </li>
              <li>
                <a rel='noopener noreferrer' href='#'>
                  Affiliate Register
                </a>
              </li>
              <li>
                <a rel='noopener noreferrer' href='#'>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className='space-y-3'>
            <h3 className='font-medium uppercase tracking-wide dark:text-gray-50'>
              Company Policy
            </h3>
            <ul className='space-y-1'>
              <li>
                <a rel='noopener noreferrer' href='#'>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a rel='noopener noreferrer' href='#'>
                  Shipping And Returns
                </a>
              </li>
              <li>
                <a rel='noopener noreferrer' href='#'>
                  Frequently Asked Questions
                </a>
              </li>
              <li>
                <a rel='noopener noreferrer' href='#'>
                  Terms and Conditions
                </a>
              </li>
            </ul>
          </div>
          <div className='space-y-3'>
            <h3 className='font-medium uppercase dark:text-gray-50'>
              Navigation
            </h3>
            <ul className='space-y-1'>
              <li>
                <a rel='noopener noreferrer' href='#'>
                  About Us
                </a>
              </li>
              <li>
                <a rel='noopener noreferrer' href='#'>
                  Blog
                </a>
              </li>
              <li>
                <a rel='noopener noreferrer' href='#'>
                  Clients
                </a>
              </li>
              <li>
                <a rel='noopener noreferrer' href='#'>
                  Brands
                </a>
              </li>
              <li>
                <a rel='noopener noreferrer' href='#'>
                  Careers
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
