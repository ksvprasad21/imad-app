console.log('Loaded!');

var buton = document.getElementById("counter");

var counter=0;

buton.onclick=function(){
    //render counter value in correct span
    counter+=1;
    var span =document.getElemntById("count");
    span.innerHTML=counter.toString();
};
