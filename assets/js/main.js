$(document).ready(function() {

  // Naivigation Menu
  var menuToggle = $('#js-mobile-menu').unbind();
  $('#js-navigation-menu').removeClass("show");

  menuToggle.on('click', function(e) {
    e.preventDefault();
    $('#js-navigation-menu').slideToggle(function(){
      if($('#js-navigation-menu').is(':hidden')) {
        $('#js-navigation-menu').removeAttr('style');
      }
    });
  });

  // Selectize
  $('#input-tags2').selectize({
    plugins: ['remove_button', 'restore_on_backspace'],
    delimiter: ',',
    persist: false,
    create: function(input) {
      return {
        text: input,
        value: input
      }
    }
  });

});
