//your code here
function count(){
var x = document.getElementById("wordCount").value;
console.log(x)
console.log(x.length);
if(x.length!=0){


var y = x.split(" ");


document.getElementById("test").innerHTML=(y.length);
}
else{
    document.getElementById("test").innerHTML=0;
}
}
