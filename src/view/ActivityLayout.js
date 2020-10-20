import React,{Component} from 'react';
import LineGraph_act from '../component/Chart_com_act';

export default class ActivityLayout extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const data = this.props.data;
        if (data.isnotnull && this.props.isUse){
            return(
                <div>
                    <div className='graph_container'>
                        <LineGraph_act data={this.props.data} />
                    </div>
                </div>
            )
        }
        else{
            return <div />
        }
    }
}