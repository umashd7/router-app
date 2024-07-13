import React from "react";
import { Link} from "react-router-dom";
import { getContactDetails } from "../data/contactData";

function Contact() {
  let contactDetails = getContactDetails();
  return (
    <div className="App-header">
      {contactDetails.map((item) => {
        return (
          <>
            <div className="contact-list">
              <Link to = {`/contact/${item.id}`}>{item.name}</Link>
              <br />
            </div>
          </>
        );
      })}
      
    </div>
  );
}

export default Contact;
