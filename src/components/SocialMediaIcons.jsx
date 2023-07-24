import * as TbBrand from 'react-icons/tb';

const SocialMediaIcons = () => {
  return (
    <div className='flex justify-center md:justify-start my-10 gap-7'>
      <a
        className='hover:opacity-50 transition duration-500'
        href='http://www.linkedin.com/in/kong-judy'
        target='_blank'
        rel='noreferrer'
      >
        <TbBrand.TbBrandLinkedin size={30} />
      </a>
      <a
        className='hover:opacity-50 transition duration-500'
        href='http://www.github.com/KongJudy'
        target='_blank'
        rel='noreferrer'
      >
        <TbBrand.TbBrandGithub size={24} className='mt-1' />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
