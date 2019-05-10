import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './index.css';

const greetings: string = 'Hello world!';
ReactDOM.render(
  <h1>{ greetings }</h1>, 
  document.getElementById('root')
);