// For Faq Section
  document.addEventListener("DOMContentLoaded", function () {
    const accordionItems = document.querySelectorAll(".accordion-item");

    accordionItems.forEach((item) => {
      const button = item.querySelector(".accordion-button");
      button.addEventListener("click", function () {

        accordionItems.forEach((otherItem) => {
          if (otherItem !== item) {
            const collapse = otherItem.querySelector(".accordion-collapse");
            collapse.classList.remove("show");
            const otherButton = otherItem.querySelector(".accordion-button");
            otherButton.classList.add("collapsed");
          }
        });
      });
    });
  });

