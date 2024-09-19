import React, { useState, useEffect }  from 'react';
import { motion } from 'framer-motion';


function Questioncard({ items, zero }) {
  const [selectedAnswers, setSelectedAnswers] = useState({}); // Track selected answers
  const [marks, setMarks] = useState(zero); // Track total marks

  // Handle checkbox change
  const handleCheckboxChange = (questionIndex, selectedOption) => {
    setSelectedAnswers(prevAnswers => ({
      ...prevAnswers,
      [questionIndex]: selectedOption, // Record selected option for each question
    }));
  };

  useEffect(() => {
    setMarks(zero); // Reset marks when the zero prop changes
  }, [zero]);
  

  // Check answers and calculate marks
  const handleSubmit = () => {
    let totalMarks = 0;
    items.forEach((item, index) => {
      if (selectedAnswers[index] === item.correctAnswer) {
        totalMarks++; // Increment marks if the selected answer is correct
      }
    });
    setMarks(totalMarks); // Update marks state
  };

  // Animation variants
  const bounceVariant = {
    hover: {
      scale: 1.03,
      rotate: [0, 1, -1, 0],
      transition: {
        duration: 0.21,
        type: 'spring',
        stiffness: 150
      }
    }
  };

  return (
    <>
      {/* Conditional rendering for questions */}
      {items.length > 0 ? (
        items.map((item, index) => (
          <motion.div
            key={index}
            className='py-10 relative mt-5 rounded-[100px] border border-gray-600 shadow-lg bg-gradient-to-r from-gray-700 via-gray-800 to-black w-[80vw]'
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
              {/* Option A */}
              <label>
                <div className='flex py-5 hover:bg-gray-700 rounded-lg'>
                  <input 
                    type="checkbox" 
                    className="mr-4" 
                    checked={selectedAnswers[index] === item.optiona}
                    onChange={() => handleCheckboxChange(index, item.optiona)} 
                  />
                  <h1 className='text-lg'>{item.optiona}</h1>
                </div>
              </label>
              {/* Option B */}
              <label>
                <div className='flex py-5 hover:bg-gray-700 rounded-lg'>
                  <input 
                    type="checkbox" 
                    className="mr-4" 
                    checked={selectedAnswers[index] === item.optionb}
                    onChange={() => handleCheckboxChange(index, item.optionb)} 
                  />
                  <h1 className='text-lg'>{item.optionb}</h1>
                </div>
              </label>
              {/* Option C */}
              <label>
                <div className='flex py-5 hover:bg-gray-700 rounded-lg'>
                  <input 
                    type="checkbox" 
                    className="mr-4" 
                    checked={selectedAnswers[index] === item.optionc}
                    onChange={() => handleCheckboxChange(index, item.optionc)} 
                  />
                  <h1 className='text-lg'>{item.optionc}</h1>
                </div>
              </label>
              {/* Option D */}
              <label>
                <div className='flex py-5 hover:bg-gray-700 rounded-lg'>
                  <input 
                    type="checkbox" 
                    className="mr-4" 
                    checked={selectedAnswers[index] === item.optiond}
                    onChange={() => handleCheckboxChange(index, item.optiond)} 
                  />
                  <h1 className='text-lg'>{item.optiond}</h1>
                </div>
              </label>
            </div>
          </motion.div>
        ))
      ) : (
        <h1 className='text-white text-center font-semibold'>Enter parameters</h1>
      )}
      
      {/* Submit button and marks display */}
      <div className='py-10 flex flex-col ml-[145px] items-center mt-10'>
        <button onClick={handleSubmit} className="px-[200px] py-2 bg-green-500 text-white rounded-[300px]">
          Submit
        </button>
        <h1 className="text-white font-bold mt-2">Marks: {marks}</h1> {/* Display marks */}
      </div>
    </>
  );
}

export default Questioncard;
