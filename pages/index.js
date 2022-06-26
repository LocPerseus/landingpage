import Banner from "../sections/Banner";
import Artists from "../sections/Artists";
import React from "react";
import Book from "../sections/book";

export default function Home() {
  return <React.Fragment>
    <Banner/>
    <Artists/>
    <Book/>
  </React.Fragment>
}
