function customSlideToggle(element, duration) {
  if (window.getComputedStyle(element).display === "none") {
    element.style.display = "block";
    element.style.height = "0";
    element.style.overflow = "hidden";
    element.style.transition = `height ${duration}ms ease-in-out`;
    setTimeout(() => {
      element.style.height = element.scrollHeight + "px";
    }, 10);
  } else {
    element.style.height = "0";
    setTimeout(() => {
      element.style.display = "none";
    }, duration);
  }
}

document.querySelectorAll(".qusetion").forEach((element) => {
  element.addEventListener("click", function () {
    // element.nextElementSibling.classList.toggle("click");
    customSlideToggle(element.nextElementSibling, 500);
    // element.nextElementSibling.classList.toggle("show");
    // element.nextElementSibling.classList.toggle("hide");
    element.querySelector("img").classList.toggle("imgClick");
  });
});
