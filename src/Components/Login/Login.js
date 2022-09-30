import React from "react";
import Nav from "../Navbar/Nav";
import "./login.css";

function Login() {
  return (
    <div>
      <Nav />
      <div className="login max-w-5xl rounded-2xl shadow-2xl">
        <h1 className="text-3xl mb-5 p-2 text-[#00df9a]">Login</h1>
        <form className="bg-slate-800 px-8 pt-6 pb-8 mb-4 rounded-2xl shadow-2xl">
          <div class="mb-4">
            <label
              className="text-gray-300 block text-lg font-bold mb-2"
              for="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="mb-6">
            <label
              className="text-gray-300 block text-lg font-bold mb-2"
              for="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              class=" bg-emerald-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign In
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
