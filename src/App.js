import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import Item from "./Item";
import axios from "axios";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [userDetails, setUserDetails] = useState({
    page1: [],
    page2: [],
    page3: [],
  });
  const getData = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    const data = await response.data;
    setUserDetails({
      page1: data.slice(0, 3),
      page2: data.slice(3, 6),
      page3: data.slice(6, 10),
    });
  };
  useEffect(() => {
    getData();
  }, []);
  const prevPage = () => {
    setCurrentPage((prevPage) => {
      if (prevPage === 1) {
        return 1;
      } else {
        return prevPage - 1;
      }
    });
  };
  const nextPage = () => {
    setCurrentPage((prevPage) => {
      if (prevPage === 3) {
        return 3;
      } else {
        return prevPage + 1;
      }
    });
  };
  return (
    <div className="container">
      {currentPage === 1 &&
        userDetails.page1?.map((user) => {
          return (
            <Item
              key={user.id}
              name={user.name}
              email={user.email}
              address={`${user.address.street} ${user.address.suite}`}
              city={user.address.city}
              phone={user.phone}
              website={user.website}
              company={user.company.name}
              description={user.catchPhrase}
              zip={user.address.zipcode}
            />
          );
        })}
      {currentPage === 2 &&
        userDetails.page2?.map((user) => {
          return (
            <Item
              key={user.id}
              name={user.name}
              email={user.email}
              address={`${user.address.street} ${user.address.suite}`}
              city={user.address.city}
              phone={user.phone}
              website={user.website}
              company={user.company.name}
              description={user.catchPhrase}
              zip={user.address.zipcode}
            />
          );
        })}
      {currentPage === 3 &&
        userDetails.page3?.map((user) => {
          return (
            <Item
              key={user.id}
              name={user.name}
              email={user.email}
              address={`${user.address.street} ${user.address.suite}`}
              city={user.address.city}
              phone={user.phone}
              website={user.website}
              company={user.company.name}
              description={user.catchPhrase}
              zip={user.address.zipcode}
            />
          );
        })}
      <div className="pagination">
        <p onClick={prevPage}> {"<"} </p>
        <p
          className={currentPage === 1 ? "active" : ""}
          onClick={() => setCurrentPage(1)}
        >
          1
        </p>
        <p
          className={currentPage === 2 ? "active" : ""}
          onClick={() => setCurrentPage(2)}
        >
          2
        </p>
        <p
          className={currentPage === 3 ? "active" : ""}
          onClick={() => setCurrentPage(3)}
        >
          3
        </p>
        <p onClick={nextPage}>{">"}</p>
      </div>
    </div>
  );
}

export default App;
