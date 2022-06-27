import React from "react";

const Benifit = () => {
  return (
    <section className="bg-benefit d-flex align-items-center">
      <div class="container">
        <div className="row">
          <div
            className="col-lg-6 d-flex flex-column justify-content-center ms-auto mb-2 mb-lg-0 benefit-item text-white"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3>
              All The Profit Directly
              <br />
              Benifits The Citizens Of Ukraine
            </h3>
            <p>
              Choose to donate the book to a loved one, save it for someone
              special in your family and include a personalized message, or buy
              it for yourself to educate, gain insight, and directly support the
              people of Ukraine.
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
    </section>
  );
};

export default Benifit;
