// interview and rejected number count
let interviewCount = 0,
  rejectedCount = 0;

//   total jobs count
const allJob = document.querySelectorAll(".card");
let totalJobCount = allJob.length;
document.querySelector(".total-count").innerText = totalJobCount;

// available jobs count
function updateAvailableJobsCount() {
  const availableJobs = totalJobCount - interviewCount - rejectedCount;
  document.querySelector(".available-jobs").innerText = availableJobs;
}

// accessing every card data and showing on other tab using event delegation and bubbling
document.querySelector("main").addEventListener("click", function (event) {
  // for interview
  if (event.target.classList.contains("interview-btn")) {
    // take the card data
    const card = event.target.closest(".card");
    //   current status
    const currentStatus = card.querySelector(".status-btn").innerText;

    // if already exist
    if (currentStatus === "INTERVIEW") {
      alert("Already marked as Interview");
      return;
    }

    // If the interview btn click coming from rejected tab
    if (currentStatus === "REJECTED") {
      rejectedCount--;
      document.querySelector(".rejected-count").innerText = rejectedCount;
    }

    // changing current status
    card.querySelector(".status-btn").innerText = "INTERVIEW";

    card.style.display = "none";
    const cardDataCopy = document.createElement("div");
    cardDataCopy.classList.add("card");
    cardDataCopy.innerHTML = card.innerHTML;
    document.querySelector(".interview-tab").append(cardDataCopy);

    //   counting
    document.querySelector(".interview-count").innerText = ++interviewCount;

    // available jobs count
    updateAvailableJobsCount();
  }

  // for rejected
  if (event.target.classList.contains("rejected-btn")) {
    // take the card data
    const card = event.target.closest(".card");

    // current status
    const currentStatus = card.querySelector(".status-btn").innerText;

    // if it already exist
    if (currentStatus === "REJECTED") {
      alert("Already marked as Rejected");
      return;
    }

    // If the rejected btn click coming from interview tab
    if (currentStatus === "INTERVIEW") {
      interviewCount--;
      document.querySelector(".interview-count").innerText = interviewCount;
    }

    //   changing the status
    card.querySelector(".status-btn").innerText = "REJECTED";
    card.style.display = "none";
    const cardDataCopy = document.createElement("div");
    cardDataCopy.classList.add("card");
    cardDataCopy.innerHTML = card.innerHTML;
    document.querySelector(".rejected-tab").append(cardDataCopy);

    //   counting
    document.querySelector(".rejected-count").innerText = ++rejectedCount;

    // available jobs count
    updateAvailableJobsCount();
  }

  // delete btn functionality
  if (event.target.classList.contains("svg")) {
    const parentCard = event.target.closest(".card");
    const cardStatus = parentCard.querySelector(".status-btn").innerText;
    if (cardStatus === "INTERVIEW") {
      interviewCount--;
      document.querySelector(".interview-count").innerText = interviewCount;
    }

    if (cardStatus === "REJECTED") {
      rejectedCount--;
      document.querySelector(".rejected-count").innerText = rejectedCount;
    }
    // parentCard.style.display = "none";
    parentCard.remove();

    //   rest total
    --totalJobCount;
    document.querySelector(".total-count").innerText = totalJobCount;
  }

  // available jobs count
  const availableJobs =
    parseInt(totalJobCount) -
    parseInt(interviewCount) -
    parseInt(rejectedCount);
  document.querySelector(".available-jobs").innerText = availableJobs;
});

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

    if (interviewCount === 0) {
      const interviewTab = document.querySelector(".interview-tab");
      if (!interviewTab.querySelector(".alert")) {
        const copyAlert = document.createElement("div");
        copyAlert.innerHTML =
          document.querySelector(".alert-section").innerHTML;
        document.querySelector(".interview-tab").append(copyAlert);
        document.querySelector(".interview-tab").style.display = "block";
      }
    }
  });
document
  .querySelector(".rejected-tab-btn")
  .addEventListener("click", function () {
    toggleTab(".rejected-tab", ".rejected-tab-btn");

    if (rejectedCount === 0) {
      const rejectedTab = document.querySelector(".rejected-tab");
      if (!rejectedTab.querySelector(".alert")) {
        const copyAlert = document.createElement("div");
        copyAlert.innerHTML =
          document.querySelector(".alert-section").innerHTML;
        document.querySelector(".rejected-tab").append(copyAlert);
        document.querySelector(".rejected-tab").style.display = "block";
      }
    }
  });
