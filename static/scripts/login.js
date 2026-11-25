/*
Student ID: 26015839D
Student Name: Chui Chun Hei
*/

const btnLogin = document.getElementById('btn-login');
const inputUsername = document.getElementById('username');
const inputPassword = document.getElementById('password');

btnLogin.addEventListener('click', async () => {
  const username = inputUsername.value.trim();
  const password = inputPassword.value;

  if (!username || !password) {
    alert('Username and password cannot be empty');
    return;
  }

  const response = await fetch('/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: username,
      password: password
    })
  });

  const data = await response.json();

//TODO: Change to /home.html in the next section
  if (response.ok && data.user) {
    alert(`Logged in as ${data.user.username} (${data.user.role})`);
    window.location.href = '/home.html';
  } else if (data.message) {
    alert(data.message);
  } else {
    alert('Unknown error');
  }
});
