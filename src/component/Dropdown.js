import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Select } from 'antd';
import  HttpUtil  from '../utils/httputil';
import  ApiUtil  from '../utils/apiutil';

const { Option } = Select;

class Dropdown extends Component{
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(value) {
    console.log(`selected ${value}`);
    this.props.change(value);
  }
  render(){
    return (
      <>
        <Select defaultValue="Select data type" style={{ width: 120 }} onChange={this.handleChange}>
          <Option value="Sleep">Sleep</Option>
          <Option value="Readiness">Readiness</Option>
          <Option value="Activity">Activity</Option>
        </Select>
      </>
    );
  }
}
export default Dropdown;