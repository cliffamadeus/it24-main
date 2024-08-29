$(document).ready(function() {
  const contentDiv = $('#content');

  // Initial content to display when the SPA loads
  loadContent('home'); // Assuming 'home' is the default view

  // Handle navigation links
  $('nav a').on('click', function(event) {
      event.preventDefault();
      const target = $(this).attr('href').substr(1); // Remove the '#' symbol
      navigateTo(target);
  });

  // Function to update the URL and content
  function navigateTo(viewName) {
      // Update the URL without triggering a page reload
      history.pushState(null, null, `#${viewName}`);
      
      // Load content based on the viewName
      loadContent(viewName);
  }

  // Function to load content into the main container
  function loadContent(viewName) {
      contentDiv.fadeOut(200, function() {
          contentDiv.load(`views/${viewName}.html`, function() {
              contentDiv.fadeIn(200);
          });
      });
  }

  // Handle back/forward buttons
  $(window).on('popstate', function() {
      const path = location.hash.substr(1); // Remove the '#' symbol
      loadContent(path || 'home'); // Load 'home' if no hash
  });

  // Load initial content based on the current URL
  const initialPath = location.hash.substr(1) || 'home'; // Default to 'home'
  loadContent(initialPath);
});
