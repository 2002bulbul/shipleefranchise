/*document.addEventListener("DOMContentLoaded", function() {
    const loginBtn = document.getElementById("loginBtn");
    const loginModal = document.getElementById("loginModal");
    const closeBtn = document.getElementById("closeBtn");
    const loginForm = document.getElementById("loginForm");
  
    // Open the modal when the login button is clicked
    loginBtn.addEventListener("click", function() {
      loginModal.style.display = "block";
    });
  
    // Close the modal when the close button is clicked
    closeBtn.addEventListener("click", function() {
      loginModal.style.display = "none";
    });
  
    // Close the modal if the user clicks outside the modal content
    window.addEventListener("click", function(event) {
      if (event.target === loginModal) {
        loginModal.style.display = "none";
      }
    });
  
    // Handle the form submission (mock validation for now)
    loginForm.addEventListener("submit", function(event) {
      event.preventDefault();
  
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
  
      // Simple validation
      if (username === "admin" && password === "admin") {
        alert("Login successful!");
        loginModal.style.display = "none"; // Close the modal
      } else {
        alert("Invalid credentials. Please try again.");
      }
    });
    // Highlight row on click
     document.querySelectorAll('tbody tr').forEach(row => {
     row.addEventListener('click', () => {
      alert(`You selected: ${row.children[0].textContent}`);
    });
    
    });
  });
// Dark Mode Toggle
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    }
    // Scroll-to-Top Button
    const scrollToTopButton = document.getElementById("scroll-to-top");
    window.addEventListener("scroll", () => {
    scrollToTopButton.style.display = window.scrollY > 200 ? "block" : "none";
    });
    function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
    }
    // Accordion Toggle
    document.querySelectorAll(".accordion-item h3").forEach(header => {
    header.addEventListener("click", () => {
    const content = header.nextElementSibling;
    content.style.display = content.style.display === "block" ? "none" : "block";
     });
    });*/
    document.addEventListener("DOMContentLoaded", function () {
        const loginBtn = document.getElementById("loginBtn");
        const loginModal = document.getElementById("loginModal");
        const closeBtn = document.getElementById("closeBtn");
        const loginForm = document.getElementById("loginForm");
      
        // Open the modal when the login button is clicked
        if (loginBtn) {
          loginBtn.addEventListener("click", function () {
            loginModal.style.display = "block";
          });
        }
      
        // Close the modal when the close button is clicked
        if (closeBtn) {
          closeBtn.addEventListener("click", function () {
            loginModal.style.display = "none";
          });
        }
      
        // Close the modal if the user clicks outside the modal content
        if (loginModal) {
          window.addEventListener("click", function (event) {
            if (event.target === loginModal) {
              loginModal.style.display = "none";
            }
          });
        }
      
        // Handle the form submission (mock validation for now)
        if (loginForm) {
          loginForm.addEventListener("submit", function (event) {
            event.preventDefault();
      
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;
      
            // Simple validation
            if (username === "admin" && password === "admin") {
              alert("Login successful!");
              loginModal.style.display = "none"; // Close the modal
            } else {
              alert("Invalid credentials. Please try again.");
            }
          });
        }
      
        // Highlight row on click
        document.querySelectorAll("tbody tr").forEach((row) => {
          row.addEventListener("click", () => {
            alert(`You selected: ${row.children[0].textContent}`);
          });
        });
      
        // Scroll-to-Top Button
        const scrollToTopButton = document.getElementById("scroll-to-top");
        if (scrollToTopButton) {
          window.addEventListener("scroll", () => {
            scrollToTopButton.style.display = window.scrollY > 200 ? "block" : "none";
          });
      
          scrollToTopButton.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          });
        }
      
        // Accordion Toggle
        document.querySelectorAll(".accordion-item h3").forEach((header) => {
          header.addEventListener("click", () => {
            const content = header.nextElementSibling;
            if (content) {
              content.style.display = content.style.display === "block" ? "none" : "block";
            }
          });
        });
      });
      
      // Dark Mode Toggle
      function toggleDarkMode() {
        document.body.classList.toggle("dark-mode");
      }
      
  