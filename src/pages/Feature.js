import React from "react";
import Navbar from "../Componantes/Navbar";
import Footer from "../Componantes/Footer";

const Feature = () => {
  return (
    <>
      <div className="super_container">
        <Navbar />

        <div id="FEATURES" className="info mt-5 mb-5 h-auto">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-12 mt-3">
                <div>
                  <div className="card-body">
                    <div className="icons m-auto">
                      <i className="fa-solid fa-rocket" />
                    </div>
                    <h5 className="card-title text-center mt-3 mb-3 ms-12">
                      WEB DEVELOPMENT
                    </h5>
                    <p className="card-text text-center text-secondary">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <div className="m-auto w-50">
                      <a href="#" className="btn btn-info w-100">
                        LEARN MORE
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 mt-3">
                <div>
                  <div className="card-body">
                    <div className="icons m-auto">
                      <i className="fa-solid fa-camera" />
                    </div>
                    <h5 className="card-title text-center mt-3 mb-3 ms-12">
                      PHOTOGRAPHY
                    </h5>
                    <p className="card-text text-center text-secondary">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <div className="m-auto w-50">
                      <a href="#" className="btn btn-info w-100">
                        LEARN MORE
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 mt-3">
                <div>
                  <div className="card-body">
                    <div className="icons m-auto">
                      <i className="fa-solid fa-gear" />
                    </div>
                    <h5 className="card-title text-center mt-3 mb-3 ms-12">
                      ONLINE MARKTING
                    </h5>
                    <p className="card-text text-center text-secondary">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <div className="m-auto w-50">
                      <a href="#" className="btn btn-info w-100">
                        LEARN MORE
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="languges h-auto">
          <div className="container">
            <div className="row">
              <div className="desc col-lg-6 col-md-12 col-sm-12">
                <p className="text-secondary mb-3">About Our Company</p>
                <h1 className="mb-3">WE ARE THEME CREATOR</h1>
                <p className="mb-3">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatibus, nostrum! Natus commodi modi facilis delectus,
                  alias omnis veniam quae !
                </p>
                <p className="text-secondary mb-3">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
                  eius voluptas nobis nihil nesciunt praesentium commodi eveniet
                  a iure aliquam quis, impedit voluptatem? Architecto quibusdam,
                  fugit distinctio temporibus earum amet!
                </p>
                <a href="#" className="btn btn-info">
                  LEARN MORE
                </a>
              </div>
              <div className="bars col-lg-6 col-md-12 col-sm-12">
                <div
                  className="progress  "
                  role="progressbar"
                  aria-label="Success example"
                  aria-valuenow={25}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className="progress-bar bg-info"
                    style={{ width: "78%" }}
                  >
                    <span>HTML5</span>
                    <span>78%</span>
                  </div>
                </div>
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Info example"
                  aria-valuenow={50}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className="progress-bar bg-dark"
                    style={{ width: "91%" }}
                  >
                    <span>CSS 4</span>
                    <span>91%</span>
                  </div>
                </div>
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Warning example"
                  aria-valuenow={75}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className="progress-bar bg-warning "
                    style={{ width: "58%" }}
                  >
                    <span>JQuery</span>
                    <span>58%</span>
                  </div>
                </div>
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Danger example"
                  aria-valuenow={100}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className="progress-bar bg-gradient"
                    style={{ width: "63%" }}
                  >
                    <span>PHP</span>
                    <span>63%</span>
                  </div>
                </div>
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Danger example"
                  aria-valuenow={100}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className="progress-bar bg-danger"
                    style={{ width: "100%" }}
                  >
                    <span>Photoshop</span>
                    <span>100%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Feature;
