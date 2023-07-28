const BlogCard = () => {
  const image = require('../assets/blog-images/blog_ss01.png');
  const githubLink = 'https://github.com/KongJudy/react-connect-website';

  return (
    <div className='bg-white rounded-lg shadow-lg overflow-hidden border-yellow border-2'>
      <img src={image} alt='blog site' className='w-full h-52 object-fit' />
      <div className='p-2 text-center'>
        <span className='text-deep-blue text-md font-bold'>Blog Website</span>
        <p className='text-deep-blue text-sm mt-2'>
          Created using HTML, CSS, REACT, BOOTSTRAP
        </p>
        <div className='mt-4 flex justify-end'>
          <a
            className='bg-gradient-rainbow border-2 border-deep-blue text-deep-blue rounded-md py-2 px-7 font-semibold hover:text-white transition duration-500'
            href={githubLink}
            target='_blank'
            rel='noreferrer'
          >
            <span className='tracking-wider'>Github</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
