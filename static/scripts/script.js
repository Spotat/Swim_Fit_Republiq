function openNav() {
    document.getElementById("sideNav").style.width = "95%"
    document.getElementById("sideNav").style.opacity = "1"
    document.getElementById("sideNav").style.zIndex = "99"
    document.getElementById("sideNav").style.visibility = "visible"
}
function closeNav() {
    document.getElementById("sideNav").style.width = "0%"
    document.getElementById("sideNav").style.opacity = "0"
    document.getElementById("sideNav").style.zIndex = "-99"
    document.getElementById("sideNav").style.visibility = "hidden"
}
let sliderIndex = 1;
showSlides(sliderIndex);

function plusSlides(n) {
  showSlides(sliderIndex += n);
}

function currentSlide(n) {
  showSlides(sliderIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
        sliderIndex = 1;
    }    
  if (n < 1) {
        sliderIndex = slides.length;
    }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[sliderIndex-1].style.display = "block";  
  dots[sliderIndex-1].className += " active";
}


// Initialize slider
document.addEventListener('DOMContentLoaded', () => {
    autoSlide()
}) 

document.querySelector('.contact-form').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent default form submission

  const name = this.name.value.trim();
  const email = this.email.value.trim();
  const subject = this.subject.value.trim();
  const message = this.message.value.trim();
  const status = document.getElementById('form-status');

  // Simple validation
  if (!name || !email || !subject || !message) {
    status.style.color = 'red';
    status.textContent = 'Please fill in all fields.';
    return;
  }

  // Optional: Email format check
  const emailRegex = /^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$/;
  if (!emailRegex.test(email)) {
    status.style.color = 'red';
    status.textContent = 'Please enter a valid email address.';
    return;
  }

  // Simulate submission
  status.style.color = 'green';
  status.textContent = 'Sending message...';

  setTimeout(() => {
    status.textContent = 'Message sent successfully!';
    this.reset(); // Clear form
  }, 1500);
});

document.querySelectorAll('.read-more-btn').forEach(button => {
button.addEventListener('click', () => {
    const text = button.previousElementSibling;
    text.classList.toggle('expanded');
    button.textContent = text.classList.contains('expanded') ? 'Read Less' : 'Read More';
});
});
