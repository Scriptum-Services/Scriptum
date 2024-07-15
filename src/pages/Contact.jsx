// import React, { useState } from "react";

// const Contact = () => {
//   const [contactListVisible, setContactListVisible] = useState(false);

//   const toggleContactList = (e) => {
//     e.preventDefault();
//     setContactListVisible(!contactListVisible);
//   };

//   const openWhatsApp = () => {
//     const phoneNumber = "0203901038";
//     const message = "Good day. Please I will need your assistance.";
//     const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
//       message
//     )}`;
//     window.open(url, "_blank");
//   };

//   const openDialer = (phoneNumber) => {
//     window.location.href = `tel:${phoneNumber}`;
//   };

//   return (
//     <div>
//       <section id="contact">
//         <div className="contact-content">
//           <h2>Contact Us</h2>
//           <p>
//             If you have any questions or need assistance, please feel free to
//             contact us. We're here to help!
//           </p>
//         </div>
//       </section>

//       <section id="paraphrasing-works">
//         <a
//           className="order-button"
//           href=" "
//           id="contact-button"
//           onClick={toggleContactList}
//         >
//           {contactListVisible ? (
//             <>
//               Click to Close <i className="fas fa-chevron-up"></i>
//             </>
//           ) : (
//             <>
//               Click to Contact Us! <i className="fas fa-chevron-down"></i>
//             </>
//           )}
//         </a>
//         <ul
//           className="contact-info"
//           id="contact-list"
//           style={{ display: contactListVisible ? "block" : "none" }}
//         >
//           <li onClick={openWhatsApp}>
//             <i className="fab fa-whatsapp"></i> WhatsApp: 020 390 1038
//           </li>
//           <li onClick={() => openDialer("0556317768")}>
//             <i className="fas fa-phone"></i> Call: 055 631 7768
//           </li>
//           <li onClick={() => openDialer("0557588607")}>
//             <i className="fas fa-phone"></i> Call: 055 758 8607
//           </li>
//         </ul>
//       </section>
//     </div>
//   );
// };

// export default Contact;
import React from "react";

function Contact() {
  return (
    <div>
      <section id="contact">
        <div className="contact-content">
          <h2>Contact Us</h2>
          <p>
            At Scriptum, we are committed to supporting you every step of the
            way. If you have any questions, need assistance, or want to discuss
            your project requirements, please feel free to reach out to us. Our
            dedicated team is here to help and provide the expert guidance you
            need. <br />
            Get in Touch To get in touch with us, click the button below <br />
            for our contact information.
            <br />
            We look forward to hearing from you and assisting you in your
            academic journey!
          </p>
        </div>
      </section>
    </div>
  );
}

export default Contact;
