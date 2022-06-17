import React from "react";
import Head from "next/head";
import Header from "./Header";

export default function Layout({ children, basket, cartTotal, setCartTotal }) {
  return (
    <div>
      <Head>
        <title>SecTech </title>
      </Head>
      <Header
        cartTotal={cartTotal}
        setCartTotal={setCartTotal}
        basket={basket}
      />
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
