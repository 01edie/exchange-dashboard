import React from "react";
import { ProgressSpinner } from "primereact/progressspinner";
const Loading = () => {
  
  return (
    <div className="shadow-4 bg-indigo-200 ml-2 mt-2 h-30rem flex justify-content-center flex-wrap align-items-center">
      <ProgressSpinner
        style={{ width: "100px", height: "100px" }}
        strokeWidth="1"
      />
    </div>
  );
};

export default Loading;
