import React, { useState, useEffect } from "react";
import "./css/item.css";
import axios from "axios";
import ItemDetails from "./ItemDetails";

function Item({
  name,
  website,
  email,
  city,
  description,
  address,
  phone,
  zip,
  company,
}) {
  const [showDetails, setshowDetails] = useState(false);

  return (
    <div className="item-container">
      <div className="item">
        <div>
          <p>Hello {name}</p>
        </div>
        <div>
          <h4>Contact</h4>
          <p>{name}</p>
        </div>
        <div>
          <h4>City</h4>
          <p>{city}</p>
        </div>
        <div>
          <h4>Email</h4>
          <p>{email}</p>
        </div>
          <button onClick={() => setshowDetails(!showDetails)}>
            {" "}
            {!showDetails ? "View Details" : "Hide Details"}{" "}
          </button>
      </div>
      {showDetails && (
        <ItemDetails
          description={description}
          contactPerson={name}
          address={address}
          city={city}
          email={email}
          website={website}
          company={company}
          phone={phone}
          zip={zip}
        />
      )}
    </div>
  );
}

export default Item;
