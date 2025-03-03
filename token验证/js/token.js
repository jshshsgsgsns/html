function isLoggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }
  
  function checkAuth() {
    if (!isLoggedIn()) {
      window.location.href = 'login.html';
    }
  }
  
  window.addEventListener('load', checkAuth);