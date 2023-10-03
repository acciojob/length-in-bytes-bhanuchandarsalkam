const byteSize = (str) => {
  // write your code here
	let size= new Blob([str]).size;
	return size;
};
const str = prompt("Enter some string.");
alert(byteSize(str));

