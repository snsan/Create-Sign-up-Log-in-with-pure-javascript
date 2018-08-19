
document.getElementById('btn_signin').onclick = function(){
      var username = document.getElementById('username').value;
      var password = document.getElementById('password').value;
    selectQuery("users","username",username,function(resp){
          if(resp.status == 0){
              window.location.href = 'success.html';  
          }else{
          
            alert("username does not exist.");
          }     
    }); 
     

};
