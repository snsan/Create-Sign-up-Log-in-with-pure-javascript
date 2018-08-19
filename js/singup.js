document.getElementById('btn_signup').onclick = function(){
      var username = document.getElementById('username').value;
      var password = document.getElementById('password').value;
      var c_password = document.getElementById('c_password').value;
      if(c_password !=  password && !username){
         alert("Password are not match");
      }else{
          var user = {
             username: username,
             password: password
          }
             
            insertQuery("users",user,function(resp){
              if(resp.status == 0){
                window.location.href = 'index.html';                
              }else{
                alert("Error occured: ",resp.data);
                console.log(resp.data);
              }
            
            });
            
        //  
      }
}
