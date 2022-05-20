import React, { useState, useEffect } from "react";
import axios from "axios";

export default () => {
  const [natters, setNatters] = useState({});

  const fetchNatters = async () => {
    const response = await axios.get("http://localhost:5002/natters");

    setNatters(response.data);
  };

  useEffect(() => {
    fetchNatters();
  }, []);

  const renderNatters = Object.values(natters).map((natter) => {
    return (
      <div
        className="card"
        style={{ width: "30%", marginBottom: "20px" }}
        key={natter.id}
      >
        <div className="card-body">
          <h3>{natter.natter}</h3>
        </div>
      </div>
    );
  });
  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {renderNatters}
    </div>
  );
};
