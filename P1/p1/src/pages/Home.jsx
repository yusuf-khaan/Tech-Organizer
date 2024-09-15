import React, { useState } from 'react'
import Questioncard from '../components/Questioncard'
import '../index.css'

function Home() {

  const [Category, setCategory] = useState('Programming');
  const [noOfQuestions, setnoOfQuestions] = useState(10);
  const [questions, setquestions] = useState([]);



  const imageList = [
    'IIT_Bhilai_logo.png',
    'IIT_Gandhinagar_Logo.svg.png',
    'IIT_Guwahati_Logo.svg.png',
    'IIT_Kanpur_Logo.svg.png',
    'IIT_Kharagpur_Logo.svg.png',
    'IIT_Madras_Logo.svg.png',
    'Indian_Institute_of_Technology_Bombay_Logo.svg.png',
    'Indian_Institute_of_Technology_Ropar_logo.png',
    'Indian_Institute_of_Technology_Tirupati_logo.jpg',
    'Indian_Institute_of_Technology,_Patna.svg.png',
    'Official_Logo_of_IIT(BHU),Varanasi,India,2013.png',
    'IIT_Bhilai_logo.png',
    'IIT_Gandhinagar_Logo.svg.png',
    'IIT_Guwahati_Logo.svg.png',
    'IIT_Kanpur_Logo.svg.png',
    'IIT_Kharagpur_Logo.svg.png',
    'IIT_Madras_Logo.svg.png',
    'Indian_Institute_of_Technology_Bombay_Logo.svg.png',
    'Indian_Institute_of_Technology_Ropar_logo.png',
    'Indian_Institute_of_Technology_Tirupati_logo.jpg',
    'Indian_Institute_of_Technology,_Patna.svg.png',
    'Official_Logo_of_IIT(BHU),Varanasi,India,2013.png'
  ];

  // Duplicate the image list for continuous scrolling
  const duplicatedImageList = [...imageList, ...imageList];



  const validateInfo = async () => {
    // Validation to check if number is within the correct range
    if (noOfQuestions > 20 || noOfQuestions < 1) {
      alert("Please enter a number between 1 and 20");
    } else {
      try {
        const response = await fetch(`https://localhost:8081/pOne/generate?category=${Category}&numbers=${noOfQuestions}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        setquestions(data);
        console.log(data);
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  return (
    <div className='fixed overflow-y-scroll bg-black h-full w-full'>

<div className="flex flex-wrap w-[50vw] px-5 mt-[100px]">
        <Questioncard items = {questions}/>
      </div>
      


      <div className='fixed flex w-[40vw] ml-20 top-0 left-[50vw]'>

        <div className='absolute bg-black shadow-md shadow-white h-[30vh] -translate-x-1/2 ml-[150px] mt-[120px] overflow-hidden w-[20vw] rounded-full'>
          <div className='text-white justify-center flex flex-col items-center mt-2 overflow-hidden'>
            <h1 className='py-1'>Number Of Questions</h1>
            <input type='number' min='0' max='20' className='mt-2 w-[12vw] bg-black text-white ml-2 border-8 border-black' placeholder='...Number' onChange={(e) => { setnoOfQuestions(e.target.value); console.log(noOfQuestions); }} />

            <h1 className='py-1'>Category</h1>
            <input type='Text' className='mt-2 w-[12vw] bg-black text-white ml-2 border-8 border-black' placeholder='...Category' onChange={(e) => { setCategory(e.target.value); console.log(Category); }} />

            <button className='bg-white text-black h-[50px] mt-6 text-black w-full' onClick={(e) => { validateInfo() }}>
              <h1>Button</h1>
            </button>


          </div>
        </div>


        <div className='flex flex-col  mt-[25vh] w-[50vw] items-center justify-center'>
          <h1 className='text-white tracking-[.25em] italic font-bold translate-y-1/2 text-[30px] font-semibold'>Shoot For the Stars,</h1>
          <h1 className='text-white tracking-[.25em] italic translate-y-1/2 text-[30px] font-bold'>Aim For The Moon.</h1>
        </div>

        <div className="scroll-container bg-black w-full">
          <div className="scroll-content">
            {duplicatedImageList.map((image, index) => (
              <img
                key={index}
                src={`/${image}`}
                alt={`Logo ${index + 1}`}
                className="h-[100px] py-5 w-auto object-contain"
              />
            ))}
          </div>
        </div>
      </div>



    </div>
  )
}

export default Home
