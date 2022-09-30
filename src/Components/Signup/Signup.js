// import React from 'react'
// import Nav from '../Navbar/Nav'

// function Signup() {
//   return (
//     <div>
//         <Nav/>
//     </div>
//   )

// export default Signup

import React from "react";
import Nav from "../Navbar/Nav";

function Signup() {
  return (
    <div>
      <Nav />

      <div class="min-h-screen flex flex-col">
        <div class="container w-screen mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div class="bg-slate-800 px-6 py-8 rounded-2xl shadow-xl text-black w-6/12">
            <h1 class="text-3xl mb-4 p-1 text-[#00df9a]">Sign up</h1>
            <input
              type="text"
              class="w-full p-3 rounded mb-4"
              name="fullname"
              placeholder="Full Name"
            />

            <input
              type="text"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
            />

            <input
              type="password"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
            />
            <input
              type="password"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="confirm_password"
              placeholder="Confirm Password"
            />

            <button
              type="submit"
              class="w-full text-center py-3 rounded bg-emerald-400 text-black hover:bg-blue-400 focus:outline-none my-1"
            >
              Create Account
            </button>
          </div>

          <div class="text-grey-dark mt-6">
            Already have an account?
            <a
              class="no-underline border-b border-blue text-blue"
              href="./login"
            >
              Log in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
