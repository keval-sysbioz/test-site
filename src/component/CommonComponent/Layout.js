import React from "react";
import HeaderComponent from "./Header";
import FooterComponent from "./Footer";

export default function Layout(props) {
  return (
    <>
      <HeaderComponent />
      {props.children}
      <FooterComponent />
    </>
  );
}
