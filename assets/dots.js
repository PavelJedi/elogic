function toggleShopNow(element) {
  if (window.innerWidth > 768) {
    document.querySelectorAll(".shop-now-button.visible").forEach((btn) => {
      if (btn !== element) {
        btn.classList.remove("visible");
        btn.classList.add("hidden");
      }
    });

    element.classList.toggle("visible");
    element.classList.toggle("hidden");
  } else {
    window.location.href = element.querySelector("a").href;
  }
}
