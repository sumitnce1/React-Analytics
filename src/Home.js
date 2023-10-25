import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill } from 'react-icons/bs';
import data from './data.json';
import PieChart from './Chart/PieChart.js';
import LineChart from './Chart/LineChart.js';
import BarChart from './Chart/BarChart.js';
import Rank from './Chart/Rank.js';

const cardStyle = {
    border: '0 solid #ccc',
    boxShadow: '0 14px 6px rgba(0, 0, 0, 0.1)', // Customize the shadow properties
    margin: '8px', // Add margin for spacing between cards
};

const chartData = data.chartData; 

function Home() {
    
    return (
        <main className='main-container'>
            <div className='main-title'>
                <h3>DASHBOARD</h3>
            </div>

            <div className='main-cards' style={cardStyle}>
                <Card>
                    <CardContent>
                        <Typography variant="h5">Registered Category</Typography>                    
                        <Typography variant="h4">300</Typography>
                    </CardContent>
                </Card>
                <Card >
                    <CardContent>
                        <Typography variant="h5">Active Category</Typography>
                        <Typography variant="h4">12</Typography>
                    </CardContent>
                </Card>
                <Card >
                    <CardContent>
                        <Typography variant="h5">CUSTOMERS</Typography>
                        <Typography variant="h4">33</Typography>
                    </CardContent>
                </Card>
                <Card >
                    <CardContent>
                        <Typography variant="h5">ALERTS</Typography>
                        <Typography variant="h4">42</Typography>
                    </CardContent>
                </Card>
            </div>
            <div className='charts'>        
            <PieChart chartData={chartData}/>
            <LineChart chartData={chartData} />
            </div>
            <div className='charts'>  
            <BarChart chartData={chartData} />

            <Rank/>
            </div>
        </main>
    );
}

export default Home;
