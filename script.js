// selected effect on filters
const filterOptions = document
  .querySelector(".filter")
  .querySelectorAll("span");

filterOptions.forEach((filter) => {
  filter.addEventListener("click", () => {
    filterOptions.forEach((flt) => {
      flt.classList.remove("selected");
      filter.classList.add("selected");
    });
  });
});

// slider js
const slideImages = document
  .querySelector(".slider-imgs")
  .querySelectorAll("img");
let slideLength = 0;

function changeSlides() {
  if (slideLength === 200) {
    slideLength = 0;
    slideImages.forEach((img) => {
      img.style.transform = `translateX(-${slideLength}%)`;
    });
  } else {
    slideLength += 100;
    slideImages.forEach((img) => {
      img.style.transform = `translateX(-${slideLength}%)`;
    });
  }
}

setInterval(() => {
  changeSlides();
}, 3000);

// assigning overlay height to slide image
const heroOverlay = document.getElementById("hero-overlay");

const overlayHeight = heroOverlay.getBoundingClientRect().height;
const overlaywidth = heroOverlay.getBoundingClientRect().width;

slideImages.forEach((img) => {
  img.style.width = overlaywidth + "px";
  img.style.height = overlayHeight + "px";
});

//=============== opening faq answer on faq head click ========================//

// get all faq head element
const faq = document.querySelectorAll(".faq");

// add listener Click to all faq head
faq.forEach((qa) => {
  // get faq head in selected faq
  const faqHead = qa.querySelector(".faq-head");
  // add listener to faq head
  faqHead.addEventListener("click", function () {
    // remove active in all faq
    faq.forEach((q) => q.classList.remove("active"));
    // add active class to selected faq
    qa.classList.add("active");

    console.log(faqHead);
  });
});
