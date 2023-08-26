//pages are for routes
//imr + sfc

import React from "react";

import ContactForm from "./contact/contactForm";
import "./contact/contact.css";

const Contact = () => {
  return (
    <>
      <section
        className="contactBackground"
        style={{
          backgroundImage: `url("./assets/images/illustration/Insights_2021_Back_Cover_artwork_only_no_titles_Hutch.jpg")`,
        }}
      >
        <div className="contactForm">
          <ContactForm />
        </div>
      </section>
    </>
  );
};

export default Contact;
