import React from "react";
import { useLoaderData } from "react-router-dom";

export const Checkout = () => {
  const {
    images: { small },
    title,
    price,
  } = useLoaderData();
  return (
    <>
      <div>
        <div className="py-16 px-4 md:px-6 2xl:px-0 flex justify-center items-center 2xl:mx-auto 2xl:container">
          <div className="flex flex-col justify-start items-start w-full space-y-9">
            <div className="flex flex-col xl:flex-row justify-center xl:justify-between space-y-6 xl:space-y-0 xl:space-x-6 w-full">
              <div className="xl:w-3/5 flex flex-col sm:flex-row xl:flex-col justify-center items-center bg-gray-100 dark:bg-gray-800 py-7 sm:py-0 xl:py-10 px-10">
                <div className="flex flex-col justify-start items-start w-full space-y-4">
                  <p className="text-xl md:text-2xl leading-normal text-gray-800 dark:text-gray-50">
                    {title}
                  </p>
                  <p className="text-base font-semibold leading-none text-gray-600 dark:text-white">
                    {price || "Free"}
                  </p>
                </div>
                <div className="mt-6 sm:mt-0 xl:my-10 xl:px-20 w-52 sm:w-96 xl:w-auto">
                  <img src={small} alt="headphones" />
                </div>
              </div>

              <div className="p-8 bg-gray-100 dark:bg-gray-800 flex flex-col lg:w-full xl:w-3/5">
                <div className="mt-8">
                  <label className="mt-8 text-base leading-4 text-gray-800 dark:text-gray-50">
                    Email
                  </label>
                  <input
                    className="border border-gray-300 p-4 rounded w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                    type="email"
                    name=""
                    id=""
                    placeholder="Email"
                  />
                </div>

                <label className="mt-8 text-base leading-4 text-gray-800 dark:text-gray-50">
                  Name
                </label>
                <div className="mt-2 flex-col">
                  <div>
                    <input
                      className="border rounded border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                      type="email"
                      name=""
                      id=""
                      placeholder="Name"
                    />
                  </div>
                  <label className="mt-8 text-base leading-4 text-gray-800 dark:text-gray-50">
                    Phone Number
                  </label>
                  <div className="mt-2 flex-col">
                    <div>
                      <input
                        className="border rounded border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                        type="text"
                        name=""
                        id=""
                        placeholder="+8801 7122 3456"
                      />
                    </div>
                  </div>
                </div>

                <button className="mt-8 border border-transparent hover:border-gray-300 dark:bg-white dark:hover:bg-[#a0ce4e] dark:text-[#a0ce4e] dark:hover:text-white dark:border-transparent bg-[#a0ce4e] hover:bg-white text-white hover:text-[#a0ce4e] flex justify-center items-center py-4 rounded w-full">
                  <div>
                    <p className="text-xl leading-4">Pay </p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
