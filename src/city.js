import React from 'react';
import ReactDOM from "react-dom";
import cityList from './cityList';
import CityBox from './cityBox';

export default class extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            city: cityList.mycityList,
        };
    }
    
    render() {
        let $city = this.state.city;

        return (
            <ul className="allCity">
            {
                Object.keys($city).sort().map((item) => {
                    return (
                        <li key={item}>
                            <h3>{item}</h3>
                            <CityBox data={$city[item]}/>
                        </li>
                    )
                })
            }
            </ul>
        )
    }
}