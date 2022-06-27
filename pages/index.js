import Banner from "../sections/Banner";
import Artists from "../sections/Artists";
import React from "react";
import Service from "../sections/service";
import Audio from "../sections/Audio";

export default function Home() {
  return <React.Fragment>
    <Banner/>
    <Artists/>
    <Service/>
    <Audio />
  </React.Fragment>
}
