const ToDoCard = () => {
  const image = require('../assets/todo-app.png');
  const demoLink = 'https://mern-todo-3d9h.onrender.com';

  return (
    <div className='bg-white rounded-lg shadow-lg overflow-hidden border-yellow border-2'>
      <img src={image} alt='todo app' className='w-full h-48 object-fit' />
      <div className='p-2 text-center'>
        <span className='text-deep-blue text-md font-bold'>Todo MERN app</span>
        <p className='text-deep-blue text-sm mt-2'>
          Created using MongoDB, Express, React, Node, and Tailwindcss
        </p>

        <div className='mt-4 flex justify-end'>
          <a
            className='bg-gradient-rainbow border-2 border-deep-blue text-deep-blue rounded-md py-2 px-7 font-semibold hover:text-white transition duration-500'
            href={demoLink}
            target='_blank'
            rel='noreferrer'
          >
            <span className='tracking-wider'>Live Demo</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ToDoCard;
