// Sequence of events
document.addEventListener("DOMContentLoaded", () => {
    const box1 = document.getElementById("box1");
    const box2 = document.getElementById("box2");
    const box3 = document.getElementById("box3");
  
    // Show Box 1 for 10 seconds
    setTimeout(() => {
      box1.classList.add("hidden");
      box2.classList.remove("hidden");
    }, 10000);
  
    // Show Box 2 for 10 seconds
    setTimeout(() => {
      box2.classList.add("hidden");
      box3.classList.remove("hidden");
    }, 20000);
  
    // Show Box 3 for 15 seconds and then redirect
    setTimeout(() => {
      box3.classList.add("hidden");
  
      // Redirect to the next page
      window.location.href = "main.html"; // Replace with your next page URL
    }, 35000);
  });
  