import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Link } from "react-router-dom";

// Import necessary components
import Example from './components/example/Example';
import States from './components/states/States';
import Header from './components/header/Header';
import './styles/main.css';

// Define the Main component
function Main() {
    return (
        <HashRouter>
            <Header />
            <div className="toolbar">
                <button className="tool-button"><Link to="/example">Example</Link></button>
                <button className="tool-button"><Link to="/states">States</Link></button>
            </div>
            <Route path="/example" component={Example}/>
            <Route path="/states" component={States}/>
        </HashRouter>
    );
}

// Render the Main component into our DOM
ReactDOM.render(
    <Main/>,
    document.getElementById('reactapp'),
);
