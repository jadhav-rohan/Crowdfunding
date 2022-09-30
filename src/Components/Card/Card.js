import React from "react";
import Nav from "../Navbar/Nav";
// import { details } from "./details.js";

function Card(props) {
  return (
    <div>
      {/* <Nav /> */}
      {/* <h1>Card</h1> */}
      <div class="rounded-lg overflow-hidden shadow-lg bg-slate-800 mt-8 ml-20 w-72 h-96">
        <div class="px-4 py-4">
          <div class="font-bold text-gray-200 text-xl mb-2">{props.title}</div>
          <p class="text-gray-100 text-base h-56">{props.description}</p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {props.startDate}
          </span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {props.endDate}
          </span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            <span className="text-gray-700">Amount: </span>
            {props.amount}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
