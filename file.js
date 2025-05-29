function toggleSidebar() {
      document.getElementById('nav-links').classList.toggle('active');
    }
    
    //FAQ toggle
    
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