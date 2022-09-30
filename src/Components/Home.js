import React from "react";
import Nav from "./Navbar/Nav";
import logo from "./logo.png";
function Home() {
  return (
    <div>
      <Nav />
      <h1 className=" text-7xl hover:italic mt-28">
        Crowdfunding using BlockChain
      </h1>
      <div className="flex justify-center mt-24 opacity-70 rounded-md">
        <img className=" shadow-2xl h-40" src={logo} />
      </div>
    </div>
  );
}

export default Home;
