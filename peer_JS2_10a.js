//step 1
var value = 42;

//step 2
if(value >= 53) {
	value += 42;
} else {
	value -= 13;
}

//step 3
var a = "11";
value = value + a;

console.log(value)

//step 4
var i = 0;
var array = [];
	for(i = 0; i < value.length; i++){
		array.push(value[i]);
	}
console.log(array)

//step 5
array.shift();
array.pop();

console.log(array)

//step 6
var j;
var stringNum = "";
for(j = (array.length - 1); j >= 0; j--){
	stringNum += array[j];
}

console.log(stringNum)

//step 7

value = parseInt(value)
stringNum = parseInt(stringNum)

console.log(stringNum)
console.log(value)

//step 8

value = value + stringNum;

//step 9

if(value < 60) {
	value = 14;
} else if ( value == 2930) {
	value = 27;
} else {
	value =2;
}

console.log(value);

//step 10

var k = 10;
while (k>0) {
	value++;
	k--;
}

console.log(value);

//step 11

function prime(val){
	val=val.toString();
	val=val.slice(1,2);
	return val;
}

value = prime(value);

console.log(value);

document.write(value);

