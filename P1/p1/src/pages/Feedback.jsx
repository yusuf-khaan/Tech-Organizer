import React, { useState } from 'react';

function Feedback() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');

  const validate = async (e) => {
    try {
      const response = await fetch("https://localhost:8081/pOne/feed", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          feedback: feedback,
        }),
      });

      const data = await response.text();
      // console.log(data);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="relative bg-black min-h-screen w-full p-5">
      {/* Title Section */}
      <div className="flex flex-wrap font-semibold text-white w-full md:w-3/4 lg:w-1/2 mx-auto mt-10 text-center text-2xl md:text-4xl justify-center">
        <h1>
          Your Feedback is most{" "}
          <span className="text-blue-600">appreciated, </span>
          to cook something Extravagant
        </h1>
      </div>

      {/* Form Section */}
      <div className="w-full md:w-3/4 lg:w-1/2 mx-auto mt-10 p-5 shadow-lg bg-slate-700/20 rounded-md">
        {/* Name Input */}
        <div className="flex flex-col md:flex-row md:items-center p-4">
          <h1 className="text-white font-semibold text-lg md:w-1/3">Name</h1>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            className="text-white w-full bg-slate-700/20 p-2 mt-2 md:mt-0 md:ml-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        {/* Email Input */}
        <div className="flex flex-col md:flex-row md:items-center p-4">
          <h1 className="text-white font-semibold text-lg md:w-1/3">Email</h1>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            className="text-white w-full bg-slate-700/20 p-2 mt-2 md:mt-0 md:ml-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        {/* Feedback Message Input */}
        <div className="flex flex-col md:flex-row md:items-center p-4">
          <h1 className="text-white font-semibold text-lg md:w-1/3">Message</h1>
          <textarea
            onChange={(e) => setFeedback(e.target.value)}
            className="text-white w-full bg-slate-700/20 p-2 mt-2 md:mt-0 md:ml-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            rows="4"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mt-5">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md w-full md:w-[50vw] py-2"
            onClick={validate}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
