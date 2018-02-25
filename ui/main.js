console.log('Loaded!');

var buton = document.getElementById("counter");



buton.onclick=function(){
    
    var request = new XMLHttpRequest();
    request.onreadystatechange=function(){
        if(request.readyState=== XMLHttpRequest.DONE){
            if(request.status===200)
            {
                counter+=1;
                var span =document.getElementById("count");
                span.innerHTML=counter.toString(); 
            }
        }
    };
    //render counter value in correct span
   request.open('GET',"http://sivavaraprasad97.imad.hasura-app.io/counter",'true');
   request.send(null);
};
