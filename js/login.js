document.getElementById('loginForm').addEventListener('submit', function(event) {
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const warning = document.getElementById('warning');

  // Hide warning initially
  warning.style.display = 'none';

  // Validate email and password fields
  if (!email || !password) {
      // Show warning message if any field is empty
      warning.style.display = 'block';
      event.preventDefault(); // Prevent form submission
  } else {
      // If both fields are filled, allow submission and redirect
      event.preventDefault(); // Prevent actual form submission

      // Redirect to index.html
      window.location.href = 'index.html';
  }
});
