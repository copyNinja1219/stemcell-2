/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import domtoimage from "dom-to-image";

const BankSidebar = () => {
  //

  const print = async () => {
    console.log("printing !");
    domtoimage
      .toJpeg(document.getElementById("my-node"), { quality: 0.95 })
      .then(function (dataUrl) {
        var link = document.createElement("a");
        link.download = "my-image-name.jpeg";
        link.href = dataUrl;
        link.click();
      });
  };

  return (
    <div className="sticky top-40  ">
      <aside className="w-64 flex flex-col  " aria-label="Sidebar">
        <div className="flex items-center justify-center">
          <img
            src="/bank.jpg"
            className="shadow-2xl rounded-full w-[15vw] "
            alt=""
          />
        </div>
        <div className="  overflow-y-auto py-4 mt-8 px-3 bg-pink-300 rounded dark:bg-gray-800  shadow-xl ">
          <ul className="space-y-2">
            <li className="cursor-pointer">
              <p className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-pink-200 ">
                <svg
                  aria-hidden="true"
                  className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                </svg>

                <Link
                  to="/stemcells/"
                  className="font-bold flex-1 ml-3 whitespace-nowrap"
                >
                  StemCells
                </Link>
              </p>
            </li>
            <li className="cursor-pointer">
              <p className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-pink-200 ">
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                </svg>
                <Link
                  to="/donors/"
                  className="font-bold flex-1 ml-3 whitespace-nowrap"
                >
                  Donors
                </Link>
              </p>
            </li>
            <li className="cursor-pointer">
              <p className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-pink-200 ">
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
                  <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
                </svg>
                <Link
                  to="/patients/"
                  className="font-bold flex-1 ml-3 whitespace-nowrap"
                >
                  Patients
                </Link>
              </p>
            </li>
            <li className="cursor-pointer">
              <p className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-pink-200 ">
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  ></path>
                </svg>

                <Link
                  to="/Bank/dashboard/"
                  className="font-bold flex-1 ml-3 whitespace-nowrap"
                >
                  Data Analytics
                </Link>
              </p>
            </li>
            <li className="cursor-pointer">
              <p className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-pink-200 ">
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <Link
                  to="/plans/"
                  className="font-bold flex-1 ml-3 whitespace-nowrap"
                >
                  Plans
                </Link>
              </p>
            </li>
            <li className="cursor-pointer">
              <p className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-pink-200 ">
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span
                  to="/plans/"
                  className="font-bold flex-1 ml-3 whitespace-nowrap flex  "
                  onClick={() => print()}
                >
                  print data analytics
                </span>
              </p>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default BankSidebar;
