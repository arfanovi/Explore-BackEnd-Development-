// client/script.js
document.addEventListener('DOMContentLoaded', () => {
    fetch('/api')
      .then(response => response.text())
      .then(data => {
        document.getElementById('response').textContent = data;
      })
      .catch(error => console.error('Error fetching data:', error));
  });
  