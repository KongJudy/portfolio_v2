import AnchorLink from 'react-anchor-link-smooth-scroll';

const AppCard = () => {
  const image = require('../assets/04.png');
  const image2 = require('../assets/06.png');
  const image3 = require('../assets/05.png');

  const githubLink = 'https://github.com/KongJudy/RN_CONNECTAPP';

  return (
    <div className='bg-white rounded-lg shadow-lg overflow-hidden border-yellow border-2'>
      <div className='flex justify-center pb-2'>
        <img
          src={image}
          alt='blog site'
          className='w-full h-44 object-contain'
        />
        <img
          src={image2}
          alt='blog site'
          className='w-full h-44 object-contain'
        />
        <img
          src={image3}
          alt='blog site'
          className='w-full h-44 object-contain'
        />
      </div>

      <div className='p-4'>
        <h2 className='text-xl font-bold mb-2'>Mobile App</h2>
        <p className='text-deep-blue text-sm'>
          Created using HTML, CSS, REACT NATIVE ...ETC.
        </p>
        <div className='mt-4 flex justify-end'>
          <AnchorLink
            className='bg-gradient-rainbow border-2 border-deep-blue text-deep-blue rounded-md py-2 px-7 font-semibold hover:text-white transition duration-500'
            href={githubLink}
          >
            <span className='tracking-wider'>Github</span>
          </AnchorLink>
        </div>
      </div>
    </div>
  );
};

export default AppCard;
