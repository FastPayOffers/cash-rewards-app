// Enhanced Redirect with Cookie Tracking
document.getElementById("cta-button").addEventListener("click", function() {
  // Set a cookie to track the click
  document.cookie = "offer_clicked=true; max-age=86400; path=/";
  
  // Fake loading animation
  const originalContent = this.innerHTML;
  this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
  this.disabled = true;
  
  // Add ripple effect
  const ripple = document.createElement('span');
  ripple.classList.add('ripple');
  this.appendChild(ripple);
  
  // Remove ripple after animation
  setTimeout(() => {
    ripple.remove();
  }, 1000);
  
  setTimeout(() => {
    window.location.href = "https://smrturl.co/a/sa27c23060a/1113?s1=";
  }, 1500);
});

// Enhanced Countdown Timer with Visual Effects
function startTimer() {
  let timeLeft = 300; // 5 minutes in seconds
  const timerElement = document.getElementById("timer").querySelector("span");
  
  const timer = setInterval(() => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    
    timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    // Change color when time is running out
    if (timeLeft <= 60) {
      timerElement.style.color = "#ff7675";
      timerElement.style.animation = "pulse 1s infinite";
    }
    
    if (timeLeft <= 0) {
      clearInterval(timer);
      timerElement.textContent = "Offer expired!";
      timerElement.style.color = "#e74c3c";
      timerElement.style.animation = "none";
      
      // Disable the CTA button when offer expires
      const ctaButton = document.getElementById("cta-button");
      ctaButton.disabled = true;
      ctaButton.style.opacity = "0.7";
      ctaButton.style.cursor = "not-allowed";
      ctaButton.style.background = "#b2bec3";
    } else {
      timeLeft--;
    }
  }, 1000);
}

// Dynamic User Count with Realistic Growth
function updateUserCount() {
  const countElement = document.getElementById("user-count");
  let count = 12487;
  
  // Initial animation
  countElement.style.transform = "scale(1.2)";
  setTimeout(() => {
    countElement.style.transform = "scale(1)";
  }, 300);
  
  setInterval(() => {
    const increment = Math.floor(Math.random() * 3) + 1;
    count += increment;
    
    // Animation on update
    countElement.style.transform = "scale(1.1)";
    setTimeout(() => {
      countElement.style.transform = "scale(1)";
    }, 300);
    
    countElement.textContent = count.toLocaleString();
  }, 3000);
}

// Add Ripple Effect to Button
document.addEventListener('DOMContentLoaded', function() {
  // Add ripple effect CSS dynamically
  const style = document.createElement('style');
  style.textContent = `
    .ripple {
      position: absolute;
      border-radius: 50%;
      background-color: rgba(255, 255, 255, 0.7);
      transform: scale(0);
      animation: ripple 0.6s linear;
      pointer-events: none;
    }
    
    @keyframes ripple {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
});

// Initialize all effects when DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
  startTimer();
  updateUserCount();
  
  // Add hover effect to testimonials
  const testimonials = document.querySelectorAll('.testimonial');
  testimonials.forEach(testimonial => {
    testimonial.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px)';
      this.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.15)';
    });
    
    testimonial.addEventListener('mouseleave', function() {
      this.style.transform = '';
      this.style.boxShadow = '';
    });
  });
  
  // Animate elements when they come into view
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('.container > *').forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
  });
});
