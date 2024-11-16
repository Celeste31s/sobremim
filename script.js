document.getElementById("contactButton").addEventListener("click", function() {
  const contactInfo = document.getElementById("contactInfo");
  if (contactInfo.classList.contains("hidden")) {
    contactInfo.classList.remove("hidden");
    setTimeout(() => {
      contactInfo.style.opacity = 1;
    }, 10);
  } else {
    contactInfo.style.opacity = 0;
    setTimeout(() => {
      contactInfo.classList.add("hidden");
    }, 500);
  }
});



