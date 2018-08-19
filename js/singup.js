document.getElementById('btn_signup').onclick = function(){
      var username = document.getElementById('username').value;
      var password = document.getElementById('password').value;
      var c_password = document.getElementById('c_password').value;
      if(c_password !=  password){
         alert("Password are not match");
      }else{
          window.location.href = 'index.html';
      }
}
