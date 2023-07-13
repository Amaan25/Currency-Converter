import React from "react";
import {Line} from 'react-chartjs-2';
import{
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,

} from 'chart.js';

ChartJS.register(LineElement,CategoryScale,LinearScale,PointElement);


const LineChart = ({DATA,LABELS}) => {

    console.log("in line chart");
    console.log(DATA);
    return (
       <div className="mychart">
        <Line data={{
            labels:LABELS,
            datasets:[
                {
                    data:DATA,
                    backgroundColor:'Transparent',
                    borderColor:'blue',
                    pointBorderColor:'black',
                    pointHoverBorderWidth:3,
                    tension:0.3,
                }
            ]
        }}
        options={
            {
                plugins:{legend:false},
                scales:{
                    x:{ 
                        grid:{
                            display:false,
                        }
                    },
                    y:{
                        grid:{
                            borderDash:[10],
                            
                        }
                    }
                    
                }
            }
        }
    />
       </div> 
    );   
    
    
}

export default LineChart;