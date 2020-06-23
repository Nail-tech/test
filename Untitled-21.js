//to String

console.log(typeof(string(4)));
console.log(typeof("" + false));
console.log('https:vk.com/catalog' + 5));

//  to number

console.log(typeof(Number('5')));

console.log(typeof(5 + +'5'));

console.log(typeof(parseInt('15px', 10)));

let ans = +prompt("Hello?", '');

//0, '', null, undefined, NaN - false
//1
let switcher = null;

if (switcher) {
    console.log("Working..")     
    }

 switcher = 1;

 if (switcher) {
    console.log("Working..")     
    }
//2
    console.log(typeof(Boolean('5')));
//3
console.log(typeof(!!'5'));