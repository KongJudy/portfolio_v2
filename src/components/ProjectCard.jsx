import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import useMediaQuery from '../hooks/useMediaQuery';

const ProjectCard = ({ slidesData, title, text, github, demo }) => {
  const isAboveMedScreens = useMediaQuery('(min-width: 1060px)');

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: isAboveMedScreens ? 1 : 1,
    slidesToScroll: isAboveMedScreens ? 1 : 1
  };

  return (
    <div className='bg-white rounded-lg shadow-lg overflow-hidden border-yellow border-2 text-deep-blue'>
      <Slider {...settings}>
        {slidesData.map((data) => (
          <div key={data.id}>
            <img
              className='w-full h-48 object-contain'
              src={data.image}
              alt='app'
            />
          </div>
        ))}
      </Slider>
      <div className='p-4'>
        <h2 className='font-bold text-center'>{title}</h2>
        <p className='text-sm mt-2'>{text}</p>
        <div className='flex justify-between mt-4'>
          {github && (
            <a
              href={github}
              target='_blank'
              rel='noopener noreferrer'
              className='bg-gradient-rainbow border-2 border-deep-blue text-deep-blue rounded-md py-2 px-7 font-semibold hover:text-white transition duration-500'
            >
              GitHub
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target='_blank'
              rel='noopener noreferrer'
              className='bg-gradient-rainbow border-2 border-deep-blue text-deep-blue rounded-md py-2 px-7 font-semibold hover:text-white transition duration-500'
            >
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
