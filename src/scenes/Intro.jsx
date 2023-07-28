import useMediaQuery from '../hooks/useMediaQuery';
import { motion } from 'framer-motion';
import SocialMediaIcons from '../components/SocialMediaIcons';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import image from '../assets/profile-img.png';

const Intro = () => {
  const isAboveMedScreens = useMediaQuery('(min-width: 1060px)');

  return (
    <section
      id='intro'
      className='md:flex md:justify-between md:items-center md:h-full gap-16 py-10'
    >
      {/* IMAGE SECTION */}
      <div className='md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-12'>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 150 },
            visible: { opacity: 1, x: 0 }
          }}
        >
          {isAboveMedScreens ? (
            <img
              alt='profile'
              className='rounded-full hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[200px] md:max-w-[400px]'
              src={image}
            />
          ) : (
            <img
              alt='profile'
              className='rounded-full hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]'
              src={image}
            />
          )}
        </motion.div>
      </div>
      {/* MAIN SECTION */}
      <div className='z-30 basis-2/5 mt-12 md:mt-22'>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
          }}
        >
          <p className='text-6xl font-semibold z-10 text-center md:text-start text-teal tracking-wider'>
            Judy{' '}
            <span className='xs: relative xs:text-purple xs:font-semibold z-20  before:absolute before:-left-[28px] before:-top-[76px] before:z-[-1] tracking-wider'>
              Kong
            </span>
          </p>

          <p className='mt-10 mb-7 text-lg text-center md:text-start tracking-widest'>
            Hello! I'm Judy Kong, a recent graduate of Nucamp's Fullstack
            Development program—an exceptional online bootcamp. Welcome to my
            portfolio page!
          </p>
        </motion.div>

        {/* CALL TO ACTION */}
        <div className='flex mt-5 justify-center md:justify-start'>
          <motion.div
            className='flex mt-5 justify-center md:justify-start'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -150 },
              visible: { opacity: 1, x: 0 }
            }}
          >
            <AnchorLink
              className='bg-gradient-rainbow text-deep-blue rounded-md py-3 px-7 font-semibold hover:text-white transition duration-500 tracking-wider'
              href='#contact'
            >
              Contact Me
            </AnchorLink>
          </motion.div>
          <motion.div
            className='flex mt-5 justify-center md:justify-start'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 150 },
              visible: { opacity: 1, x: 0 }
            }}
          >
            <AnchorLink
              className='rounded-md bg-gradient-rainbow py-0.5 hover:pr-0.5 tracking-widest'
              href='#contact'
            >
              <div className='bg-deep-blue hover:text-teal transition duration-500 w-full h-full flex items-center justify-center px-10 tracking-widest'>
                Let's talk.
              </div>
            </AnchorLink>
          </motion.div>
        </div>

        <motion.div
          className='flex mt-5 justify-center md:justify-start'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 }
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Intro;
