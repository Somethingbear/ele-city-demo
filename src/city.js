import React from 'react';
import ReactDOM from "react-dom";
import cityList from './cityList';
import cityBox from './cityBox';

export default class extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            city: cityList,
        };
    }
    
    render() {
        //console.log(this.state.city);
        let $city = this.state.city.mycityList;

        /*Object.keys($city).map((item)=>{
            Object.values($city[item]).map((v)=>{
                console.log(v.name);
            })
        })*/

        return (
            <div className="allCity">
            {
                Object.keys($city).map((item)=>{
                    <cityBox character={item} data={$city[item]} />
                })
            }
            </div>
        )
    }
}