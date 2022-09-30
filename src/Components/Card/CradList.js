import React from "react";
import Nav from "../Navbar/Nav";
import Card from "./Card";
// import { details } from "./details";

function CradList({ details }) {
  const cards = details.map((user, i) => {
    return (
      <Card
        key={i}
        title={details[i].title}
        description={details[i].description}
        startDate={details[i].startDate}
        endDate={details[i].endDate}
        amount={details[i].amount}
      />
    );
  });

  return (
    <div>
      <Nav />
      <div className="flex flex-wrap">{cards}</div>
    </div>
  );
}

export default CradList;
