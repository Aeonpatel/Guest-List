var Guest_names_array=[];
function submit_name(){
var Guest_name=document.getElementById("names").value;
Guest_names_array.push(Guest_name);
document.getElementById("submitted_names").innerHTML=Guest_names_array;
console.log(Guest_names_array);
var check_length=Guest_names_array.length;
console.log(check_length)
}
function show_names(){
//var a = Guest_names_array.join("<br");
//console.log(Guest_names_array);
//document.getElementById("Show_names").innerHTML = a;
var a= Guest_names_array.join("<br>");
console.log(Guest_names_array);
document.getElementById("Show_names").innerHTML=a;
}
function sort_names(){
Guest_names_array.sort();
var b= Guest_names_array.join("<br>");
console.log(Guest_names_array);
document.getElementById("sorted_names").innerHTML=b;
}
function search_name(){
var y =document.getElementById("search").value;
var found=0;
var i;
for(i=0;i<Guest_names_array.length;i++){
if(y==Guest_names_array[i]){
found= found+1;
}
}
document.getElementById("searched_name").innerHTML="name found"+found+"time/s";
console.log("name found"+found+"time/s");
}