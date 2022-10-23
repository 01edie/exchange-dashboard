import React from "react";
import { Card } from "primereact/card";
import exchangeImage from "./exchange.jpg";
const Features = () => {
  return (
    <Card className="shadow-4 bg-indigo-200 ml-2 mt-2 h-30rem flex justify-content-center flex-column gap-4 align-items-center">
      <div className="container-features w-full h-full flex justify-content-center flex-column gap-4 align-items-center">
        <h3 className="text-center">
          Check the current foreign exchange rates and stats here...
        </h3>
        <img
          className="image-feature"
          src={exchangeImage}
          alt="exchange-info"
        />
      </div>
    </Card>
  );
};

export default Features;
