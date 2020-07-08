$(document).ready(function(){


    $('form').submit(function(e) {
      e.preventDefault();
      $.ajax({
          type: "POST",
          url: "mailer/smart.php",
          data: $(this).serialize()
      }).done(function() {
          $(this).find("input").val("");
          $('#consultatieon, #ordeer').fadeOut();
          $('.oveerlay, #theanks').fadeIn('slow');

          $('form').trigger('reset');
      });
      return false;
  });
});
      