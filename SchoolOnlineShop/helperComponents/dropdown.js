const checkForDropdowns=()=>{
  document.querySelectorAll(".dropdown").forEach((dropdown) => {
  if (!dropdown.classList.contains("tooltip")) {
    dropdown.addEventListener("click", (e) => {
      event.stopPropagation();
      const dropdown = e.target.closest(".dropdown");
      if (dropdown.classList.contains("open")) {
        dropdown.classList.remove("open");
      } else {
        dropdown.classList.add("open");
      }
    });
  } else {
    dropdown.addEventListener("mouseenter", (e) => {
      const dropdown = e.target.closest(".dropdown");
      if (!dropdown.classList.contains("open")) {
        dropdown.classList.add("open");
      }
    });
    dropdown.addEventListener("mouseleave", (e) => {
      const dropdown = e.target.closest(".dropdown");
      if (dropdown.classList.contains("open")) {
        dropdown.classList.remove("open");
      }
    });
  }
});

$(document).click(function () {
  document.querySelectorAll(".dropdown").forEach((dropdown) => {
    if (dropdown.classList.contains("open")) {
      dropdown.classList.remove("open");
    }
  });
});

$(".dropdown .content").click(function (event) {
  event.stopPropagation();
});
}


$( document ).ready(checkForDropdowns);
