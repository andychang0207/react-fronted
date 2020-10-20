import Chart from 'chart.js';
import React, { Component } from 'react';
export default class LineGraph_step extends Component {
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
        var ctx = document.getElementById('myChart3').getContext('2d');
        var mychart3;
        const data = this.props.data;
        const graph = this.props.graph;
        if(window.mychart3 instanceof Chart) window.mychart3.destroy();
        window.mychart3 = new Chart(ctx, {
            type: "line",
            data: {
                //Bring in data
                labels:data.time_step ,
                yLabels:['','Deep','Light','Rem','Awake'],
                datasets: [
                    {
                        label: graph,
                        data: data[graph],
                        pointRadius:0,
                        steppedLine:true,
                        backgroundColor : 'rgba(101, 198, 240, 1)',
                        borderColor:'rgba(101, 198, 240, 1)',
                        fill:false,
                    }
                ]
            },
            options: {
                //Customize chart options
                scales:{
                    xAxes:[{
                        ticks:{
                            callback:function(value,index){
                                if(index % 12 == 0){
                                    var res = value.substring(5,10);
                                    var res2 = value.substring(11,17);
                                    return res.concat(res2);
                                }
                            }
                        }
                    }
                    ],
                    yAxes:[{
                        type:'category',
                        ticks:{
                            reverse:true
                        }
                    }]
                }
            }
        });
    }
    render(){
        return (
            <canvas id="myChart3"></canvas>
        );
    }
}