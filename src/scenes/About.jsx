import LineGradient from '../components/LineGradient';
import useMediaQuery from '../hooks/useMediaQuery';
import { motion } from 'framer-motion';

const About = () => {
  const isAboveMedScreens = useMediaQuery('(min-width: 1060px)');

  return (
    <section id='about' className='pt-10 pb-24'>
      {/* ABOUT AND IMAGE SECTION */}
      <div className='md:flex md:justify-between md:gap-16 mt-32'>
        <motion.div
          className='md:w-1/3'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 }
          }}
        >
          <p className='font-semibold text-4xl mb-5'>
            ABOUT <span className='text-red'>ME</span>
          </p>
          <LineGradient width='w-1/3' />
          <p className='mt-10 mb-7 text-white'>
            I grew up in Elkins Park, PA, which is a suburb of Philadelphia.
            Currently, I reside in Willow Grove, PA. Initially, I pursued a
            degree in Graphic Design but eventually made the decision to
            transition into the field of Baking as my profession. I completed my
            education at the Art Institute of Philadelphia, obtaining a degree
            in Baking and Pastry. After a few years, I took a break to reflect,
            and during that time I discovered coding as a means of coping.
            Presently, I reside with my spouse and share my home with a
            dachshund named Jeenie.
          </p>
        </motion.div>

        <div className='mt-16 md:mt-0'>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 }
            }}
          >
            {isAboveMedScreens ? (
              <img
                alt='philadelphia'
                className='rounded-lg border-yellow border-2 hover:filter hover:saturate-200 transition duration-500 z-10 w-full mt-32'
                src='https://c4.wallpaperflare.com/wallpaper/44/362/402/city-lights-reflection-reflected-cityscape-wallpaper-preview.jpg'
              />
            ) : (
              <img
                alt='philadelphia'
                className='rounded-lg border-yellow border-2 hover:filter hover:saturate-200 transition duration-500 z-10 w-full mt-10'
                src='https://c4.wallpaperflare.com/wallpaper/44/362/402/city-lights-reflection-reflected-cityscape-wallpaper-preview.jpg'
              />
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
