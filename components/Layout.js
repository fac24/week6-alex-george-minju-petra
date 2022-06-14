import React from "react";
import Head from "next/head";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>SecTech </title>
      </Head>
      <header>
        <h1>SecTech 💡</h1>
        <Link href="/">
          <a>Basket</a>
        </Link>
      </header>
      <main>{children}</main>
      <footer>
        <ul>
          <li>Category 1</li>
          <li>Category 2</li>
        </ul>
        <p>All rights reserved.</p>
      </footer>
    </div>
  );
}
