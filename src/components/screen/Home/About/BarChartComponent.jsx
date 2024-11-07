import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import './BarChartComponent.css'
const data = [
    { name: 'Page A', uv: 3, pv: 2, amt: 2400 },
    { name: 'Page B', uv: 2, pv: 1, amt: 2210 },
    { name: 'Page C', uv: 1, pv: 4, amt: 2290 },
    { name: 'Page C', uv: 4, pv: 2, amt: 2290 },
    { name: 'Page C', uv: 3, pv: 3, amt: 2290 },
    { name: 'Page C', uv: 4, pv: 4, amt: 2290 },
    { name: 'Page C', uv: 1, pv: 1, amt: 2290 },

];

const BarChartComponent = () => {

    return (
        <ResponsiveContainer width="100%" height={200}>
            <BarChart width={350} height={160} data={data} >
                <YAxis dataKey="uv" axisline={false} />
                <XAxis tickLine={false} tick={{ fontSize: 0 }} />
                <Tooltip dataKey="amt" cursor={{ fill: 'transparent' }} />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <Bar background={{
                    fill: '#FFDCDA',
                    radius: 20
                }}
                    radius={[10, 10, 0, 0]}
                    dataKey="pv" fill="#FF7A72"
                    barSize={20}
                />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default BarChartComponent;
