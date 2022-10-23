import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const Barchart = ({ chartData, color, title }) => {
  return (
    // 
    <div className="m-2">
      <BarChart width={400} height={200}  data={chartData}>
        <XAxis dataKey="name" stroke={color} />
        <YAxis />
        <Tooltip wrapperStyle={{ border: "none", outline: "none" }} />

        <CartesianGrid stroke="#ccc" strokeDasharray="6 6" />
        <Bar dataKey="value" fill={color} barSize={35} />
      </BarChart>
      <p className="text-center">{title.toUpperCase()}</p>
   
      </div>
  );
};

// #8884d8

export default Barchart;
