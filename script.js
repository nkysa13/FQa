document.querySelectorAll(".qusetion").forEach((element) => {
  element.addEventListener("click", function () {
    element.nextElementSibling.classList.toggle("click");
    element.querySelector("img").classList.toggle("imgClick");
  });
});
