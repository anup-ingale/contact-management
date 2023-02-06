import React from "react";

const CardContact = (props) => {
  const { id, name, email } = props.contact;
  return (
    <div className="container w-65 border">
      <div className="row boder">
        <div className="col">{id}</div>
        <div className="col">{name}</div>
        <div className="col">{email}</div>
        <button className="btn btn-primary w-50 p-3" onClick={() => props.clickHander(id)}>DELETE</button>
      </div>
    </div>
  );
};
export default CardContact;
