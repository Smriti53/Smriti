// Wait for the DOM content to fully load before executing JavaScript
document.addEventListener('DOMContentLoaded', function () {

    // Example of adding interactivity
    const welcomeMessage = document.querySelector('#welcome .content h1');
    
    // You can add more interactivity if needed.
    // For now, let's log a simple message when the page loads
    console.log("Welcome to my portfolio!");

    // Adding a smooth scroll effect for anchor links in the navigation
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent the default anchor behavior
            const targetId = link.getAttribute('href').substring(1); // Get the target section ID
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - 70, // Adjust offset for navbar height
                behavior: 'smooth'
            });
        });
    });

});
