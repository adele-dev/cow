const myDatas = require('./information.js');
const cowsay = require('cowsay');
//console.log(`Hello, I am ${myDatas.name} and I am in ${myDatas.campus} campus`);

console.log(cowsay.say({
	text : `I am ${myDatas.name} in ${myDatas.campus} campus`,
	e : "oO",
	T : "U "
}));

