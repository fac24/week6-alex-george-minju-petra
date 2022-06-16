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
      <footer className="mt-20 bg-blue-200 container h-20 mx-auto p-5 flex flex-row justify-evenly text-gray-700 text-lg">
        <ul>
          <li>Category 1</li>
          <li>Category 2</li>
        </ul>
        <p>All rights reserved.</p>
      </footer>
    </div>
  );
}
