document.addEventListener("DOMContentLoaded", () => {
  const dotsButtons = document.querySelectorAll(".dots-trigger");

  dotsButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation(); // Prevent link redirection from bubbling up

      const parent = event.target.closest(".card__media");
      const shopNowButton = parent.querySelector(".shop-now-button");

      // Toggle visibility
      if (shopNowButton) {
        shopNowButton.classList.toggle("visible");
      }

      // Handle mobile redirection
      if (window.innerWidth <= 768) {
        const link = shopNowButton.querySelector("a");
        if (link) {
          window.location.href = link.href;
        }
      }
    });
  });

  // Make other areas clickable to go to the product page
  const cardLinks = document.querySelectorAll(".js-card-link");
  cardLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.stopPropagation();
      window.location.href = link.href;
    });
  });
});
