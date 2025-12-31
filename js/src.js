// NAVBAR JS
let navbar = document.getElementById("navbar")
let navLinks = document.querySelectorAll(".nav-link")
let navButtons = document.querySelectorAll(".btn-0")
let navLogo = document.getElementById("nav-logo")


function handleNavScroll() {
    if (window.scrollY > 150) {

        navbar.classList.add("nav-on-scroll")

        navLinks.forEach((link, index) => {
            link.classList.add(`nav-link${index + 1}`);
        });

        navButtons.forEach((btn) => {
            btn.classList.add("btn-0-scrolled");
            // btn.classList.remove("btn-1");
        });

        navLogo.src = "images/logo-dark.png"

    }
    else {
        navbar.classList.remove("nav-on-scroll")

        navLinks.forEach((link, index) => {
            link.classList.remove(`nav-link${index + 1}`);
        });

        navButtons.forEach((btn) => {
            btn.classList.remove("btn-0-scrolled");
            // btn.classList.remove("btn-1");
        });

        navLogo.src = "images/main-logo.png";

    }
}

// for scrolling


  const scrollTopBtn = document.getElementById("scrollTopBtn");

  window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      scrollTopBtn.style.display = "block";
    } else {
      scrollTopBtn.style.display = "none";
    }
  };

  scrollTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

// another js code for navbar

// NAVBAR JS



function handleNavScroll() {
    if (window.scrollY > 150) {

        navbar.classList.add("nav-on-scroll")

        navLinks.forEach((link, index) => {
            link.classList.add(`nav-link${index + 1}`);
        });

        navButtons.forEach((btn) => {
            btn.classList.add("btn-0-scrolled");
            // btn.classList.remove("btn-1");
        });

        navLogo.src = "images/logo-dark.png"

    }
    else {
        navbar.classList.remove("nav-on-scroll")

        navLinks.forEach((link, index) => {
            link.classList.remove(`nav-link${index + 1}`);
        });

        navButtons.forEach((btn) => {
            btn.classList.remove("btn-0-scrolled");
            // btn.classList.remove("btn-1");
        });

        navLogo.src = "images/main-logo.png";

    }
}

window.addEventListener("scroll", handleNavScroll)

// contact-us page

// in the memory

  document.addEventListener("DOMContentLoaded", function () {
    const faders = document.querySelectorAll(".fade-in, .fade-in-up");

    const appearOptions = {
      threshold: 0.2,
      rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function (entries, observer) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("appear");
        observer.unobserve(entry.target);
      });
    }, appearOptions);

    faders.forEach(fader => {
      appearOnScroll.observe(fader);
    });
  });

// for contact us page form


  

    
        // Validation function
           
        // Form validation and submission functions
        function validateForm() {
            let isValid = true;
            const name = document.getElementById("name");
            const message = document.getElementById("message");
            
            // Reset previous errors
            document.getElementById("nameError").style.display = "none";
            document.getElementById("messageError").style.display = "none";
            name.classList.remove("is-invalid");
            message.classList.remove("is-invalid");
            
            // Validate name
            if (!name.value.trim()) {
                document.getElementById("nameError").style.display = "block";
                name.classList.add("is-invalid");
                isValid = false;
            }
            
            // Validate message
            if (!message.value.trim()) {
                document.getElementById("messageError").style.display = "block";
                message.classList.add("is-invalid");
                isValid = false;
            }
            
            return isValid;
        }
        
        function sendToWhatsApp() {
            if (!validateForm()) return;
            
            let name = document.getElementById("name").value;
            let message = document.getElementById("message").value;
            let phoneNumber = "923312624225";
            
            let url = `https://wa.me/${phoneNumber}?text=Name:%20${encodeURIComponent(name)}%0AMessage:%20${encodeURIComponent(message)}`;
            window.open(url, "_blank");
        }
        
        function sendEmail() {
            if (!validateForm()) return;
            
            let name = document.getElementById("name").value;
            let message = document.getElementById("message").value;
            let email = "majeedagulzar@gmail.com";
            
            let subject = `Message from ${name}`;
            let body = message;
            
            window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        }

        // Set active nav item based on current page
        document.addEventListener('DOMContentLoaded', function() {
            const currentPage = location.pathname.split('/').pop() || 'index.html';
            const navLinks = document.querySelectorAll('.nav-link');
            
            navLinks.forEach(link => {
                const linkPage = link.getAttribute('href').split('/').pop();
                if (currentPage === linkPage) {
                    link.classList.add('active');
                    link.setAttribute('aria-current', 'page');
                } else {
                    link.classList.remove('active');
                    link.removeAttribute('aria-current');
                }
            });
        });

        // Scroll to top button functionality
        window.onscroll = function() {
            scrollFunction();
        };

        function scrollFunction() {
            const scrollTopBtn = document.getElementById("scrollTopBtn");
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                scrollTopBtn.style.display = "block";
            } else {
                scrollTopBtn.style.display = "none";
            }
        }

        document.getElementById("scrollTopBtn").addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
  