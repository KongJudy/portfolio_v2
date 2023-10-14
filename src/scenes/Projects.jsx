import LineGradient from '../components/LineGradient';
import { motion } from 'framer-motion';
import { ToDoSlides } from '../features/ToDo/ToDoSlides';
import ProjectCard from '../components/ProjectCard';
import { ToDoAppData } from '../features/ToDo/ToDoData';
import { BlogAppData } from '../features/Blog/BlogData';
import { BlogSlides } from '../features/Blog/BlogSlides';
import { MobileAppData } from '../features/MobileApp/MobileData';
import { MobileSlides } from '../features/MobileApp/MobileSlides';

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
          My <span className='text-purple tracking-wider'>PROJECTS</span>
        </p>
        <div className='mt-5 ml-16'>
          <LineGradient width='w-[178px]' />
        </div>
      </motion.div>

      {/* PROJECTS */}
      <div className='flex justify-center mt-4'>
        <motion.div
          className='grid grid-cols-1 md:grid-cols-3 mt-10 gap-6'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
          }}
        >
          <ProjectCard
            title={ToDoAppData.title}
            text={ToDoAppData.text}
            slidesData={ToDoSlides}
            demo={ToDoAppData.demo}
            github={ToDoAppData.github}
          />

          <ProjectCard
            title={BlogAppData.title}
            text={BlogAppData.text}
            slidesData={BlogSlides}
            demo={BlogAppData.demo}
            github={BlogAppData.github}
          />

          <ProjectCard
            title={MobileAppData.title}
            text={MobileAppData.text}
            slidesData={MobileSlides}
            github={MobileAppData.github}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
