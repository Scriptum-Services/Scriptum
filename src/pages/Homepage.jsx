import React from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div>
      <section id="intro">
        <div className="intro-content">
          <h1>Welcome to Scriptum</h1>
          <article>
            <h2>
              Your Premier Partner in Crafting Exceptional Dissertations,
              Theses, and Project Works{" "}
            </h2>{" "}
            <br />
            <p>
              At Scriptum, we understand the significance of your academic
              journey and the impact a well-crafted dissertation or thesis can
              have on your future. We are dedicated to providing comprehensive
              support and expert guidance to help you produce scholarly works
              that stand out.
            </p>{" "}
            <br />
            <h3>Why Choose Scriptum ❔</h3>
            <p>
              <strong>Expert Guidance</strong> Our team of seasoned
              professionals and academic experts offer personalized mentorship
              and insights, ensuring your work meets the highest standards of
              excellence.
            </p>{" "}
            <br />
            <p>
              <strong>Comprehensive Support</strong> From initial brainstorming
              to final editing, we provide end-to-end assistance tailored to
              your unique needs and academic goals.
            </p>{" "}
            <br />
            <p>
              <strong>Quality Assurance</strong> We are committed to delivering
              meticulously researched, well-written, and impeccably formatted
              documents that showcase your intellectual rigor and academic
              prowess.
            </p>{" "}
            <br />
            <p>
              <strong>Timely Delivery</strong> We understand the importance of
              deadlines. Our efficient processes ensure that you receive your
              completed work on time, every time.
            </p>{" "}
            <br />
            <p>
              <strong>Confidentiality</strong> Your privacy and academic
              integrity are paramount. We adhere to strict confidentiality
              protocols, safeguarding your work and personal information.
            </p>{" "}
            <br />
            <p>
              <strong>
                Transform Your Ideas into Masterpieces Join the ranks of
                successful scholars who have trusted Scriptum to elevate their
                academic submissions.
              </strong>
            </p>
          </article>{" "}
          <br />
          <a href="#services" className="cta-button">
            Learn More <i className="fas fa-chevron-circle-down"></i>
          </a>
        </div>
      </section>

      <section id="services">
        <div className="services-content">
          <h2>Services</h2>
          <div className="service-list">
            <div className="service-item">
              <h3>
                <Link to="/project">
                  <i className="fas fa-laptop-code"></i> Project Works
                </Link>
              </h3>
              <br />
              <p>
                <i className="fas fa-check"></i> Need help with your research
                projects? Our experienced professionals provide guidance in
                formulating research questions, structuring your project, and
                presenting your findings.
              </p>
            </div>

            <div className="service-item">
              <h3>
                <Link to="/dissertation">
                  <i className="fas fa-pen"></i> Dissertation Facilitation
                </Link>
              </h3>
              <br />
              <p>
                <i className="fas fa-check"></i> Your dissertation is a critical
                milestone. Our writers help you create a well-organized,
                well-researched, and well-written dissertation that meets
                academic standards.
              </p>
            </div>

            <div className="service-item">
              <h3>
                <Link to="/paraphasing">
                  <i className="fas fa-clone"></i> Paraphrasing of Documents
                </Link>
              </h3>
              <br />
              <p>
                <i className="fas fa-check"></i> Proper paraphrasing is
                essential to avoid plagiarism. Our team ensures that your
                content is rephrased while maintaining its original meaning and
                integrity.
              </p>
            </div>

            <div className="service-item">
              <h3>
                <Link to="/citation">
                  <i className="fas fa-book"></i> In-Text Citations & Reference
                  Listing
                </Link>
              </h3>
              <br />
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

      <section id="about">
        <div className="about-us">
          <h2>About Us</h2>
          <div className="about-list">
            <div className="about-item">
              <p>
                Welcome to Scriptum, your trusted partner in academic
                excellence. With a passion for helping students and researchers
                succeed, we provide top-notch services in crafting impressive
                dissertations, theses, and research projects. Our team of
                dedicated professionals brings a wealth of expertise in various
                fields, ensuring that your work is tailored to meet the highest
                academic standards.
              </p>
            </div>

            <div className="about-item">
              <p>
                At Scriptum, we understand the challenges you face when it comes
                to academic writing and research. Our mission is to simplify
                this journey by offering comprehensive support at every step.
                Whether you need assistance in formulating research questions,
                structuring your project, or ensuring accurate citations, our
                services are designed to empower you with the tools you need to
                excel.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Homepage;
