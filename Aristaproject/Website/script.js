// /Javascript/script.js

document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    {
      threshold: 0.1 // Trigger when 10% of the element is visible
    }
  );

  const hiddenElements = document.querySelectorAll(".why-arista");
  hiddenElements.forEach((el) => observer.observe(el));
});
