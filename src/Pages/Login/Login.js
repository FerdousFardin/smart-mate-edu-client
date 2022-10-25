import { GoogleAuthProvider, TwitterAuthProvider } from "firebase/auth";
import React, { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { AuthContext } from "../../Auth/AuthProvider";

export const Login = () => {
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [showPass, setShowPass] = useState(false);
  const { signInWithProvider, SignInUser } = useContext(AuthContext);
  const emailRef = useRef();
  const passwordRef = useRef();
  const twitterProvider = new TwitterAuthProvider();
  const googleProvider = new GoogleAuthProvider();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(emailRef);
    if (!/^\w+([.+-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      emailRef.current.focus();
      emailRef.current.style.borderBottom = "2px solid red";
      setError("Wrong Email Address!");
      return;
    } else if (password.length < 8) {
      passwordRef.current.focus();
      passwordRef.current.style.borderBottom = "2px solid red";
      setError("Invalid Password!");
      return;
    } else {
      passwordRef.current.style.borderBottom = "";
      emailRef.current.style.borderBottom = "";
      setError("");
    }
    SignInUser(email, password)
      .then((re) => {
        console.log("lgin successful");
        console.log(re.user);
        navigate(from, { replace: true });
      })
      .catch((er) => {
        console.error(er.code);
        setError(er.code);
      })
      .finally(() => setError(""));
  };
  const handleGoogle = () => {
    console.log("clicked");
    signInWithProvider(googleProvider)
      .then((res) => {
        console.log(res.user);
        navigate(from, { replace: true });
      })
      .catch((er) => {
        console.error(er.code);
        setError(er.code);
      });
  };
  const handleTwitter = () => {
    signInWithProvider(twitterProvider)
      .then((re) => {
        console.log(re.user);
        navigate(from, { replace: true });
      })
      .catch((er) => {
        setError(er.code);
        console.error(er);
      });
  };
  const handleShowPass = (e) => {
    e.preventDefault();
    passwordRef.current.focus();
    setShowPass(!showPass);
  };
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-slate-200">
      <div className="bg-white shadow-md rounded-3xl px-8 pt-6 pb-8 mb-4">
        <form onSubmit={handleSubmit}>
          <div className="mb-4  py-1">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Email
            </label>
            <input
              ref={emailRef}
              type="email"
              name="email"
              id="email"
              placeholder="email@example.com"
              className="w-96 rounded appearance-none bg-transparent border-2 focus:border-[#a3ce54]  focus:bg-slate-100 text-gray-700 mr-3 py-3 duration-200 px-2 leading-tight focus:outline-none"
            />
          </div>
          <div className="mb-6  py-1">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative text-gray-400 focus-within:text-gray-600 block w-fit">
              {/* Icon here */}
              <button
                onClick={handleShowPass}
                className="absolute top-1/2 transform -translate-y-1/2 right-6"
              >
                {showPass ? (
                  <AiFillEyeInvisible className="w-7 h-7" />
                ) : (
                  <AiFillEye className="w-7 h-7" />
                )}
              </button>
              <input
                ref={passwordRef}
                name="password"
                className="appearance-none bg-transparent focus:bg-slate-100 border-2 focus:border-[#a3ce54] text-gray-700 rounded mr-3 py-3 px-2 leading-tight focus:outline-none w-96"
                id="password"
                type={showPass ? "text" : "password"}
                placeholder={showPass ? "topsecret" : "*********"}
              />
            </div>
          </div>
          <p className="text-red-500 text-xs italic my-2">{error}</p>
          <p className="text-sky-500 text-right text-xs italic -mt-6 mb-2">
            New In Smart Mate?{" "}
            <Link to={"/signup"} className="link link-primary underline">
              Create a New Account
            </Link>
          </p>
          <div className="flex items-center justify-between">
            <button
              className="bg-[#a3ce54] rounded-full border border-[#a3ce54] hover:bg-base-100 hover:text-[#a3ce54] text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline duration-200"
              type="submit"
            >
              Sign In
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-[#a3ae54] hover:text-[#a38f54]"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
        </form>
        <div className="mt-16 grid space-y-4">
          <button
            onClick={handleGoogle}
            className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"
          >
            <div className="relative flex items-center space-x-4 justify-center">
              <img
                src="https://tailus.io/sources/blocks/social/preview/images/google.svg"
                className="absolute left-0 w-5"
                alt="google logo"
              />
              <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
                Continue with Google
              </span>
            </div>
          </button>
          <button
            className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"
          >
            <div className="relative flex items-center space-x-4 justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="absolute left-0 w-5 text-gray-700"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
              <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base ">
                Continue with Github
              </span>
            </div>
          </button>
          <button
            onClick={handleTwitter}
            className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"
          >
            <div className="relative flex items-center space-x-4 justify-center">
              <svg
                version="1.1"
                id="Logo"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                className="absolute left-0 w-5 text-gray-700"
                viewBox="0 0 248 204"
                style={{ enableBackground: "new 0 0 248 204" }}
                xmlSpace="preserve"
              >
                <g id="Logo_1_">
                  <path
                    id="white_background"
                    className="st0 fill-[#1D9BF0]"
                    d="M221.95,51.29c0.15,2.17,0.15,4.34,0.15,6.53c0,66.73-50.8,143.69-143.69,143.69v-0.04
		C50.97,201.51,24.1,193.65,1,178.83c3.99,0.48,8,0.72,12.02,0.73c22.74,0.02,44.83-7.61,62.72-21.66
		c-21.61-0.41-40.56-14.5-47.18-35.07c7.57,1.46,15.37,1.16,22.8-0.87C27.8,117.2,10.85,96.5,10.85,72.46c0-0.22,0-0.43,0-0.64
		c7.02,3.91,14.88,6.08,22.92,6.32C11.58,63.31,4.74,33.79,18.14,10.71c25.64,31.55,63.47,50.73,104.08,52.76
		c-4.07-17.54,1.49-35.92,14.61-48.25c20.34-19.12,52.33-18.14,71.45,2.19c11.31-2.23,22.15-6.38,32.07-12.26
		c-3.77,11.69-11.66,21.62-22.2,27.93c10.01-1.18,19.79-3.86,29-7.95C240.37,35.29,231.83,44.14,221.95,51.29z"
                  />
                </g>
              </svg>

              <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
                Continue with Twitter
              </span>
            </div>
          </button>
        </div>
      </div>

      <p className="text-center text-gray-500 text-xs">
        &copy;2022 Smart Mate. All rights reserved.
      </p>
    </div>
  );
};
