 
 
  
  
 
 
 
  
  var email = document.getElementById("email");
  var btn = document.getElementById("ok");
  var msg = document.getElementById("message");
   
   
  btn.addEventListener('click',function(){
	   var reg = /^([a-z0-9\.-]+)@([a-z0-9\.]+)\.[a-z]{2,3}$/ig;
	   var val = email.value
	    var isvalid = reg.test(val);
		
  
      if (isvalid == true){
		  msg.textContent="valid";
        
       }else {msg.textContent="Not valid";}
  }); 
  
   
   
  
  

  
 
 

 
 