import React from "react";
import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import Header from "./Header";

export default function Layout({ children }) {
  const [cartTotal, setCartTotal] = useState(0);
  return (
    <div>
      <Head>
        <title>SecTech </title>
      </Head>
      <Header cartTotal={cartTotal} setCartTotal={setCartTotal} />
      <main>{children}</main>
      <footer className="mt-10  bg-blue-200 container h-40 mx-auto p-5 flex flex-row justify-evenly text-gray-700 text-lg">
        <ul>
          <li>SetTech</li>
          <li>Founders</li>
          <li>Community</li>
          <li>Customer Service</li>
        </ul>
        <div>
          <span>K</span>
          <ul>
            <li></li>
            <li>s</li>
            <li>ty</li>
            <li>r Service</li>
          </ul>
        </div>
        <p>All rights reserved.</p>
      </footer>
    </div>
  );
}
