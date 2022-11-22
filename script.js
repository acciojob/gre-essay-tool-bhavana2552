//your code here
function count(){
var x = document.getElementById("wordCount").value;
console.log(x);
if(x.length!=0){


var y = x.split(" ");
console.log(y.length);


document.getElementById("test").innerHTML=(y.length);
}
}
