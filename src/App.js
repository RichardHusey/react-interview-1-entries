import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [nestedObjected, setNestedObject] = useState({
    taxi:
      "a car licensed to transport passengers in return for payment of a fare",
    food: {
      sushi:
        "a traditional Japanese dish of prepared rice accompanied by seafood and vegetables",
      apple: {
        Honeycrisp:
          "an apple cultivar developed at the MAES Horticultural Research Center",
        Fuji:
          "an apple cultivar developed by growser at Tohoku Research Station"
      }
    }
  });
  return (
    <div
      className="App"
      style={{ margin: "auto", width: "70%", paddingTop: 40 }}
    >
      <h1>React-Code-Interview-1</h1>
      <DisplayNested nestedObjected={nestedObjected} />
    </div>
  );
}

const DisplayNested = ({ nestedObjected }) => {
  return (
    <>
      {Object.entries(nestedObjected).map(([key, value]) => {
        if (typeof value === "object") {
          return (
            <>
              <p>{`${key}`}</p>
              <div style={{ paddingLeft: 50 }}>
                <DisplayNested nestedObjected={value} />
              </div>
            </>
          );
        } else {
          return <p>{`${key} : ${value}`}</p>;
        }
      })}
    </>
  );
};
