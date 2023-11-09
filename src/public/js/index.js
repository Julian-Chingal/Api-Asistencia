navbarUrl = 'navbar.html';

fetch(navbarUrl)
      .then(response => response.text())
      .then(html => {
        document.getElementById('navbar-container').innerHTML = html;
      });