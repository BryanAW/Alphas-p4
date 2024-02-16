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
    // State is used to keep track of the current view
    const [curView, setCurView] = React.useState('Example');

    // Function to switch the views
    const switchView = () => {
        setCurView(curView === 'Example' ? 'States' : 'Example');
    };

    const buttonText = curView === 'Example' ? 'Switch to States' : 'Switch to Example';

    // Rendering the Header and the current view
    return (
        <>
            <Header />
            <button onClick={switchView}>{buttonText}</button>
            {curView === 'Example' ? <Example /> : <States />}
        </>
    );
}

// Render the Main component into our DOM
ReactDOM.render(
    <Main />,
    document.getElementById('reactapp'),
);
