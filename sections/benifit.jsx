import React from "react";

const Benifit = () => {
  return (
    <>
      <section className="benefit"></section>
      <section className="bg-benefit">
        <div class="container">
          <div className="row">
            <div
              className="col-lg-6 d-flex flex-column justify-content-end ms-auto mb-2"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="bg-benefit-content text-white">
                <h3>
                  All The Profit Directly
                  <br />
                  Benifits The Citizens Of Ukraine
                </h3>
                <p>
                  Choose to donate the book to a loved <br /> one, save it for someone
                  special in your family and include a personalized message, or
                  buy it for yourself to educate, gain insight, and directly
                  support the people of Ukraine.
                </p>
                <div className="col-lg-5 d-flex pt-4 pt-lg-0 justify-content-center align-self-center">
                  <a
                    className="btn btn-secondary btn-lg btn-donate d-none"
                    href="#"
                    role="button"
                  >
                    Donate Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Benifit;
