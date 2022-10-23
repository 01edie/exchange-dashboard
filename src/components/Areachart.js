import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const Areachart = ({ data, title }) => {
  return (
    <div className="m-2">
      <AreaChart
        width={400}
        height={200}
        data={data}
        margin={{
          top: 5,
          right: 15,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="8 8" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="topCurrencyValue"
          stackId="1"
          stroke="#fc0615"
          fill="#e93a45"
        />
        <Area
          type="monotone"
          dataKey="bottomCurrencyValue"
          stackId="1"
          stroke="#0f07fb"
          fill="#ed936f"
        />
      </AreaChart>
      <p className="text-center">{title.toUpperCase()}</p>
    </div>
  );
};

export const Areachart2 = ({ data, title }) => {
  return (
    <div className="m-2">
      <AreaChart
        width={400}
        height={200}
        data={data}
        margin={{ top: 5, right: 15, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="85%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="85%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="date" />
        <YAxis />
        <CartesianGrid strokeDasharray="7 7" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="INR"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
        <Area
          type="monotone"
          dataKey="JPY"
          stroke="#82ca9d"
          fillOpacity={1}
          fill="url(#colorPv)"
        />
      </AreaChart>
      <p className="text-center">{title.toUpperCase()}</p>
    </div>
  );
};

export default Areachart;
