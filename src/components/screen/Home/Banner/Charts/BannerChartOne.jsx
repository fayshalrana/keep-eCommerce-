import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import "./BannerChartOne.css"

const data = [
  { name: 'M', Tmp: 0 },
  { name: 'T', Tmp: 2 },
  { name: 'W', Tmp: 3 },
  { name: 'T', Tmp: 0 },
  { name: 'F', Tmp: 2 },
  { name: 'S', Tmp: 4 },
  { name: 'S', Tmp: 3 }
];

const BannerChartOne = () => {
  return (
    <ResponsiveContainer width="100%" height={200}>



      <LineChart width={460} height={200} data={data}>
        {/* Line chart with temperature data and customized labels */}
        <Line
          type="monotone"
          dataKey="Tmp"
          stroke="#007aff"
          strokeWidth={3}
        />
        <CartesianGrid stroke="#E9EFF6" strokeDasharray="5 5" />
        {/* X-axis with time labels */}
        <XAxis axisLine={false} interval="preserveStartEnd" dataKey="name" />
        <YAxis />

        {/* Tooltip for data points */}
        <Tooltip cursor={false} wrapperStyle={{ width: 100, backgroundColor: '#007aff', borderRadius: "10px" }} />
      </LineChart>
    </ResponsiveContainer>

  );
};

export default BannerChartOne;
