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
          <p className='font-semibold text-4xl mb-5 text-teal tracking-wider'>
            ABOUT <span className='text-purple'>Me</span>
          </p>
          <LineGradient width='w-[120px]' />
          <p className='mt-10 mb-7 text-white text-md tracking-wider'>
            I was born and raised in the suburbs of northeast Philadelphia by
            two hard working parents. I grew up being curious of how to do
            things that I saw. My passion for baking arose from watching lots of
            baking/cooking shows. I went to the Art Institute of Philadelphia,
            and graduated with a diploma in Baking and Pastry.
          </p>
          <p className='mt-10 mb-7 text-white text-md tracking-wider'>
            I started an entry position at a Bakehouse associated with Whole
            Foods Market. My eagerness for learning continued to where I would
            put myself out there to learn as much as I could in different areas
            of the Bakehouse. I was offered a promotion twice with my last
            position title as Administistrative Assistent. My goal was to be a
            valuable asset to where I could help the team grow.
          </p>
          <p className='mt-10 mb-7 text-white text-md tracking-wider'>
            I developed a passion for coding and made the decision to go to an
            online bootcamp called Nucamp. I am a graduate with a certificate of
            completion for Full Stack Web Development.
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
