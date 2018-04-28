import React from 'react';
import ReactDOM from "react-dom";

export default class extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            c : props.character,
            d : props.data,
        };
    }
    
    render() {
        //console.log(this.state.c);
        return (
            
            <div className={this.state.c}>
            {
                Object.values(this.state.d).map((value)=>{
                    //console.log(value.name);
                    <li>value.name</li>
                })
            }
            </div>

        )
    }
}