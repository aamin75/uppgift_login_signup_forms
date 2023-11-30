const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById('signupBtn');
const closeBtnlogin = document.getElementById("closeBtnlogin");

loginBtn.addEventListener('click', () => {
  const loginDia = document.getElementById("loginDialog");
  loginDia.style.display = "block";
});

closeBtnlogin.addEventListener('click', () => {
  const loginDia = document.getElementById("loginDialog");
  loginDia.style.display = "none";
});

signupBtn.addEventListener('click', () => {
  const loginDia = document.getElementById("signupDialog");
  loginDia.style.display = "block";
});