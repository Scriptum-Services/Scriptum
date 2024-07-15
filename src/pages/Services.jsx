import React from "react";
import { Link } from "react-router-dom";

function Services() {
  return (
    <div>
      <section id="services">
        <div className="services-content">
          <h2>Our Services</h2>
          <div className="service-list">
            <div className="service-item">
              <h3>
                <i className="fas fa-laptop-code"></i>{" "}
                <Link to="/project">Project Works </Link>
              </h3>
              <p>
                <i className="fas fa-check"></i> Need help with your research
                projects? Our experienced professionals provide guidance in
                formulating research questions, structuring your project, and
                presenting your findings.
              </p>
            </div>
            <div className="service-item">
              <h3>
                <i className="fas fa-pen"></i>{" "}
                <Link to="/dissertation">Dissertation Facilitation</Link>
              </h3>
              <p>
                <i className="fas fa-check"></i> Your dissertation is a critical
                milestone. Our writers help you create a well-organized,
                well-researched, and well-written dissertation that meets
                academic standards.
              </p>
            </div>
            <div className="service-item">
              <h3>
                <i className="fas fa-clone"></i>{" "}
                <Link to="/paraphasing">Paraphrasing of Documents</Link>
              </h3>
              <p>
                <i className="fas fa-check"></i> Proper paraphrasing is
                essential to avoid plagiarism. Our team ensures that your
                content is rephrased while maintaining its original meaning and
                integrity.
              </p>
            </div>
            <div className="service-item">
              <h3>
                <i className="fas fa-book"></i>{" "}
                <Link to="/citation">
                  In-Text Citations & Reference Listing
                </Link>
              </h3>
              <p>
                <i className="fas fa-check"></i> Accurate citations and
                references are crucial for academic integrity. We assist you in
                correctly citing sources within your work and compiling
                comprehensive reference lists.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
