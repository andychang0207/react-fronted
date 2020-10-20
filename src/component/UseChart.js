import React from 'react';
import LineGraph from './Chart_com';

function UseChart (prop){
    const layout = prop.isLayout;
    const data = prop.data
    if(layout){
        return <LineGraph />
    }else {
        return <div></div>
    }
}
export default UseChart;