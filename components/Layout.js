import React from "react";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Title</title>
      </Head>
      <body>{children}</body>
    </div>
  );
}
