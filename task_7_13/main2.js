let text = document.getElementById("text");
text.style.background="yellow";
text.style.height ="50px";
text.style.width = "250px";
text.style.border = "1px solid black";
text.style.textAlign ="center";

text.onmouseover= function () {
  text.textContent = "New Text";
}

text.onmouseout= function () {
  text.textContent="Hello World !";
}