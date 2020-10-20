import { DatePicker } from 'antd';
import React, { Component } from 'react';
import 'antd/dist/antd.css';
import  HttpUtil  from '../utils/httputil';
import  ApiUtil  from '../utils/apiutil';

const { RangePicker } = DatePicker;

class Andy_picker extends Component{
    constructor(props){
        super(props);
        this.handlechange = this.handlechange.bind(this);
    }
    handlechange(value,datestr) {
        console.log(`selected ${value}`);
        this.props.change(value);
    }
    render(){
        return (
                <>
                    <RangePicker
                    dateRender={current => {
                        const style = {};
                        return (
                        <div className="ant-picker-cell-inner" style={style}>
                            {current.date()}
                        </div>
                        );
                    }}
                    onChange = {this.handlechange}
                    />
                </>
        );
    }
}



export default Andy_picker;
