import React from "react";
import { NavLink } from "react-router-dom";


function About() {
  return (
   
    <div>
      <section id="about">
        <div className="row">
          <div className="container my-4 py-4">
            <div className="row">
            <div className="col-md-6">
              {/** image */}
            </div>
            <div className="col-md-6 ">
              <h3 className="fs-5 mb-0">About Us</h3>
              <h1 className="display-6 mb-2">
                Who <b>We</b> Are
              </h1>
              <hr className="w-30 mx-auto" />
              <p className="lead mb-4 ">
                The basic purpose of Servicely is to provide all kinds of
                services at customer"s doorsteps with a one-stop solution to
                make their life easy and convenient anywhere at any time by
                nearest service provider companies. We realize the challenges
                that every home face on a regular basis is getting skilled
                service provider at a convenient time. One of our motives is to
                ensure customer security, better work quality and to hire the
                Service provider companies area-wise instead of hiring an
                individual hence the Customer will contact directly to the
                company & not to an individual. Thus, enabling the company to
                send its relevant employee to perform the required job. The
                company has its physical address so the customer can approach
                easily if required during any unforeseen circumstances.
              </p>
              <button className="btn btn-primary me-4 rounded-pill px-4 py-2 ">
              Get Start
            </button>
            <NavLink to="/" className="btn btn-light me-4 rounded-pill px-4 py-2">
              Our Service
            </NavLink>
            </div>

            
          </div>
          </div>
        </div>
      </section>
    </div>
    
  );
}

export default About;
