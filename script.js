//   crawsel start
var copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".logos").appendChild(copy);
//   crawsel end

// back to top
let backtotop = document.querySelector(".back-to-top");
const navbar = document.querySelector("nav");
if (backtotop) {
  const toggleBacktotop = () => {
    if (window.scrollY > 100) {
      // console.log(true); // Debugging line
      backtotop.classList.add("active");
      navbar.classList.add("fixed-top");
    } else {
      backtotop.classList.remove("active");
      navbar.classList.remove("fixed-top");
    }
  };

  // Trigger on page load and scroll
  window.addEventListener("load", toggleBacktotop);
  window.addEventListener("scroll", toggleBacktotop);
}
// back to top

// testimonial start.
const prev = document.getElementById("prev-btn");
const next = document.getElementById("next-btn");
const list = document.getElementById("testimonial-list");

prev.addEventListener("click", () => {
  list.scrollLeft -= list.clientWidth;
});

next.addEventListener("click", () => {
  list.scrollLeft += list.clientWidth;
});
// testimonial end
