import Chart from 'chart.js';
import React, { Component } from 'react';
export default class LineGraph_pie extends Component {
    constructor(props){
        super(props);
        //this.chartRef = React.createRef();
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        if(prevProps.data !== this.props.data){
            this.componentDidMount();
        }
    }
    componentDidMount() {
        //const myChartRef = this.chartRef.current.getContext("2d");
        var ctx = document.getElementById('myChart4').getContext('2d');
        var mychart3;
        const data = this.props.data;
        if(window.mychart4 instanceof Chart) window.mychart4.destroy();
        window.mychart4 = new Chart(ctx, {
            type: "doughnut",
            data: {
                //Bring in data
                labels: [
                    'Deep',
                    'Light',
                    'Rem',
                    'Awake'
				],
                datasets: [
                    {
                        data: data['pie'],
                        backgroundColor : ['#063a8a','#516f9c','#aecaf5','#e6e3e3']
                    }
                ]
            },
            options: {
                //Customize chart options
                legend: {
					position: 'right',
                },
                tooltips: {
                    callbacks: {
                        label: function (tooltipItem, d) {
                            var dataset = d.datasets[tooltipItem.datasetIndex];
                            //計算總和
                            var sum = dataset.data.reduce(function (previousValue, currentValue, currentIndex, array) {
                                return previousValue + currentValue;
                            });
                            var currentValue = dataset.data[tooltipItem.index];
                            var percent = Math.round(((currentValue / sum) * 100));
                            return " " + d.labels[tooltipItem.index] + ": " + percent + " %";
                        }
                    }
                },
                
            }
        });
    }
    render(){
        return (
            <canvas id="myChart4"></canvas>
        );
    }
}