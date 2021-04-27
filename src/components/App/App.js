import React, { useState, useEffect } from "react";
import "./App.style.scss";

import Hotel from "../Hotel/Hotel.js";

const App = () => {
  return (
    <div className="app-container">
      <div className="content">
        <Hotel />
      </div>
    </div>
  );
};

export default App;
