import Navbar from "./navbar";
import Footer from "./footer";
import { ComponentProps } from "react";

interface NavFootI {
  children: JSX.Element[] | JSX.Element;
  page: string;
}

export default function NavFoot({ children, page }: NavFootI): JSX.Element {
  if (page == "/login" || page == "/signup") {
    return <>{children}</>;
  }
  return (
    <>
      <Navbar page={page} />
      {children}
      <Footer />
    </>
  );
}
