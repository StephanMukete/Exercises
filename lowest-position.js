function lowestNumbers(array) {
    let output = []
	//loop through array
	for(let i = 0;  i <= array.length; i++){
		if(array[i] === Math.min.apply(null, array)){
		output.push(i);
}
}
return output;
}

   console.log(lowestNumbers([ 0, -7, 3, -7, 1, 2]))