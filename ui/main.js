console.log('Loaded!');

var element = document.getElementById("text");
var image = document.getElementById("madi");

element.innerHTML="NEW VALUE";
var marginRight = 0;
function moveLeft(){
    
    marginRight+=10;
    
    image.style.marginRight = marginRight + "px";
}

image.onclick = function() {
    var interval = setInterval(moveLeft,50);
};