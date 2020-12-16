const navSlide = () => {
  const burger = document.querySelector(".burger");
  const navLinks = document.querySelector(".nav-items");

  burger.addEventListener("click", function () {
    navLinks.classList.toggle("nav-active");
  });
};

navSlide();
