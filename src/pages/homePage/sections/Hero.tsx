import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../../utils/motion";

export default function Hero() {
  return (
    <motion.section
      variants={staggerContainer()}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className='custom-container flex flex-col justify-center min-h-screen mx-auto py-7 md:py-16 lg:py-32 lg:flex-row lg:justify-between'>
        <div className='flex flex-col justify-center text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left'>
          <motion.h1
            variants={fadeIn("right", "tween", 0.1, 1)}
            className='text-3xl font-medium leading-none sm:text-4xl'
          >
            Midland Network
          </motion.h1>
          <motion.h2
            variants={fadeIn("right", "tween", 0.3, 1)}
            className='text-3xl justify-center lg:justify-start font-medium leading-none sm:text-4xl flex gap-1 mt-2'
          >
            We are
            <div className='text-primary-100'>
              <Typewriter
                options={{
                  strings: [
                    "IT Experts",
                    "Data Cabler",
                    "Passionate",
                    "Experienced",
                    "Telecom Providers",
                    "Engineers",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </motion.h2>
          <motion.p
            variants={fadeIn("up", "tween", 0.4, 1)}
            className='mt-6 mb-8 font-serif sm:mb-12'
          >
            Midland Networks started life as a telecom company and it's still
            the major part of our business. We have expanded our services over
            the years at customer request to offer related services, providing
            our customers with one port of call.
          </motion.p>
          <motion.div
            variants={fadeIn("up", "tween", 0.6, 1)}
            className='flex sm:items-center justify-center space-x-4 lg:justify-start'
          >
            <a
              rel='noopener noreferrer'
              href='#'
              className='px-8 py-2.5 font-medium rounded-md text-sm border border-black hover:bg-white hover:border-white transition-colors duration-300'
            >
              ABOUT US
            </a>
            <a
              rel='noopener noreferrer'
              href='#'
              className='px-8 py-2.5 font-medium rounded-md text-sm border text-white bg-primary-100 hover:text-primary-100 border-primary-100 hover:bg-white transition-colors duration-300'
            >
              GET IN TOUCH
            </a>
          </motion.div>
        </div>
        <motion.div
          variants={fadeIn("left", "tween", 0.3, 1)}
          className='flex items-center justify-center  mt-8 lg:mt-0 '
        >
          <img
            src='./images/hero/hero.jpg'
            alt=''
            className='object-contain w-80 md:w-[30rem] h-auto'
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
