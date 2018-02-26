console.log('Loaded!');

var buton = document.getElementById("counter");



buton.onclick=function(){
    
    var request = new XMLHttpRequest();
    request.onreadystatechange=function(){
        if(request.readyState=== XMLHttpRequest.DONE){
            if(request.status===200)
            {
                var counter=request.responseText;
                var span =document.getElementById("count");
                span.innerHTML=counter.toString(); 
            }
        }
    };
    //render counter value in correct span
   request.open('GET',"http://sivavaraprasad97.imad.hasura-app.io/counter",'true');
   request.send(null);
};

var submit=document.getElementById("submit_btn");
submit.onclick=function(){
    
    var request = new XMLHttpRequest();
    request.onreadystatechange=function(){
        if(request.readyState=== XMLHttpRequest.DONE){
            if(request.status===200)
            {
                var names=request.responseText;
                names=JSON.parse(names);
                var list='';
                for(var i=0;i<names.length;i++){
                    list+='<li>'+'Date:'+Date()+'<br>'+names[i]+'</li>';
                }
                var ul=document.getElementById("list");
                ul.innerHTML=list;
            }
        }
    };
    //render counter value in correct span
   var input=document.getElementById("nameinput");
   var inputvalue = input.value;
   request.open('GET',"http://sivavaraprasad97.imad.hasura-app.io/submit-name/"+inputvalue,'true');
   request.send(null);
};
    
    
    


