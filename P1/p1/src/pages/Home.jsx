import React from 'react'
import Questioncard from '../components/Questioncard'
import '../index.css'

function Home() {

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

  return (
    <div className='fixed overflow-y-scroll bg-black h-full w-full'>
      <div className="flex w-[50vw] px-5 mt-[100px]">
        <Questioncard />
      </div>

      <div className='absolute flex h-full w-[40vw] ml-20 top-0 left-[50vw]'>
        <div className='flex h-full flex-col -mt-10 w-[50vw] items-center justify-center'>
          <h1 className='text-white tracking-[.25em] text-[30px] font-bold'>Shoot For the Stars,</h1>
          <h1 className='text-white tracking-[.25em] text-[30px] font-bold'>Aim For The Moon.</h1>
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
  