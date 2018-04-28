import React from 'react';
import ReactDOM from "react-dom";
import City from './city';

window.onload = function() {
    ReactDOM.render(
        <div>
            <City />
        </div>,
        document.getElementById('root')
    );
};