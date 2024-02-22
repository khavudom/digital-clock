const clcok = document.querySelector("div.clock-container");

function display() {
  // you can't declear these 5 variable ouside display function
  // when display() function called these 5 variable redecleared
  const date = new Date();
  let seconds = date.getSeconds();
  let minutes = date.getMinutes();
  let houses = date.getHours();
  let meridiem;

  if (houses >= 12) {
    meridiem = "PM";
  } else {
    meridiem = "AM";
  }
  //
  if (houses > 12) {
    houses = houses % 12 || 12;
  }
  // houses minutes seconds leading by 0 when it stay in length=1
  if (houses < 10) houses = `0${houses}`;
  if (minutes < 10) minutes = `0${minutes}`;
  if (seconds < 10) seconds = `0${seconds}`;
  clcok.innerHTML = `${houses}:${minutes}:${seconds} ${meridiem}`;
}
setInterval(display, 1000);

// code for intermediate level

// const clcok = document.querySelector("div.clock-container");

// function display() {
//   const date = new Date();
//   let seconds = date.getSeconds();
//   let minutes = date.getMinutes();
//   let houses = date.getHours();
//   let meridiem;

//   houses >= 12 ? (meridiem = "PM") : (meridiem = "AM");

//   houses = houses % 12 || 12;

//   houses = houses.toString().padStart(2, "0");
//   minutes = minutes.toString().padStart(2, "0");
//   seconds = seconds.toString().padStart(2, "0");
//   clcok.innerHTML = `${houses}:${minutes}:${seconds} ${meridiem}`;
// }
// setInterval(display, 1000);

//
//
// code for advance level

// const clock = document.querySelector("div.clock-container");

// function display() {
//   const date = new Date();
//   const seconds = formatTime(date.getSeconds());
//   const minutes = formatTime(date.getMinutes());
//   let hours = date.getHours();
//   const meridiem = hours >= 12 ? "PM" : "AM";

//   hours = hours % 12 || 12;
//   const formattedHours = formatTime(hours);

//   clock.innerHTML = `${formattedHours}:${minutes}:${seconds} ${meridiem}`;
// }

// function formatTime(time) {
//   return time < 10 ? `0${time}` : time;
// }

// setInterval(display, 1000);
