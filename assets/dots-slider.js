document.addEventListener("DOMContentLoaded", () => {
  const sliders = document.querySelectorAll(".slideshow");

  sliders.forEach((slider) => {
    let slides = slider.querySelectorAll(".slider__slide");
    let dots = slider.parentElement.querySelectorAll(
      ".slider-counter__link--dots"
    );

    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        slides.forEach((slide) => slide.classList.remove("active"));
        dots.forEach((d) => d.classList.remove("active"));

        slides[index].classList.add("active");
        dot.classList.add("active");

        slider.scrollTo({
          left: slides[index].offsetLeft,
          behavior: "smooth",
        });
      });
    });
  });
});
