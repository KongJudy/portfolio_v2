import AnchorLink from 'react-anchor-link-smooth-scroll';

const BlogCard = () => {
  const image = require('../assets/blog-images/blog_ss01.png');
  const githubLink = 'https://github.com/KongJudy/react-connect-website';

  return (
    <div className='bg-white rounded-lg shadow-lg overflow-hidden border-yellow border-2'>
      <img src={image} alt='blog site' className='w-full h-52 object-fit' />
      <div className='p-2'>
        <h2 className='text-xl font-bold'>Blog Website</h2>
        <p className='text-deep-blue text-sm'>
          Created using HTML, CSS, REACT, BOOTSTRAP
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

export default BlogCard;
