
document.getElementById('btn_signin').onclick = function(){
      var username = document.getElementById('username').value;
      var password = document.getElementById('password').value;
      if(username == 'admin' && password == '123'){
          alert("Login Success");
          window.location.href = 'success.html';
      }else{
         alert("username and password does not exist.");
      }

};
