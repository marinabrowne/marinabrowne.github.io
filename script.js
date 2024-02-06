$(document).ready(function(){
    // Smooth scrolling
    $('a[href^="#"]').on('click', function(event) {
      var target = $(this.getAttribute('href'));
      if( target.length ) {
          event.preventDefault();
          $('html, body').stop().animate({
              scrollTop: target.offset().top
          }, 1000);
      }
    });
  
    // Carousel initialization
    $('#carouselTestimonials').carousel();
  
    // Form submission
    $('#contactForm').submit(function(e){
      e.preventDefault(); // Prevent form submission
      var formData = $(this).serialize(); // Serialize form data
      $.ajax({
        type: 'POST',
        url: 'send_email.php', // URL to your server-side script
        data: formData,
        success: function(response) {
          alert('Message sent successfully!');
          // Clear form fields
          $('#contactForm')[0].reset();
        },
        error: function() {
          alert('Error sending message. Please try again later.');
        }
      });
    });
  });