// ES6 Module = An external file that contains reusable code
//            that can be imported into other JavaScript files
//            Can contain variables, classes, functions... and more
//            Introduced as part of ECMAScript 2015 update

// --------- index.js ---------

// --------- mathutil.js ---------

import {PI, getCircumference, getArea, getVolume} from '../every_js/mathUtil.js';

console.log(PI);

const Circumference = getCircumference(10);

console.log(`${Circumference.toFixed(2)}cm`);


// import {} from '../every_js/mathUtil.js'