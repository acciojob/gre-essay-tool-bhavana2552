//your code here
function count(){
 var a = document.getElementById("wordCount").value;
 const b = a.split(" ");
 console.log(a.length);
 if(a.length<1){
    document.getElementById("test").innerHTML=0;

 }
  var c=0;
  if(b.length!=0){
    for(var i=0;i<b.length;i++){
        if(b[i]!=""){
            c=c+1;
            document.getElementById("test").innerHTML=c; 
        }
    }
  }
}
