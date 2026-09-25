// accessing every card data
function jobData(cardId) {
  // companyName, position, location, type, salary ,description
  document.getElementById(cardId).style.display = "none";
  const jobDataCopy = document.getElementById(cardId).innerHTML;
  const jobDataCopyContainer = document.createElement("div");
}

// interview btn
document
  .querySelector(".interview-btn1")
  .addEventListener("click", function () {
    // console.log("btn1")
    jobData("card1");
  });

//   interview tab
document.querySelector(".interview-tab");

// toggling feature and btn active color features
function toggleTab(tabClassName, tabBtnClassName) {
  // remove and add active styles of btn
  const allJobBtn = document.querySelectorAll(".job-btn");
  for (const btn of allJobBtn) {
    btn.classList.remove("active-btn");
  }
  document.querySelector(tabBtnClassName).classList.add("active-btn");

  // tab toggling
  const allTab = document.querySelectorAll(".tab");
  for (const tab of allTab) {
    tab.style.display = "none";
  }
  document.querySelector(tabClassName).style.display = "block";
}

document.querySelector(".all-tab-btn").addEventListener("click", function () {
  toggleTab(".all-tab", ".all-tab-btn");
});
document
  .querySelector(".interview-tab-btn")
  .addEventListener("click", function () {
    toggleTab(".interview-tab", ".interview-tab-btn");
  });
document
  .querySelector(".rejected-tab-btn")
  .addEventListener("click", function () {
    toggleTab(".rejected-tab", ".rejected-tab-btn");
  });
