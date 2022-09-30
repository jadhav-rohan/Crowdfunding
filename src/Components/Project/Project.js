import React from "react";
import Nav from "../Navbar/Nav";
import "./project.css";

function Project() {
  return (
    <div>
      <Nav />
      <div className="text-white flex justify-center pro">
        <div className="w-screen text-center justify-center flex">
          <form className="bg-slate-800 px-8 pt-6 pb-8 mb-4 proform w-6/12 mr-0 rounded-xl">
            <div className="float-left w-full">
              <h1 className="text-3xl mb-8 float-left font-bold text-[#00df9a]">
                Create a new Project
              </h1>
            </div>
            <div className="mb-4">
              <label className="text-gray-300 block text-lg font-bold mb-2">
                Title of Project<span> *</span>
              </label>
              <input
                className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none"
                placeholder="Zomato"
                required
              />
            </div>
            <div className="mb-4">
              <label className="text-gray-300 block text-lg font-bold mb-2">
                Description<span> *</span>
              </label>
              <input
                className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none leading-10"
                type="text"
                placeholder="Brief description about project"
                required
              />
            </div>
            <div className="mb-4">
              <label className="text-gray-300 block text-lg font-bold mb-2">
                Start Date<span> *</span>
              </label>
              <input
                className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none"
                type="date"
                required
              />
            </div>
            <div className="mb-4">
              <label className="text-gray-300 block text-lg font-bold mb-2">
                End Date<span> *</span>
              </label>
              <input
                className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none"
                type="date"
                required
              />
            </div>
            <div className="mb-4">
              <label className="text-gray-300 block text-lg font-bold mb-2">
                Amount to be Raised(ETH)<span> *</span>
              </label>
              <input
                className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none"
                type="number"
                required
              />
            </div>
            <div className=" flex flex-Start mt-8">
              <button className="bg-green-400 p-4 px-7 rounded-sm text-black text-bold hover:bg-blue-400">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Project;
