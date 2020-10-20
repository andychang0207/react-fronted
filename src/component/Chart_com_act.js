import Chart from 'chart.js';
import React, { Component } from 'react';
export default class LineGraph_act extends Component {
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
        var ctx = document.getElementById('myChart5').getContext('2d');
        const data = this.props.data;
        var colors = [];
        var label = [];
        for(var i=0;i<data['met_1min'].length;i++){
            if (data['met_1min'][i] < 1.05){
                colors.push('#cced93');
            }
            else if (data['met_1min'][i] >= 1.05 && data['met_1min'][i] < 3){
                colors.push('#85a352');
            }
            else if (data['met_1min'][i] >= 3 && data['met_1min'][i] < 7){
                colors.push('#536337');
            }
            else{
                colors.push('#2b4006');
            }
            label.push(Date.parse(data['day_start']) + i*60*1000);
        }
        if(window.mychart5 instanceof Chart) window.mychart5.destroy();
        window.mychart5 = new Chart(ctx, {
            type: "bar",
            data: {
                //Bring in data
                labels:label,
                datasets: [
                    {
                        data : data['met_1min'],
                        backgroundColor : colors 
                    }
                ]
            },
            options: {
                //Customize chart options
                scales:{
                    xAxes:[{
                        type:'time',
                        time:{
                            unit:'minute',
                            max:Date.parse(data['day_end']),
                            min:Date.parse(data['day_start'])
                        }
                    }],
                    yAxes:[{
                        ticks:{
                            min:0,
                            stepSize:0.05,
                            callback:function(value,index,values){
                                
                                if(value == 0){
                                    return 'inactive';
                                }
                                else if(value == 1.05){
                                    return 'low';
                                }
                                else if(value == 3){
                                    return 'medium';
                                }
                                else if(value == 7){
                                    return 'high';
                                }
                                
                            }
                        }
                    }]
                }
            }
        });
    }
    render(){
        return (
            <canvas id="myChart5"></canvas>
        );
    }
}