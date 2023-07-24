import LineGradient from '../components/LineGradient';
import { motion } from 'framer-motion';
import BlogCard from '../features/BlogCard';
import AppCard from '../features/AppCard';

const Projects = () => {
  return (
    <section id='projects' className='pt-48 pb-48'>
      {/*HEADINGS */}
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
        <p className='font-semibold text-4xl text-teal'>
          My <span className='text-purple'>PROJECTS</span>
        </p>
        <div className='mt-5 ml-16'>
          <LineGradient width='w-[164px]' />
        </div>
      </motion.div>

      {/* PROJECTS */}
      <div className='flex justify-between'>
        <motion.div
          className='sm:grid sm:grid-cols-3 mt-12 gap-6'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
          }}
        >
          <div>
            <BlogCard />
          </div>
          <div>
            <AppCard />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
