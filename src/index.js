module.exports = function check(str, bracketsConfig) {
 let p = 0; 



let arrStr = [];
let arr=[];
let arrBrackets = [];
for(let i =0; i < bracketsConfig.length; i++){
arrBrackets[i] = arr.concat(bracketsConfig[i]).join('');
}

arr=arrBrackets.join('').split('');
arrStr = str.split('')

for(let k = 0; k<arr.length; k++ ) {
	
	if(arr[2*k] == arr[2*k+1]) {

		for( let j =0; j<arrStr.length; j++){
			arr[2*k]===arrStr [j] ? p+=1 :  p+=0;
		}
		if (p%2 !==0){return false}
		else {p=0}
	}
	
	else {
		
		for( let j =0; j<arrStr.length; j++){
			arr[2*k]===arrStr [j] ? p+=1 :  p+=0;
			arr[2*k+1]===arrStr [j] ? p-=1 :  p+=0;
			if(p<0){break}
		}
  		if (p<0 || p%2 !==0){return false}
	}
	
}

return true
}

