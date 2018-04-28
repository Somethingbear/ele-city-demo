import React from 'react';
import ReactDOM from "react-dom";
import cityList from './cityList';

export default class extends React.Component {

    constructor(props){
        super(props);
    }
    
    render() {
        console.log("aaaaaaaaa");
        return (
            <div className="city"></div>
        )
    }
}