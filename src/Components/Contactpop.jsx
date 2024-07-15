import React, { useState } from "react";

const Contact = () => {
  const [contactListVisible, setContactListVisible] = useState(false);

  const toggleContactList = (e) => {
    e.preventDefault();
    setContactListVisible(!contactListVisible);
  };

  const openWhatsApp = () => {
    const phoneNumber = "0203901038";
    const message = "Good day. Please I will need your assistance.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  const openDialer = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <section id="paraphrasing-works">
      <a
        className="order-button"
        href=" "
        id="contact-button"
        onClick={toggleContactList}
      >
        {contactListVisible ? (
          <>
            Click to Close <i className="fas fa-chevron-up"></i>
          </>
        ) : (
          <>
            Click to Contact Us! <i className="fas fa-chevron-down"></i>
          </>
        )}
      </a>
      <ul
        className="contact-info"
        id="contact-list"
        style={{ display: contactListVisible ? "block" : "none" }}
      >
        <li onClick={openWhatsApp}>
          <i className="fab fa-whatsapp"></i> WhatsApp: 020 390 1038
        </li>
        <li onClick={() => openDialer("0556317768")}>
          <i className="fas fa-phone"></i> Call: 055 631 7768
        </li>
        <li onClick={() => openDialer("0557588607")}>
          <i className="fas fa-phone"></i> Call: 055 758 8607
        </li>
      </ul>
    </section>
  );
};

export default Contact;
