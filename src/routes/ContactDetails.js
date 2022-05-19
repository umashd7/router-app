import React from 'react'
import { useParams } from "react-router-dom";
import { getContactDetails } from "../data/contactData";

function ContactDetails() {
    let params = useParams();
    let contactDetailsJson = getContactDetails();
    let contactDetails = contactDetailsJson.filter((item)=>item.id===Number(params.id))
  return (
    <div className="App-header">
        <p> {contactDetails[0].id}</p> 
        <p> {contactDetails[0].name}</p> 
        <p> {contactDetails[0].mobile}</p> 
        <p> {contactDetails[0].location}</p> 
    </div>
  )
}

export default ContactDetails