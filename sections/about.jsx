import Image from "next/image";
import React from "react";
import EBook from "../assets/img/ebook.png";
import EmailIcon from "../assets/img/email-icon.svg";
import CallIcon from "../assets/img/call-icon.svg";

const About = () => {
  return (
    <section className="bg-about">
      <div className="container-fluid">
        <div className="row position-relative">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="about-description">
                <h2 className="about-image-head">Where To Find Us!</h2>
                <p className="fw-bold">Global Retails</p>
                <p>
                  This book will be available to Amazon, Powell’s Books,
                  Books-A-Million, and Barnes & Noble, as well as Ingram, Baker
                  & Taylor, NACSCORP, Bookazine, Diamond Comic, BPDI, Christian
                  Book Distributors, and 50+ others.
                </p>
                <div className="d-flex flex-row bd-highlight mt-3 mb-1">
                  <Image src={EmailIcon} />
                  <p className="pt-2 ps-4">ukrainianangels@reachii.com</p>
                </div>
                <div className="d-flex text-align-center mt-3 mb-1">
                  <Image src={CallIcon} />
                  <p className="pt-3 ps-3">(888)922 6766 </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <Image src={EBook} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
