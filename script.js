//your code here
function count(){
var x = document.getElementById("wordCount").value;
console.log(x);
var a = 0;
for (var i=0;i<x.length;i++){
    if(x[i]==" "){
        a=a+1;
    }

}
console.log(a);
document.getElementById("test").innerHTML=(a+1);
}
