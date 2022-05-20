import React, { useState } from "react";
import axios from "axios";

export default () => {
  const [natter, setNatter] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    await axios.post("http://localhost:5000/natters", { natter });
    setNatter("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Start a Natter</label>
          <input
            value={natter}
            onChange={(e) => setNatter(e.target.value)}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary mt-3">Submit</button>
      </form>
    </div>
  );
};
