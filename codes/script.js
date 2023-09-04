document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
});

const button = document.getElementById('contact-button');
        const contactList = document.getElementById('contact-list');

        contactList.style.display = 'none';
        button.addEventListener('click', function (e) {
            e.preventDefault();
            if (contactList.style.display === 'none' || contactList.style.display === '') {
                contactList.style.display = 'block';
                button.innerHTML = 'Click to Close <i class="fas fa-chevron-up"></i>';
            } else {
                contactList.style.display = 'none';
                button.innerHTML = 'Click to Begin <i class="fas fa-chevron-down"></i>';
            }
        });

function openWhatsApp() {
    let phoneNumber = "0203901038";
        let message = `Welcome to Scriptum! Which Service will you like to patronize?`;
        
        let url = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);
        
        window.open(url);
    }

    function openDialer() {
        // Define the phone number
        var phoneNumber = "0557588607"; // You can use a single number here

        // Use the tel: URI scheme to open the phone's dialer
        window.location.href = "tel:" + phoneNumber;
    }
