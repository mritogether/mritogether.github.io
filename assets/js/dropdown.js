$(document).ready(function() {
    // Handle click event on the toggle link
    $('.toggle-dropdown').click(function(e) {
      e.preventDefault();
      
      // Toggle the visibility of the dropdown menu
      var dropdownMenu = $(this).next('.dropdown-menu');
      dropdownMenu.slideToggle('fast');
    });
  });
