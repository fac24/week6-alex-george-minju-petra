import React from "react";
import Head from "next/head";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>SecTech </title>
      </Head>
      <header className="container h-20 mx-auto p-5">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-14 w-14 text-purple-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
            </svg>
            <Link href="/">
              <h1 className="text-2xl m-auto ml-2 text-gray-600 font-semibold hover:cursor-pointer">
                {" "}
                SecTech{" "}
              </h1>
            </Link>
          </div>
          <div className="flex flex-row mt-2">
            <Link
              href="/"
              className="text-gray-600 hover:text-purple-400 text-xl p-4 inline-block"
            >
              <a className="text-gray-600 hover:text-purple-400 text-xl p-4 inline-block mr-5 font-medium">
                Home
              </a>
            </Link>
            <Link href="/basket">
              <div className="flex flex-row bg-purple-200 rounded-full p-4 hover:bg-purple-400 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 inline-block mr-2 text-gray-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
                <button className="text-gray-700 mr-2 ml-1 text-xl font-medium">
                  Basket
                </button>
              </div>
            </Link>
          </div>
        </div>
      </header>
      <main>{children}</main>
      <footer className="max-w-xl md:max-w-4xl border-t-2 border-solid border-purple-200 mt-20 p-20   container mx-auto flex flex-col justify-evenly items-center text-gray-700 md:text-md  gap-y-4 md:gap-x-6 ">
        <ul className="flex flex-col gap-y-4 md:flex-row md:gap-x-6">
          <li>Contact us</li>
          <li>F.A.Q</li>
          <li>Cookies policy</li>
          <li>Legal terms</li>
          <li>Privacy policy</li>
          <li>English 🇬🇧</li>
        </ul>
        <p>All rights reserved.</p>
        <p className="text-sm">Copyright © 2022 FAC24 Week6-Group3</p>
      </footer>
    </div>
  );
}
