console.log('Loaded!');

var element = document.getElementById("text");
var image = document.getElementById("madi");

element.innerHTML="NEW VALUE";
var marginLeft = 0;
function moveRight(){
    
    marginLeft+=5;
    
    image.style.marginLeft = marginLeft + "px";
}

image.onclick = function() {
    var interval = setInterval(moveRight,50);
};