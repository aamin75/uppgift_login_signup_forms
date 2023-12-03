const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");

function loginUser() {
  var username = document.getElementById('loginusername').value;
  var password = document.getElementById('loginpassword').value;

  if (username && password) {
      sessionStorage.setItem('username', username);
      sessionStorage.setItem('password', password);
      // alert(username);
      window.location.href = 'display.html';
  } else {
      alert('Please enter both username and password.');
  }
};

function signupUser() {
  var username = document.getElementById('signupusername').value;
  var password = document.getElementById('signuppassword').value;
  var epost = document.getElementById('signupepost').value;
  var fullname = document.getElementById('signupfullname').value;

  if (username && password && epost && fullname) {
      sessionStorage.setItem('username', username);
      sessionStorage.setItem('password', password);
      sessionStorage.setItem('epost', epost);
      sessionStorage.setItem('fullname', fullname);
      // alert(username);
      window.location.href = 'display.html';
  } else {
      alert('Please enter all username, email, full name and password.');
  }
};

loginBtn.addEventListener('click', ()=>{
  window.location = "/login.html";
});

signupBtn.addEventListener('click', ()=>{
  window.location = "/signup.html";
});