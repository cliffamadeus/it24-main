$(document).ready(function() {
    const contentDiv = $('#content');
    
    // Initial content to display when the SPA loads
    contentDiv.load('views/home.html');
    
    // Handle navigation links
    $('nav a').on('click', function(event) {
        event.preventDefault();
        
        const target = $(this).attr('href').substr(1); // Remove the '#' symbol
        loadContent(target);
    });
    
    // Function to load content into the main container
    function loadContent(viewName) {
        contentDiv.fadeOut(200, function() {
            contentDiv.load(`views/${viewName}.html`, function() {
                contentDiv.fadeIn(200);
            });
        });
    }
});

 // Function to update the URL and content
 function navigateTo(path) {
    // Use pushState to update the URL without triggering a page reload
    history.pushState(null, null, path);

    // Load content based on the path (you would replace this with your own logic)
    loadContent(path);
  }

  