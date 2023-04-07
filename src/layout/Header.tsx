import { useState } from "react";

const Header = () => {
  const [menu, setMenu] = useState(false);

  return (
    <header
      className={`  h-[4.5rem] shadow-sm sticky top-0 z-30 bg-secondary-200 `}
    >
      <nav className=' flex h-full  items-center justify-between custom-container mx-auto'>
        <div>
          <img
            src='./images/logo/logo.png'
            alt=''
            className='object-contain sm:w-20 w-14 h-auto'
          />
        </div>

        <ul
          className={`hidden gap-3 font-medium xl:gap-6 lg:flex cursor-pointer  `}
        >
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Downloads</li>
          <li>Training Video</li>
          <li>Billing</li>
          <li>Contact Us</li>
        </ul>
        <ul className='hidden items-center gap-3 font-medium lg:flex xl:gap-4'>
          <li className=' cursor-pointer rounded-3xl border px-4 py-1 text-white bg-primary-100'>
            Login
          </li>
          <li className=' cursor-pointer hover:text-primary-100'>Sign Up</li>
        </ul>

        <div
          onClick={() => setMenu(!menu)}
          className='z-30  flex h-5 w-8 cursor-pointer flex-col items-end justify-between lg:hidden '
        >
          <span
            className={`rounded-lg bg-primary-100 p-px transition-transform duration-100 ease-in-out ${
              menu ? "w-6 translate-y-1 rotate-45" : "w-full"
            }`}
          />
          <span
            className={`rounded-lg bg-primary-100 p-px  ${
              menu ? "hidden" : "w-3/4"
            }`}
          />
          <span
            className={`rounded-lg bg-primary-100 p-px transition-transform duration-100 ease-in-out ${
              menu ? "w-6 -translate-y-3.5 -rotate-45" : "w-3/6"
            }`}
          />
        </div>
      </nav>

      {/* Mobile View */}

      <nav
        className={` fixed  top-0  right-0 z-20 flex h-screen w-3/5  flex-col items-center gap-7 bg-secondary-100 p-10 font-medium  drop-shadow-md transition-transform duration-200 ease-in-out lg:hidden ${
          menu ? "translate-x-0 " : "translate-x-full"
        }`}
      >
        <ul className='flex flex-col items-center gap-7 cursor-pointer'>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Downloads</li>
          <li>Training Video</li>
          <li>Billing</li>
          <li>Contact Us</li>
          <li className='  rounded-3xl border px-4 py-1 text-white bg-primary-100'>
            Login
          </li>
          <li className='  hover:text-primary-100'>Sign Up</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

// aria-current="page"
