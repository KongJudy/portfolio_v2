import { useState, useRef } from 'react';
import LineGradient from '../components/LineGradient';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [send, setSend] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_jkong',
        'template_hnqs90l',
        formRef.current,
        '3vrRA5Q2zD4ADJAsd'
      )
      .then(
        (result) => {
          console.log(result.text);
          setSend(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id='contact' className='pt-48 pb-48'>
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
          CONTACT <span className='text-purple'>Me</span>
        </p>
        <div className='mt-5'>
          <LineGradient width='w-[164px]' />
        </div>
      </motion.div>

      {/* CONTACT FORM */}

      <div className='flex justify-center mt-32 text-deep-blue font-semibold'>
        <form ref={formRef} onSubmit={handleSubmit}>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 }
            }}
          >
            <input
              className='rounded w-[700px] mb-2 p-2 border-yellow border-2'
              type='text'
              placeholder='Name'
              name='user_name'
            />
          </motion.div>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 100 },
              visible: { opacity: 1, x: 0 }
            }}
          >
            <input
              className='rounded w-full mb-2 p-2 border-yellow border-2'
              type='text'
              placeholder='Subject'
              name='user_subject'
            />
          </motion.div>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 }
            }}
          >
            <input
              className='rounded w-full mb-2 p-2 border-yellow border-2'
              type='text'
              placeholder='Email'
              name='user_email'
            />
          </motion.div>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 100 },
              visible: { opacity: 1, x: 0 }
            }}
          >
            <textarea
              className='rounded w-full p-2 border-yellow border-2'
              rows='5'
              placeholder='Message'
              name='message'
            />
          </motion.div>
          <div className='flex justify-end mt-2'>
            <button className='bg-gradient-rainbow text-deep-blue rounded-md py-3 px-7 font-semibold hover:text-white transition duration-500 tracking-wider'>
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
