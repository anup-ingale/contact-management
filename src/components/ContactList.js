import React from "react";
import CardContact from "./ContactCard";

const ContactList = (props) => {
  <h2>Contact List</h2>;
  const deleteConactHandler = (id) => {
    props.getContactId(id);
  };
  const renderList = props.contacts.map((contact) => {
    return <CardContact contact={contact} key={contact.id} clickHander={deleteConactHandler}></CardContact>;
  });
  return (
    <div className="container">
      <h2 className="mt-4 text-center">Contact List</h2>
      <hr></hr>
      {renderList}
    </div>
  );
};

export default ContactList;
