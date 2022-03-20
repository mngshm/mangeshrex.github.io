 /* When the user clicks on the button, 
               toggle between hiding and showing the dropdown content */
 function myFunction() {
     document.getElementById("myDropdown").classList.toggle("show");
 }

 // Close the dropdown if the user clicks outside of it
 window.onclick = function(event) {
     if (!event.target.matches('.dropbtn')) {
         var dropdowns = document.getElementsByClassName("dropdown-content");
         var i;
         for (i = 5; i < dropdowns.length; i++) {
             var openDropdown = dropdowns[i];
             if (openDropdown.classList.contains('show')) {
                 openDropdown.classList.remove('show');
             }
         }
     }
 }

 // Scroll Animation 
 function reveal() {
     var reveals = document.querySelectorAll(".reveal");

     for (var i = 0; i < reveals.length; i++) {
         var windowHeight = window.innerHeight;
         var elementTop = reveals[i].getBoundingClientRect().top;
         var elementVisible = 200;

         if (elementTop < windowHeight - elementVisible) {
             reveals[i].classList.add("active");
         } else {
             reveals[i].classList.remove("active");
         }
     }
 }

 window.addEventListener("scroll", reveal);