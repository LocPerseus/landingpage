import React from "react";

const Profit = () => {
  return (
    <>
      <section className="profit"></section>
      <section className="bg-profit">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-12 col-xl-7 d-flex flex-column justify-content-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="bg-profit-content text-white">
                <h3>
                  Because we all need more reasons <br /> than to cherish our
                  light
                </h3>
                <p>
                  These unsettling, delicate, and deeply intrusive realistic
                  scenes catapult us into a new reality of activism. We must
                  find new ways to articulate our pain and ban together.
                  Supporting only the light hope, peace, and unity of a nation.
                </p>
              </div>
            </div>
            <div className="col-lg-12 col-xl-5 d-flex pt-4 justify-content-end align-self-center">
              <a
                className="btn btn-secondary btn-lg btn-donate"
                href="#"
                role="button"
              >
                Donate Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profit;
