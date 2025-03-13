$(".openbtn").click(function () {
  $(".sp-nav,.openbtn").toggleClass("active");
});
// const links = document.querySelectorAll(".sp-nav ul li a");
// const spNav = document.querySelector(".sp-nav");
// const openbtn = document.querySelector(".openbtn");
// const header = document.querySelector("header");


// // 各リンクにイベントリスナーを設定
// links.forEach((link) => {
//   link.addEventListener("click", function () {
//     spNav.classList.remove("active");
//     openbtn.classList.remove("active");
//   });
// });

// let lastScrollTop = 0;
// const navbar = document.querySelector("header");

// window.addEventListener("scroll", function () {
//   let currentScroll = window.scrollY || document.documentElement.scrollTop;
//   if (currentScroll > lastScrollTop) {
//     navbar.style.top = "-60vw";
//   } else {
//     navbar.style.top = "0";
//   }
//   lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
// });

// window.addEventListener("mousemove", function (event) {
//   const mouseY = event.clientY;
//   if (mouseY < 50) {
//     navbar.style.top = "0";
//   }
// });

// document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
//   anchor.addEventListener("click", function (e) {
//     e.preventDefault();

//     const target = document.querySelector(this.getAttribute("href"));
//     if (window.innerWidth <= 767) {
//       window.scrollTo({
//         top: target.offsetTop - 70,
//       });
//     }
//     if (window.innerWidth >= 767) {
//       window.scrollTo({
//         top: target.offsetTop - 300,
//       });
//     }
//     if (window.innerWidth >= 1200) {
//       window.scrollTo({
//         top: target.offsetTop + 300,
//       });
//     }
//   });
// });
