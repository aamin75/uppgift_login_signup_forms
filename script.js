const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");
const strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})');
const mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))');

function loginUser() {
  var username = document.getElementById('loginusername').value;
  var password = document.getElementById('loginpassword').value;

  if (username && password) {
    sessionStorage.setItem('username', username);
    sessionStorage.setItem('password', password);
    window.location.href = 'display.html';
  } else {
    alert('Please enter both username and password.');
  }
};

function measureStrengthness(){
  var password = document.getElementById('signuppassword').value;
  var strengthIndex = document.getElementById('strengthIndex');
  if(strongPassword.test(password)) {
    strengthIndex.style.color = "green";
    strengthIndex.textContent = 'Strong';
  } else if(mediumPassword.test(password)) {
    strengthIndex.style.color = 'blue';
    strengthIndex.textContent = 'Medium';
  } else {
    strengthIndex.style.color = 'red';
    strengthIndex.textContent = 'Weak';
  }
};

function signupUser() {
  var username = document.getElementById('signupusername').value;
  var password = document.getElementById('signuppassword').value;
  var epost = document.getElementById('signupepost').value;
  var fullname = document.getElementById('signupfullname').value;
  var emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (username && password && epost && fullname) {
    if (emailRegex.test(epost)){
      sessionStorage.setItem('username', username);
      sessionStorage.setItem('password', password);
      sessionStorage.setItem('epost', epost);
      sessionStorage.setItem('fullname', fullname);
      window.location.href = 'display.html';
    } else {
      alert("Email used is invalid, enter a valid email");
    }
  } else {
    alert('Please enter all username, email, full name and password.');
  }
};

loginBtn.addEventListener('click', ()=>{
  window.location.href = "login.html";
});

signupBtn.addEventListener('click', ()=>{
  window.location.href = "signup.html";
});