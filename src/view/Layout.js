import React,{Component} from 'react';
import Dropdown from '../component/Dropdown';
import Andy_picker from '../component/Andy_picker';
import Date_picker from '../component/Andy_date_picker';
import SleepLayout from './SleepLayout';
import  HttpUtil  from '../utils/httputil';
import  ApiUtil  from '../utils/apiutil';
import { Space } from 'antd';
import ActivityLayout from './ActivityLayout';
export default class Layout extends Component{
    constructor(props){
        super(props);
        this.state = {
            summary:"",
            data:false
        }
        this.changesummary = this.changesummary.bind(this);
        this.changedate = this.changedate.bind(this);
    }
    async changesummary(value){
       await this.setState({summary:value});
       HttpUtil.post(ApiUtil.API_DROPDOWN_UPDATE ,value)
       .then(re=>{
         this.setState({data:re})
       });
    }
    async changedate(value){
        await this.setState({date:value});
        HttpUtil.post(ApiUtil.API_DATE_UPDATE ,value)
        .then(re=>{
          this.setState({data:re})  
        });
    }
    render(){
        let UseSleep = false;
        let UseRead = false;
        let UseAct = false;
        
        if(this.state.summary === "Sleep"){
            UseSleep = true;
            UseRead = false;
            UseAct = false;
        }else if(this.state.summary === "Readiness"){
            UseSleep = false;
            UseRead = true;
            UseAct = false;
        }else if(this.state.summary === "Activity"){
            UseSleep = false;
            UseRead = false;
            UseAct = true;
        }else{
            UseSleep = false;
            UseRead = false;
            UseAct = false;
        }
        return (
            <div>
              <h1>Testing</h1>
              <div className="container">
                <Dropdown change = {this.changesummary} />
                <Space size={12}>
                <Date_picker change = {this.changedate} />
                </Space>
              </div>
              <SleepLayout isUse = {UseSleep} data = {this.state.data}/>
              <ActivityLayout isUse = {UseAct} data = {this.state.data} />
            </div>
          );
    }
}