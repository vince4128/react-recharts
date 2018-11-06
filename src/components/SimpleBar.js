import React from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

const MeasurementChart = (props) => {

    return (
          <BarChart width={600} height={300} data={props.data}
              margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="city"/>
                <YAxis/>
                <Tooltip/>
                <Legend />
         <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
    );

}

export default MeasurementChart;
