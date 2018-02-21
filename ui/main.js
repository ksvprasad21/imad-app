console.log('Loaded!');

var element = document.getElementById("text");
var image = document.getElementById("madi");

element.innerHTML="NEW VALUE";
var marginRight = 10;
function moveLeft(){
    
    image.style.marginRight = marginRight + "px";
}

image.onclick = function() {
    var interval = setInterval(moveLeft,100);
};