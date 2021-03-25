// import "alpinejs";

// const env = document.querySelector("body").dataset.env;

// // // Check that service workers are supported
// // if ("serviceWorker" in navigator && env === "production") {
// //   // use the window load event to keep the page load performant
// //   window.addEventListener("load", () => {
// //     try {
// //       navigator.serviceWorker.register("/sw.js");
// //     } catch (error) {
// //       console.error("Service worker registration failed: ", error);
// //     }
// //   });
// // }

let headers = document.getElementsByTagName("header");
headers[0] &&
  headers[0].addEventListener("click", () => {
    document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

function fitInViewport(element) {
  const rect = element.getBoundingClientRect();
  const bounds = {
    left: 10,
    right: document.documentElement.clientWidth - 10,
    top: 10,
    bottom: document.documentElement.clientHeight - 10,
  };

  if (rect.top < bounds.top) {
    element.style.marginTop = `${-(rect.top - bounds.top)}px`;
    console.log(rect.top, bounds.top, `Move top: ${rect.top - bounds.top}px`);
  }

  if (rect.left < bounds.left) {
    element.style.marginLeft = `${-(rect.left - bounds.left)}px`;
  }

  if (rect.bottom > bounds.bottom) {
    element.style.marginTop = `${bounds.bottom - rect.bottom}px`;
  }

  if (rect.right > bounds.right) {
    element.style.marginLeft = `${bounds.right - rect.right}px`;
  }
}

function findAndfitPopup(ev) {
  fitInViewport(ev.currentTarget.nextSibling);
}

document.querySelectorAll("[data-fit-popup]").forEach((btn) => {
  btn.addEventListener("focus", findAndfitPopup);
  btn.addEventListener("mouseover", findAndfitPopup);
});
