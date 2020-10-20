import Chart from 'chart.js';
import React, { Component } from 'react';
export default class LineGraph_2 extends Component {
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
        var ctx = document.getElementById('myChart2').getContext('2d');
        var myChart2;
        const data = this.props.data;
        const graph = this.props.graph;
        var isstepped = false;
        var colors =[];
        
        
        if(graph === "rmssd_5min"){
            
            for(var i=0;i<data[graph].length;i++){
                if(data[graph][i]<40){
                    colors.push('rgba(237, 28, 5, 1)');
                }
                else{
                    colors.push('rgba(101, 198, 240, 1)');
                }
            }
        }
        else{

            colors.push('rgba(101, 198, 240, 1)');
            
        }
        if(window.myChart2 instanceof Chart) window.myChart2.destroy();
        window.myChart2 = new Chart(ctx, {
            type: "line",
            data: {
                //Bring in data
                labels:data.time_step ,
                
                datasets: [
                    {
                        label: graph,
                        data: data[graph],
                        steppedLine: isstepped,
                        backgroundColor : colors,
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
                }
            }
        });
    }
    render(){
        return (
            <canvas id="myChart2"></canvas>
        );
    }
}