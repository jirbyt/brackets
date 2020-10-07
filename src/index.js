module.exports = function check(str, bracketsConfig) {
let arrBrackets = [];
let arr =[];
for(let i =0; i < bracketsConfig.length; i++){
arrBrackets[i] = arr.concat(bracketsConfig[i]).join('');
}
arr=arrBrackets.join('').split('');

let arrStr = str.split('');
let strStack ='';
let flag = false;

for(let i = 0; i<arrStr.length; i++ ) {
for(let j = 0; j<arr.length; j++ ) {

if(arrStr[i]===arr[2*j] && arr[2*j] !==arr[2*j+1]){
strStack+=arrStr[i]}

else if(arrStr[i]===arr[2*j+1] && arr[2*j] !==arr[2*j+1] && arr[2*j] === strStack.split('')[strStack.length-1]){
strStack = strStack.slice(0, strStack.length-1)}

else if(arrStr[i]===arr[2*j+1] && arr[2*j] !==arr[2*j+1] && arr[2*j] !== strStack.split('')[strStack.length-1]){
return false}



else if(arr[2*j] ===arr[2*j+1] && arrStr[i]===arr[2*j]){
if (flag === false){
strStack+=arrStr[i];
flag=!flag;}
else if (flag === true){
if( arr[2*j] === strStack.split('')[strStack.length-1]) {strStack = strStack.slice(0, strStack.length-1);
flag=!flag}}
}
else false

}
}

return strStack==="" ? true:false
}

