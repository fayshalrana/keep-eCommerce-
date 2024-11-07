import React from 'react'
import "./BannerChartTwo.css";
import {
    PieChart,
    Pie,
    Legend,
    Cell,
    Tooltip,
    ResponsiveContainer,
    Label,
    RadialBar
} from "recharts";
import { HiArrowTrendingUp } from "react-icons/hi2";
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const data01 = [{ name: 'Online Marking', value: 5 }, { name: 'Financial Growth', value: 4 },
{ name: 'Business', value: 1 }, { name: 'Cost', value: 1 }]

const BannerChartTwo = () => {
    return (
        <PieChart width={210} height={170}>
            <Pie
                startAngle={10}
                cornerRadius={40}
                data={data01}
                cx={300}
                cy={150}
                innerRadius={60}
                outerRadius={80}
                background={{ fill: "red" }}
                paddingAngle={2}
            >
                <Label
                    value={"82%"} position="centerBottom" className='label-top' fontSize='27px' fill="#2D3643"
                />
                <Label
                    value="+18.7%" position="centerTop" className='label' fontSize='12px' fill="#11A75C"
                />
                {
                    data01.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]} />)
                }
            </Pie>
            <Tooltip contentStyle={{ backgroundColor: "#2D3643" }} wrapperStyle={{ zIndex: 1000 }} itemStyle={{ color: "white" }} />
        </PieChart>
    )
}

export default BannerChartTwo
