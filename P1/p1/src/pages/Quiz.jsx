import React from "react";
import TradingViewWidget from "../components/TradingViewWidget"
import { useNavigate } from "react-router-dom";

function Quiz() {

    const list = [
        {
            company_name: "Google India",
            salary: "30,00,000",
            career_website: "https://careers.google.com/"
        },
        {
            company_name: "Microsoft India",
            salary: "25,00,000",
            career_website: "https://careers.microsoft.com/"
        },
        {
            company_name: "Amazon India", 
            salary: "20,00,000",
            career_website: "https://www.amazon.jobs/en/"
        },
        {
            company_name: "Facebook (Meta) India",
            salary: "30,00,000",
            career_website: "https://www.metacareers.com/"
        },
        {
            company_name: "Salesforce",
            salary: "22,00,000",
            career_website: "https://www.salesforce.com/company/careers/"
        },
        {
            company_name: "Adobe Systems India",
            salary: "20,00,000",
            career_website: "https://adobe.wd5.myworkdayjobs.com/en-US/external_experienced"
        },
        {
            company_name: "Apple India",
            salary: "25,00,000",
            career_website: "https://www.apple.com/careers/in/"
        },
        {
            company_name: "Intel India",
            salary: "20,00,000",
            career_website: "https://jobs.intel.com/"
        },
        {
            company_name: "Qualcomm",
            salary: "18,00,000",
            career_website: "https://www.qualcomm.com/company/careers"
        },
        {
            company_name: "Deloitte",
            salary: "15,00,000",
            career_website: "https://www2.deloitte.com/global/en/careers.html"
        }
    ];

    const navigate = useNavigate();
    


    const text = "Question of the day!";
    const QOTD = "Given an unsorted array of integers, sort the array into a wave array. An array arr[0..n-1] is sorted in wave form if: arr[0] >= arr[1] <= arr[2] >= arr[3] <= arr[4] >= . . .";
    return (
        <div className="bg-black h-screen w-screen relative container">
            <h1 className="text-white flex justify-center text-[50px] tracking-[.40em] pt-[5px]">Puzzler</h1>

            <div className="w-[90vw] h-[85vh] bg-slate-900/25 rounded-[50px] overflow-hidden flex flex-col ml-[5vw] container">

                <div className="flex  flex-col justify-center items-center">
                    <div className="w-[85vw] flex flex-col items-center h-[100px] hover:bg-transparent hover:scale-110 transition-all duration-500 mt-5 bg-[#F7F7F7]/20 rounded-[50px] text-white py-2">
                        <pre>{text}</pre>
                        <p className="p-5 mt-2"> {QOTD}</p>
                    </div>
                </div>

                <div className="m-5 h-full flex-wrap flex">
                    <TradingViewWidget />
                    <div className="ml-10 hover:scale-105 transition-all duration-500 hover:bg-transparent rounded-[20px] bg-[#F7F7F7]/20 p-8 w-[25vw]">
                        {list.map((items, index) => {
                            return(
                                <div className="hover:scale-105 font-semibold text-white bg-transparent flex p-2 justify-between items-center">
                                    <h1>{items.company_name}</h1>
                                    <h1>{"| INR "}{items.salary}</h1>
                                </div>
                            )
                        })}
                    </div>
                </div>



            </div>


        </div>
    );
};

export default Quiz;