import React from 'react';

export default class extends React.Component {
    
    render() {
        return (
            
            <div className={this.state.c}>
            {
                this.props.data.map((item) => <span key={item.id}>{item.name}，</span>)
            }
            </div>

        )
    }
}