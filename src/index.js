import _ from 'lodash';
import './style.css';
import './progressbar/progressbar.js';

function component() {
    const header = document.createElement('header');
    header.innerHTML = '';
   const element = document.body.appendChild(header);
   return element;
}


document.body.appendChild(component());