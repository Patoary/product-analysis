import { data } from 'autoprefixer';
import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const data = [
        {
            "Month": "Mar",
            "Investment": 100000,
            "sell": 241,
            "Revenue": 10401
        },
        {
            "Month": "Apr",
            "Investment": 200000,
            "sell": 423,
            "Revenue": 24500
        },
        {
            "Month": "May",
            "Investment": 500000,
            "sell": 726,
            "Revenue": 67010
        },
        {
            "Month": "Jun",
            "Investment": 500000,
            "sell": 529,
            "Revenue": 40405
        },
        {
            "Month": "Jul",
            "Investment": 600000,
            "sell": 601,
            "Revenue": 50900
        },
        {
            "Month": "Aug",
            "Investment": 700000,
            "sell": 670,
            "Revenue": 61000
        }
    ]

    return (
        <div className='p-32'>
            <div className='mb-20'>
                <LineChart width={550} height={200} data={data}>
                    <Line dataKey={'Revenue'}></Line>
                    <Line dataKey={'Investment'}></Line>
                    <XAxis dataKey={'Month'}></XAxis>
                    <YAxis></YAxis>
                    <Tooltip>   </Tooltip>
                </LineChart>
            </div>
            <div>
                <BarChart width={550} height={200} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey={'sell'} />
                    <YAxis/>
                    <Tooltip />
                    <Legend />
                    <Bar dataKey={'Revenue'} fill="#8884d8" />
                    <Bar dataKey="Investment" fill="#82ca9d" />
                    <Tooltip></Tooltip>
                </BarChart>
            </div>
        </div>

    );
};

export default Dashboard;