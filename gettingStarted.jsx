import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css';

import Example from './components/example/Example';
import Header from './components/header/Header';

/* Render the Header and Example components */
ReactDOM.render(
    <>
        <Header />
        <Example />
    </>,
  document.getElementById('reactapp'),
);
