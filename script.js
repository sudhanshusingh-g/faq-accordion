const accordionButtons = document.querySelectorAll(".accordion_button");
const accordionItems = document.querySelectorAll(".accordion_item");

accordionButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    const isOpen = accordionItems[index].classList.contains("active");

    // Close all other accordion items
    accordionItems.forEach((item) => {
      item.classList.remove("active");
      item.querySelector(".faq_content").style.display = "none";
      item.querySelector(".accordion_button img").src =
        "./assets/images/icon-plus.svg";
    });

    // Toggle the clicked accordion item
    if (!isOpen) {
      accordionItems[index].classList.add("active");
      accordionItems[index].querySelector(".faq_content").style.display =
        "block";
      accordionItems[index].querySelector(".accordion_button img").src =
        "./assets/images/icon-minus.svg";
    }
  });
});
