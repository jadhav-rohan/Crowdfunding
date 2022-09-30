import React from "react";
import "./nav.css";
//bg-slate-800
export default function Nav() {
  return (
    <div className="flex justify-between p-2 flex-wrap bg-slate-800 text-gray-200 text-lg">
      <div className="ml-8 mt-2">
        <a
          href="./"
          className=" mr-16 text-3xl font-bold text-[#00df9a] py-1 pt-1"
        >
          FundChain
        </a>
        <a
          href="./working"
          className="mr-4 hover:bg-gray-700 hover:text-white rounded-md px-3 pt-1"
        >
          How it Woks?
        </a>
        <a
          href="./aboutus"
          className="mr-6 hover:bg-gray-700 hover:text-white rounded-md px-3 py-1 pt-1"
        >
          About Blockchain
        </a>
        <a
          href="./pastcamp"
          className="mr-6 text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-1 pt-1 rounded-md"
        >
          Past Campaigns
        </a>
        <a
          href="./addproject"
          className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-1 pt-1 rounded-md"
        >
          Add Project
        </a>
      </div>
      <div className="flex mt-2 mr-1">
        <a
          href="./login"
          className="mr-3 px-2 pt-1 hover:bg-gray-700 hover:text-white rounded-md "
        >
          Login
        </a>
        <a
          href="./signup"
          className="mx-5 px-2 pt-1 hover:bg-gray-700 hover:text-white rounded-md"
        >
          SignUp
        </a>
      </div>
    </div>
  );
}
