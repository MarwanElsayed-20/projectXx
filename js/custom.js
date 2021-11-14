// the end of the year count down
let countDownDate = new Date("Dec 31, 2021 23:59:59").getTime();

let counter = setInterval(() => {
  let dateNow = new Date().getTime();
  let dateDiff = countDownDate - dateNow;
  let days = Math.floor(dateDiff / 1000 / 60 / 60 / 24);
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

  if(dateDiff <= 0){
    clearInterval(counter);
  }
}, 1000);

// skills progress & stats count

let section = document.querySelector(".skills");
let spans = document.querySelectorAll(".skill-progress span")

let nums = document.querySelectorAll(".stat .stats-number")
let numsSection = document.querySelector(".stats-section");
let started = false;

window.onscroll = function () {
  // skills progress
  if (window.scrollY >= section.offsetTop - 100) {
    spans.forEach((span) => {
      span.style.width = span.dataset.width
    });
  }
  // stats count
  if (window.scrollY >= numsSection.offsetTop - 400) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval (() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 1000 / goal);
}
