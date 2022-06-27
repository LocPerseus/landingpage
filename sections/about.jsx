import React from "react";

const About = () => {
  return (
    <section bg-about>
      <div className="container-fluid">
        <div className="row position-relative">
          <div className="col-lg-5 order-lg-1 order-2">
            <div className="about-image-img-box">
              <div className="row">
                <div className="col-lg-12">
                  <h2 className="about-image-head text-white">
                    Giving Voice To The Voiceless
                  </h2>
                  <div className="description">
                    <p className="text-white">
                      Featuring line drawings. this book tells the unique
                      perspective and story of current day Ukraine. All of these
                      works were done in low lighting, cramped spaces, cold
                      climates, and environments that would not normally spark
                      creativity or even safety.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 padding-less img offset-lg-7 order-lg-2 order-1"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
