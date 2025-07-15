function login() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  if(username === 'indiancsc' && password === 'Sunil@2108') {
    window.location.href = 'admin-panel.html';
  } else {
    document.getElementById('message').innerText = 'Invalid username or password!';
  }
}