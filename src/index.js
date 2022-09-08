import React from 'react';
import ReactDOM from 'react-dom/client';

import Car from './classes/Car';

const myFirstElement = <h1>Hello world!!!!!!!!</h1>
const root = ReactDOM.createRoot(document.getElementById('root'));

Car c=new Car("Tabartod");
root.render(c.show());
