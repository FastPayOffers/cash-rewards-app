// Redirect to offer
document.getElementById("cta-button").addEventListener("click", function() {
  // Fake loading animation
  this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
  
  setTimeout(() => {
    window.location.href = "https://smrturl.co/a/sa27c23060a/86?s1=";
  }, 1500);
});

// Countdown timer
function startTimer() {
  let timeLeft = 300; // 5 minutes in seconds
  const timerElement = document.getElementById("timer").querySelector("span");
  
  const timer = setInterval(() => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    
    timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    if (timeLeft <= 0) {
      clearInterval(timer);
      timerElement.textContent = "Offer expired!";
      timerElement.style.color = "#e74c3c";
    } else {
      timeLeft--;
    }
  }, 1000);
}

// Random user count increment
function updateUserCount() {
  const countElement = document.getElementById("user-count");
  let count = 12487;
  
  setInterval(() => {
    count += Math.floor(Math.random() * 3) + 1;
    countElement.textContent = count.toLocaleString();
  }, 3000);
}

// Video placeholder interaction
document.getElementById("video-placeholder").addEventListener("click", function() {
  this.querySelector(".play-button").innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
  setTimeout(() => {
    this.querySelector(".play-button").innerHTML = '<i class="fas fa-play"></i>';
    this.querySelector(".video-overlay p").textContent = "Watch tutorial to maximize earnings!";
  }, 2000);
});

// Initialize all effects
window.addEventListener("DOMContentLoaded", () => {
  startTimer();
  updateUserCount();
});
