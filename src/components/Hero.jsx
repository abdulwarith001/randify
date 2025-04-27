import React, { useEffect } from "react";
import Button from "./Button";
const Hero = () => {
  return (
    <hero className="text-center">
      <h1 className="text-black-500 mt-16 text-6xl font-normal">
        Don't know what to
      </h1>
      <h1 className="text-black-500 mt-3 text-6xl font-normal">Play?</h1>

      <h1 className="text-black-500 mt-6 text-xl font-light">
        Use Randify to listen to Random music you would love!
      </h1>

      <div className="mt-10 flex items-center justify-center"> 
        <Button buttonText='Play random songs' />
      </div>

      <a
        href="#"
        className="text-black-500 mt-6 flex justify-self-center text-xl"
      >
        Customize
      </a>
    </hero>
  );
};

export default Hero;
