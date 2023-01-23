import React, { useState } from "react";
import "./css/item.css";

function ItemDetails({
  description,
  contactPerson,
  address,
  city,
  zip,
  phone,
  website,
  email,
  company,
}) {
  return (
    <div className="item-details">
      <div className="item-sub-details">
        <h2>Description</h2>
        <p>{description}</p>
        <div className="item-details-info">
          <div className="item-details-info-1">
            <div className="item-details-info-text">
              <h4>Contact Person</h4>
              <p>{contactPerson}</p>
            </div>
            <div>
              <h4>Zip Code</h4>
              <p>{zip}</p>
            </div>
            <div>
              <h4>Email</h4>
              <p>{email}</p>
            </div>
            <div>
              <h4>Phone</h4>
              <p>{phone}</p>
            </div>
          </div>
          <div>
            <div>
              <h4>Address</h4>
              <p>{address}</p>
            </div>
            <div>
              <h4>City</h4>
              <p>{city}</p>
            </div>
            <div>
              <h4>Website</h4>
              <p>{website}</p>
            </div>
            <div>
              <h4>Company</h4>
              <p>{company}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetails;
