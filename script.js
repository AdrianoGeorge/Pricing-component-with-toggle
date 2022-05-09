const toggleBtn = document.querySelector(".toggle-btn");
const toggleArea = document.querySelector(".switch");
const basicPrice = document.querySelector(".price-1");
const profPrice = document.querySelector(".price-2");
const masterPrice = document.querySelector(".price-3");

toggleBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (toggleArea.classList.contains("monthly")) {
    toggleArea.classList.remove("monthly");
    toggleArea.classList.add("anually");
    basicPrice.innerHTML = `<p class="price-1"> <span class="dollar-sign">&dollar;</span>199.99</p>`;
    profPrice.innerHTML = `  <p class="price-2"> <span class="dollar-sign">&dollar;</span>249.99</p>`;
    masterPrice.innerHTML = `  <p class="price-3"> <span class="dollar-sign">&dollar;</span>399.99</p>`;
  } else {
    toggleArea.classList.add("monthly");
    toggleArea.classList.remove("anually");
    basicPrice.innerHTML = `<p class="price-1"> <span class="dollar-sign">&dollar;</span>19.99</p>`;
    profPrice.innerHTML = `  <p class="price-2"> <span class="dollar-sign">&dollar;</span>24.99</p>`;
    masterPrice.innerHTML = `  <p class="price-3"> <span class="dollar-sign">&dollar;</span>39.99</p>`;
  }
});

// function toggle(button) {
//   if (document.getElementById("1").value == "OFF") {
//     document.getElementById("1").value = "ON";
//   } else if (document.getElementById("1").value == "ON") {
//     document.getElementById("1").value = "OFF";
//   }
// }

// function toggle(button) {
//   switch (button.value) {
//     case "ON":
//       button.value = "OFF";
//       break;
//     case "OFF":
//       button.value = "ON";
//       break;
//   }
// }

// var button = document.querySelector("button");
// toggleBtn.addEventListener("click", function () {
//   document.body.classList.toggle("orange");
// });

// function toggle(button) {
//   console.log("clicked");
//   if (document.getElementById("1").value == "OFF") {
//     document.getElementById("1").value = "ON";
//   } else {
//     document.getElementById("1").value = "OFF";
//   }
// }
