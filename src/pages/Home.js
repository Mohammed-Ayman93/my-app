import React from "react";
import Navbar from "../Componantes/Navbar";
import Footer from "../Componantes/Footer";

const Home = () => {
  return (
    <>
      <div className="super_container">
        <Navbar />
        <div className="header p-1">
          <div className="container">
            <div className="row">
              <div className="main text-white col-lg-6 col-md-6 col-sm-12">
                <p>WE ARE</p>
                <h1>BUSINESS THEME CREATOR</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore eum nemo maxime ipsam iure veritatis voluptatem
                  voluptates quidem vitae. Quod tempora cumque delectus
                  architecto quia laborum incidunt quidem. Maxime, ducimus?
                </p>
              </div>
            </div>
            <a className="btn btn-info" href="#">
              SEE OUR PROJECT
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
