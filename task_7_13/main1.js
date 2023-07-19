// task1//
let container = document.getElementById("container");

container.style.background = "blue";
container.style.height = '150px';
container.style.width = '150px';
container.style.border = "1px solid black";

container.onmouseover= function(){
  container.style.background = "red";

};

container.onmouseout= function(){
  container.style.background = "blue";

};