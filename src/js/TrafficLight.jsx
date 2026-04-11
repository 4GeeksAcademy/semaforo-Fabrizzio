import React, { useState } from "react";

const TrafficLight = () => {
  const [color, setColor] = useState("red");

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
      
      <div style={{
        background: "black",
        padding: "20px",
        borderRadius: "10px"
      }}>
        
        {/* RED */}
        <div
          onClick={() => setColor("red")}
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            background: "red",
            margin: "10px",
            opacity: color === "red" ? "1" : "0.3",
            boxShadow: color === "red" ? "0 0 20px red" : "none"
          }}
        ></div>

        {/* YELLOW */}
        <div
          onClick={() => setColor("yellow")}
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            background: "yellow",
            margin: "10px",
            opacity: color === "yellow" ? "1" : "0.3",
            boxShadow: color === "yellow" ? "0 0 20px yellow" : "none"
          }}
        ></div>

        {/* GREEN */}
        <div
          onClick={() => setColor("green")}
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            background: "green",
            margin: "10px",
            opacity: color === "green" ? "1" : "0.3",
            boxShadow: color === "green" ? "0 0 20px green" : "none"
          }}
        ></div>

      </div>
    </div>
  );
};

export default TrafficLight;git add .