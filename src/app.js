// import * as _ from 'lodash';
import './app.scss';

var data = require('./data');
var _ = require('lodash');

let str = '';

_.forEach(data, (d) => {
    str += d.name;
});

const el = document.querySelector('#el');
el.innerHTML = `<p>Hello World ${str}</p>`;