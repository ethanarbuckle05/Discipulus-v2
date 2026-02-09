"use client";

import React from "react";
import Manifesto1 from "./Manifesto1";
import Manifesto2 from "./Manifesto2";
import Manifesto3 from "./Manifesto3";

const Manifesto = () => {
  return (
    <div id="about" className="justify-center bg-black -mt-16 -mb-16">
      <div>
        <Manifesto1 />
        <Manifesto2 />
        <Manifesto3 />
      </div>
    </div>
  );
};

export default Manifesto;
