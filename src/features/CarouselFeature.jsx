import { SlidesData } from './SlidesData';
import useMediaQuery from '../hooks/useMediaQuery';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CarouselFeature = () => {
  const isAboveMedScreens = useMediaQuery('(min-width: 1060px)');

  return (
    <div className='md:justify-center md:max-w-full mt-20'>
      <Slider
        infinite={false}
        speed={500}
        slidesToShow={isAboveMedScreens ? 4 : 2}
        slidesToScroll={isAboveMedScreens ? 4 : 2}
      >
        {SlidesData.map((data) => (
          <div key={data.id} className='w-full flex justify-center'>
            <div className='rounded-xl p-2'>
              <img
                className='rounded-xl w-[80%]'
                src={data.image}
                alt={data.name}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselFeature;
