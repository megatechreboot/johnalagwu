$(document).ready(function () {
    // Toggle sidebar
    $('#hamburger').on('click', function (e) {
      e.stopPropagation();
      $('#nav-links').toggleClass('active');
    });

    // Toggle submenu
    $('#submenuToggle').on('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      $('#submenu').slideToggle();
    });

    // Clicking nav-links or submenu <a>: collapse sidebar (except submenuToggle)
    $('#nav-links a').on('click', function (e) {
      const isSubmenuToggle = $(this).is('#submenuToggle');

      if (!isSubmenuToggle) {
        $('#nav-links').removeClass('active');
        $('#submenu').slideUp();
      }
      // Allow default navigation behavior
    });

    // Clicking anywhere outside closes sidebar and submenu
    $('body').on('click', function (e) {
      if (
        !$(e.target).closest('#nav-links').length &&
        !$(e.target).is('#hamburger')
      ) {
        $('#nav-links').removeClass('active');
        $('#submenu').slideUp();
      }
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
  
    
    //FAQ toggle
    
    // FAQ toggle
    const faqQue = document.querySelectorAll('.faq-question');

  faqQue.forEach(question => {
  question.addEventListener('click', () => {
    question.classList.toggle('active');
    const answer = question.nextElementSibling;
    answer.classList.toggle('open');
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