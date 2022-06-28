import React from "react";

const Banner = () => {
  return (
    <>
      <section className="banner d-flex align-items-center"></section>
      <section className="bg-banner">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-7 d-flex flex-column justify-content-center order-2 order-lg-1"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="bg-content">
                <h2 style={{ color: "#8e8b5c" }}>Ukrainian Angels</h2>
                <h6 className="banner-title">
                  A Charity children’s book benefiting the people and community
                  of Ukraine as they heal and glow.
                </h6>
                <div className="d-flex justify-content-center justify-content-lg-start">
                  <p className="banner-text">
                    ALL PROFITS DIRECTLY BENEFIT THE CITIZENS OF UKRAINE
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div
              className="col-lg-2 d-flex flex-column pt-3"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <a
                className="btn btn-secondary btn-preview"
                href="#"
                role="button"
              >
                Preview
              </a>
            </div>
            <div
              className="col-lg-2 d-flex flex-column pt-3"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <a
                className="btn btn-secondary btn-detail"
                href="#"
                role="button"
              >
                Product Details
              </a>
            </div>
            <div
              className="col-lg-3 d-flex flex-column pt-3"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <a
                className="btn btn-secondary btn-message"
                href="#"
                role="button"
              >
                Personalised A Message
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
