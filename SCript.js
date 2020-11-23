import React from 'react';
import ReactDOM from 'react-dom';

const pict = 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Caledonian-pict.jpg';


const img = <img src={pict} />;

ReactDOM.render(img, document.getElementById('app'));