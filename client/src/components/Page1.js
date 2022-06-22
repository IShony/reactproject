
import {Link} from "react-router-dom";
import React from 'react'
import ca from '../components/graphs/ca.json'
import uvs from '../components/graphs/uvs.json'

import { Component } from "react"
import { MDBContainer } from "mdbreact"
import { Line, Pie } from "react-chartjs-2"

import {Chart as ChartJS, CategoryScale, ArcElement, PointElement, Tooltip, LinearScale, LineElement, Title, Legend} from 'chart.js';


ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, ArcElement, Title, Tooltip, Legend);



export class Page1 extends Component {

	graph1 = {
		dataLines1: {
			labels: uvs.uvs.map(uvs=>uvs.date),
			datasets: [
				{			
				label: 'Évolution des UV',
				borderColor: 'rgb(255, 120, 139)',
				backgroundColor: 'rgba(255, 120, 139, 0.5)',
				data: uvs.uvs.map(i=>i.uv),
				}
			]
		},
	};
	graph2 = {	
		dataLines2: {
			labels: ca.ca.map(i=>i.s),
			datasets: [
				{			
				label: '# of Votes',
				data: ca.ca.map(i=>i.ca),
				backgroundColor: [
				  'rgba(255, 120, 139, 0.2)',
				  'rgba(31, 182, 224, 0.2)',
				  'rgba(250, 220, 90, 0.2)',
				  'rgba(70, 190, 190, 0.2)',
				  'rgba(150, 100, 255, 0.2)',
				  'rgba(255, 168, 59, 0.2)',
				],
				borderColor: [
                    'rgba(255, 120, 139, 0.2)',
                    'rgba(31, 182, 224, 0.2)',
                    'rgba(250, 220, 90, 0.2)',
                    'rgba(70, 190, 190, 0.2)',
                    'rgba(150, 100, 255, 0.2)',
                    'rgba(255, 168, 59, 0.2)',
				],
				borderWidth: 10,
				}
			]
		}
	}

	render(){
		return(
            <div>
			<MDBContainer>
				<Line options={{responsive: true}} data={this.graph1.dataLines1} />
				<Pie options={{responsive: true}} data={this.graph2.dataLines2} />
			</MDBContainer>
            
            <p><Link to="/">Home - page 1</Link></p>
            <p><Link to="/page2">Page 2</Link></p>
            <p><Link to="/page3">Page 3</Link></p>
            </div>
		)
	}
	
}
  
export default Page1