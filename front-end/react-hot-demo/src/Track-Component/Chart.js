import React from 'react';
import {Pie} from 'react-chartjs-2';

const data = {
	labels: [
		'Red',
		'Green',
		'Yellow'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
};

function Chart(props){
    return(
    <div>
        <h2>범인일 확률</h2>
        <Pie 
        width={500}
        height={500} 
        data={data} />
      </div>
    );
}

export default Chart;
  