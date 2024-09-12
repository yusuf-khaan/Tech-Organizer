import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Questioncard() {
  const [answer, setanswer] = useState('');

  const list = [
    {
      question: "Who is the Prime Minister Of India?",
      optiona: "Dr Manmohan Singh",
      optionb: "Dr B.R. Ambedkar",
      optionc: "Dr B.R. Ambedkar",
      optiond: "Dr B.R. Ambedkar",
    },
    // Add more questions as needed
  ];

  // Animation variants
  const bounceVariant = {
    hover: {
      scale: 1.03, // Scale up on hover
      rotate: [0, 1, -1, 0], // Add rotation effect on hover
      transition: {
        duration: 0.1,
        type: 'spring',
        stiffness: 150
      }
    }
  };

  return (
    <>
      {list.map((item, index) => (
        <motion.div
          key={index}
          className='relative mt-5 rounded-[100px] border border-gray-600 shadow-lg bg-gradient-to-r from-gray-700 via-gray-800 to-black w-[80vw]'
          initial="initial"
          animate="animate"
          whileTap="bounce"
          whileHover="hover"
          variants={bounceVariant}
        >
          <div className="w-full text-white text-lg flex flex-grow px-10 py-6 justify-center items-center">
            {item.question}
          </div>
          <div className='px-10 py-6 items-center flex-col text-white space-y-4'>
            <label>
              <div className='flex py-5 hover:bg-gray-700 rounded-lg'>
                <input type="checkbox" className="mr-4" />
                <h1 className='text-lg'>{item.optiona}</h1>
              </div>
            </label>
            <label>
              <div className='flex py-5 hover:bg-gray-700 rounded-lg'>
                <input type="checkbox" className="mr-4" />
                <h1 className='text-lg'>{item.optionb}</h1>
              </div>
            </label>
            <label>
              <div className='flex py-5 hover:bg-gray-700 rounded-lg'>
                <input type="checkbox" className="mr-4" />
                <h1 className='text-lg'>{item.optionc}</h1>
              </div>
            </label>
            <label>
              <div className='flex py-5 hover:bg-gray-700 rounded-lg'>
                <input type="checkbox" className="mr-4" />
                <h1 className='text-lg'>{item.optiond}</h1>
              </div>
            </label>
          </div>
        </motion.div>
      ))}
    </>
  );
}

export default Questioncard;