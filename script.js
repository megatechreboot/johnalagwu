$(document).ready(function() {
      $('#hamburger').click(function() {
        $('.nav-links').toggleClass('active');
        $(this).hide();
        $('#hamburgerX').show();
      });
      $('#hamburgerX').click(function() {
        $('.nav-links').removeClass('active');
        $(this).hide();
        $('#hamburger').show();
      });
      
      //collapse only links that are not submenu
      $('.nav-links a:not(.has-submenu)').click(function(event) {
        const target = $(this).attr('href');
        
       // prevent default only for #
        if (target.startsWith('#')) {
          event.preventDefault();
          $('html,body').animate({scrollTop: $(target).offset().top }, 500);
        }
        
        //close sidebar
        $('.nav-links').removeClass('active');
        $('#hamburger').show();
        $('#hamburgerX').hide();
      });
        $('#hamburgerX').hide();
        
        //toggling submenu
        $('#submenuToggle').click(function(e) {
          e.preventDefault();
          $('#submenu').toggle();
        });
    });
    
    //FAQ toggle
    
    const faqQue = document.querySelectorAll('.faq-question');
    
    faqQue.forEach(question => {
      question.addEventListener('click', () => {
        question.classList.toggle('active');
        
        const answer = question.nextElementSibling;
        answer.classList.toggle('open');
      });
      
      $(document).on('click', function (event) {
      const $target = $(event.target);
      

      // === 1. Close nav-links if click is outside nav-links and hamburger buttons
      if (
        !$target.closest('#nav-links').length &&
        !$target.closest('#hamburger').length &&
        !$target.closest('#hamburgerX').length
      ) {
        $('#nav-links').removeClass('active'); // assumes 'active' class is used to show nav
        $('#hamburgerX').hide();
        $('#hamburger').show();
      }

      // === 2. Close submenu if click is outside submenu or its toggle
      if (
        !$target.closest('#submenu').length &&
        !$target.closest('#submenuToggle').length
        ) {
        $('#submenu').hide();
      }
    });
    
    

    // === 3. Collapse submenu if a submenu link is clicked
    $('#submenu a').on('click', function () {
      $('#submenu').hide();
    });
    
    // input keyup name capture
    $("#nameInput").keyup(function() {
      var name = $(this).val();
      $("#formMessage").text("Hello! " + name + " We'll get in touch with as soon as you email us").fadeIn();
    });
    
    //focus
    $("#nameInput").focus(function() {
      $(this).css("border", "3px solid green");
    });
    
    $("#nameInput").blur(function() {
      $(this).css("border", "3px solid red");
    });
  });
  
    
    function handleSearch(event) {
      const query = event.target.value.toLowerCase();
      const sections = document.querySelectorAll("section");
      
      let found = false;
      
      sections.forEach((section) => {
        const text = section.innerText.toLowerCase();
        
        // Reset any previous hightight
        
        section.style.border = "none";
        
        if (query && text.includes(query)) {
          // scroll to the matching section
          
          section.scrollIntoView({ behavior: "smooth", block: "start" });
          
          //highlight the section
          section.style.border = "3px solid red";
          
          found = true
          return;
        }
      });
      
      //optional alert if no match found
      
      if (query && !found) {
        console.log("matching content found.");
      }
    }