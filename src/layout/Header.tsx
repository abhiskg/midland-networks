import { useState } from "react";

const Header = () => {
  const [menu, setMenu] = useState(false);

  return (
    <header className={`  h-[4.5rem] bg-secondary-200`}>
      <nav className=' flex h-full  items-center justify-between custom-container mx-auto'>
        <div className='text-2xl font-extrabold xl:text-3xl'>
          <span className='text-btn-secondary'>CRYPTO</span>
        </div>

        <ul className={`hidden gap-3 font-medium xl:gap-6 lg:flex  `}>
          <li className=' cursor-pointer text-primary'>Home</li>
          <li className=' cursor-pointer text-primary'>About</li>
          <li className=' cursor-pointer text-primary'>Services</li>
          <li className=' cursor-pointer text-primary'>Downloads</li>
          <li className=' cursor-pointer text-primary'>Training Video</li>
          <li className=' cursor-pointer text-primary'>Billing</li>
          <li className=' cursor-pointer text-primary'>Contact Us</li>
        </ul>
        <ul className='hidden items-center gap-3 font-medium lg:flex xl:gap-4'>
          <li className=' cursor-pointer rounded-md border px-3 py-1.5 text-white bg-primary-100'>
            Login
          </li>
          <li className=' cursor-pointer rounded-md border bg-btn-primary px-3 py-1.5 text-primary'>
            Sign Up
          </li>
        </ul>

        <div
          onClick={() => setMenu(!menu)}
          className='z-30  flex h-5 w-8 cursor-pointer flex-col items-end justify-between lg:hidden '
        >
          <span
            className={`rounded-lg bg-primary p-px transition-transform duration-100 ease-in-out ${
              menu ? "w-6 translate-y-1 rotate-45" : "w-full"
            }`}
          />
          <span
            className={`rounded-lg bg-primary p-px  ${
              menu ? "hidden" : "w-3/4"
            }`}
          />
          <span
            className={`rounded-lg bg-primary p-px transition-transform duration-100 ease-in-out ${
              menu ? "w-6 -translate-y-3.5 -rotate-45" : "w-3/6"
            }`}
          />
        </div>
      </nav>

      {/* Mobile View */}

      <nav
        className={` fixed  top-16  right-0 z-20 flex h-screen w-3/5  flex-col items-center gap-7 bg-bgPrimary p-10 font-medium  drop-shadow-md transition-transform duration-200 ease-in-out lg:hidden ${
          menu ? "translate-x-0 " : "translate-x-full"
        }`}
      >
        <ul className='flex flex-col items-center gap-7'>
          <li className=' cursor-pointer text-primary'>Home</li>
          <li className=' cursor-pointer text-primary'>Shop</li>
          <li className=' cursor-pointer text-primary'>Who we are</li>
          <li className=' cursor-pointer text-primary'>FAQS</li>
          <li className=' cursor-pointer text-primary'>Blog</li>
          <li className=' cursor-pointer text-primary'>Contact Us</li>
          <li className=' cursor-pointer rounded-md border px-3 py-1.5 text-primary'>
            Login
          </li>
          <li className=' cursor-pointer rounded-md border bg-btn-primary px-3 py-1.5 text-primary'>
            Sign Up
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

// aria-current="page"
