import Banner from "../sections/Banner";
import Artists from "../sections/Artists";
import React from "react";
import Service from "../sections/service";
import Audio from "../sections/Audio";
import Profit from "../sections/profit";
import Benifit from "../sections/benifit.jsx";
import About from "../sections/about";

export default function Home() {
  return (
    <React.Fragment>
      <Banner />
      <Artists />
      <Service />
      <Audio />
      <Profit />
      <Benifit />
      <About />
    </React.Fragment>
  );
}
