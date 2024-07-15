// Get the login and signup forms
const loginForm = document.getElementById('login-form');
const signUpForm = document.getElementById('signup-form');

// Get the login and signup buttons
const loginBtn = document.getElementById('login-btn');
const signUpBtn = document.getElementById('signup-btn');

// Get the response divs
const loginResponseDiv = document.getElementById('login-response');
const signUpResponseDiv = document.getElementById('signup-response');

// Login functionality
loginBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Make a POST request to the API
  fetch('localhost:5000/api/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
 .then(response => response.json())
 .then(data => {
    if (data.success) {
      loginResponseDiv.innerHTML = 'Login successful!';
      // Navigate to the next page
      window.location.href = 'store.ejs';
    } else {
      loginResponseDiv.innerHTML = 'Login failed';
    }
  })
 .catch(error => {
    loginResponseDiv.innerHTML = 'Error: ' error.message;
  });
});

// Signup functionality
signUpBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const repeatPassword = document.getElementById('psw-repeat').value;

  if (password!== repeatPassword) {
    signUpResponseDiv.innerHTML = 'Passwords do not match';
    return;
  }

  // Make a POST request to the API
  fetch('localhost:5000/api/users/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
 .then(response => response.json())
 .then(data => {
    if (data.success) {
      signUpResponseDiv.innerHTML = 'Sign up successful!';
      // Navigate to the next page
      window.location.href = 'store.ejs';
    } else {
      signUpResponseDiv.innerHTML = 'Sign up failed';
    }
  })
 .catch(error => {
    signUpResponseDiv.innerHTML = 'Error: ' error.message;
  });
});