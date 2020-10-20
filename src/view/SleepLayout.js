import React, { Component } from 'react';
import LineGraph from '../component/Chart_com';
import LineGraph_2 from '../component/Chart_com2';
import '../App.css'
import LineGraph_step from '../component/Chart_step';
import LineGraph_pie from '../component/Pie_com';

export default class SleepLayout extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const data = this.props.data;
        if (data.isnotnull && this.props.isUse){
            var m = 0;
            var isbelow = false;
            for(var i=0;i<data['rmssd_5min'].length;i++){
                if(data['rmssd_5min'][i]>m){
                    m = data['rmssd_5min'][i];
                }
                if(data['rmssd_5min'][i]<40){
                    isbelow = true;
                }
            }
            return (
                <div>
                    <div>
                        <div className='graph_container'>
                            <LineGraph graph={this.props.data.graph} data={this.props.data} />
                            <div className='mini_container'>
                                <h2>{ data['mini_1']['hr_5min'] } bpm</h2>
                                <p>lowest</p>
                            </div>
                            <div className='mini_container'>
                                <h2>{ data['mini_2']['hr_5min'] } bpm</h2>
                                <p>average</p>
                            </div>
                        </div>
                        <div className='graph_container'>
                            <LineGraph_2 graph={this.props.data.graph2} data={this.props.data} />
                            <div className='mini_container'>
                                <h2>{ data['mini_1']['rmssd_5min'] } bpm</h2>
                                <p>average</p>
                            </div>
                            <div className='mini_container'>
                                <h2>{ m } bpm</h2>
                                <p>max</p>
                            </div>
                            {(isbelow) && <div className='mini_container'><h2 style={{color:'red'}}>Rmssd below threshold ! ! !</h2></div>}
                        </div>
                    </div>
                    <div>
                        <div className='graph_container'>
                            <LineGraph_step graph={this.props.data.graph3} data={this.props.data} />
                            <div style={ {width:"45%" , height:"45%",marginTop:"20px"}}>
                                <LineGraph_pie data={this.props.data} />
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
       else{
            return <div />
        }
    }
}