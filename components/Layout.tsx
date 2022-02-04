import { FC, ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

type layoutProps = {
  children: ReactNode
}

const Layout:FC<layoutProps> = ({ children }) => (
  <>
  <Head>
    <meta name="description" content="next.js course for beginers" />
    <meta name="keywords" content="next.js, react, javascript, node.js" />
  </Head>
    <Header />
    {children}
    <Footer />
  </>
);

export default Layout;