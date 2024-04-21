import React from "react";
import {} from "@heroicons/react";
export default function Home() {
  return (
    <div className="h-auto w-full flex flex-col">
      {/* Hero Section */}
      <div className="flex w-full h-auto bg-gray-400 bg-cover bg-center bg-[url('/Images/Hero.jpg')] md:flex-row ">
        <div className="flex flex-col w-full h-auto py-32 px-4 backdrop-blur-sm gap-16 md:py-16 md:px-32">
          <div className="flex text-3xl font-extrabold text-white mx-auto text-center drop-shadow-lg md:text-left md:text-6xl ">
            Welcome to Bharat Consulting Group, your trusted partner in business
            success.
          </div>
          <div className="flex text-xl font-bold text-white text-left mx-auto drop-shadow-lg">
            At Bharat Consulting Group, we specialize in providing comprehensive
            consulting services tailored to meet your business needs.
          </div>
          <div className="flex justify-center md:justify-start font-bold text-gray-100">
            <button className="bg-[#e0aa3e] px-8 py-4 rounded-sm">
              BOOK A CONSLUTATION
            </button>
          </div>
        </div>
        <div className="hidden md:flex h-96 w-96"></div>
      </div>

      {/* Our Services */}
      <div className="w-full h-auto flex bg-black text-white">
        <div className="w-full h-auto flex flex-col py-8 sm:mx-32">
          <div className="flex justify-center text-3xl sm:text-5xl font-bold py-8">
            <div>Our Services</div>
          </div>
          <div className="flex flex-col sm:flex-row w-full h-auto text-gray-700 gap-8 p-2 ">
            <div className=" flex flex-col box-border m-4 p-4 bg-gray-50 justify-center gap-8 rounded-md shadow-inner aspect-square">
              <div className="text-2xl text-center font-semibold">
                Consulting
              </div>
              <img
                src="/Images/consultation.png"
                className="h-32 w-32"
                alt="Consulting"
              />
              <p className="font-semibold text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur numquam et neque culpa vero! Quia aspernatur quam nisi
                sapiente. Ratione?
              </p>
              <button className="bg-[#e0aa3e] px-4 py-2 rounded-sm font-semibold text-white">
                Consulting
              </button>
            </div>
            <div className=" flex flex-col box-border m-4 p-4 bg-gray-50 justify-center gap-8 rounded-md shadow-inner aspect-square">
              <div className="text-2xl text-center font-semibold">Finance</div>
              <img
                src="/Images/earning.png"
                className="h-32 w-32"
                alt="Finance"
              />
              <p className="font-semibold text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur numquam et neque culpa vero! Quia aspernatur quam nisi
                sapiente. Ratione?
              </p>
              <button className="bg-[#e0aa3e] px-4 py-2 rounded-sm font-semibold text-white">
                Finance
              </button>
            </div>
            <div className=" flex flex-col box-border m-4 p-4 bg-gray-50 justify-center gap-8 rounded-md shadow-inner aspect-square">
              <div className="text-2xl text-center font-semibold">Training</div>
              <img
                src="/Images/analysis.png"
                className="h-32 w-32"
                alt="Training"
              />
              <p className="font-semibold text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur numquam et neque culpa vero! Quia aspernatur quam nisi
                sapiente. Ratione?
              </p>
              <button className="bg-[#e0aa3e] px-4 py-2 rounded-sm font-semibold text-white">
                Training
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="w-full h-auto flex bg-black text-white">
        <div className="w-full h-auto flex flex-col py-8 sm:mx-32">
          
        </div>
      </div>
    </div>
  );
}
