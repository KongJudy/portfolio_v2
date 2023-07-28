import LineGradient from '../components/LineGradient';
import useMediaQuery from '../hooks/useMediaQuery';
import { motion } from 'framer-motion';
import { IconData } from '../features/IconData';
import CarouselFeature from '../features/CarouselFeature';

const Skills = () => {
  const isAboveMedScreens = useMediaQuery('(min-width: 1060px)');

  const firstFiveIconData = IconData.slice(0, 5);
  const lastFiveIconData = IconData.slice(5, 10);

  return (
    <section id='skills' className='pt-10 pb-24'>
      {/* SKILLS */}
      <div className='md:flex md:justify-between md:gap-16 mt-32'>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          <div>
            <p className='font-semibold text-4xl mb-5 text-teal tracking-wider'>
              SKILLS <span className='text-purple'>& Certificates</span>
            </p>
          </div>

          <LineGradient width='w-[114px]' />
        </motion.div>
      </div>

      {isAboveMedScreens ? (
        <div className='text-white md:flex md:gap-4 mt-12'>
          {firstFiveIconData.map((data) => (
            <motion.div
              key={data.key}
              className='md:w-1/3 md:flex md:justify-center'
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 3 }}
              variants={{
                hidden: { opacity: 0, x: -150 },
                visible: { opacity: 1, x: 0 }
              }}
            >
              {data.icon}
            </motion.div>
          ))}
          {lastFiveIconData.map((data) => (
            <motion.div
              key={data.key}
              className='md:w-1/3 md:flex md:justify-center'
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 3 }}
              variants={{
                hidden: { opacity: 0, x: 150 },
                visible: { opacity: 1, x: 0 }
              }}
            >
              {data.icon}
            </motion.div>
          ))}
        </div>
      ) : (
        <div className='text-white sm:flex sm:justify-center columns-2 mt-12'>
          {firstFiveIconData.map((data) => (
            <motion.div
              key={data.key}
              className='flex justify-center'
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 }
              }}
            >
              {data.icon}
            </motion.div>
          ))}
          {lastFiveIconData.map((data) => (
            <motion.div
              key={data.key}
              className='flex justify-center'
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 }
              }}
            >
              {data.icon}
            </motion.div>
          ))}
        </div>
      )}
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 }
        }}
      >
        {/* CERTIFICATES */}
        <CarouselFeature />
      </motion.div>
    </section>
  );
};

export default Skills;
