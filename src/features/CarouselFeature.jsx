import { SlidesData } from './SlidesData';
import useMediaQuery from '../hooks/useMediaQuery';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CarouselFeature = () => {
  const isAboveMedScreens = useMediaQuery('(min-width: 1060px)');

  return (
    <div className='md:justify-center md:max-w-full mt-20'>
      {isAboveMedScreens ? (
        <Slider
          infinite={false}
          speed={500}
          slidesToShow={4}
          slidesToScroll={4}
        >
          {SlidesData.map((data) => (
            <div key={data.id}>
              <img
                className='rounded-xl md:w-[80%] ml-8'
                src={data.image}
                alt={data.name}
              />
            </div>
          ))}
        </Slider>
      ) : (
        <Slider
          infinite={false}
          speed={500}
          slidesToShow={2}
          slidesToScroll={2}
        >
          {SlidesData.map((data) => (
            <div key={data.id}>
              <img
                className='rounded-xl sm:w-[80%] xs:w-[80%] xs:p-4'
                src={data.image}
                alt={data.name}
              />
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default CarouselFeature;
