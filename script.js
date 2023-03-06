'use-strict';

// to get any element id
const getId = (id) => document.getElementById(id);

// initial value
let count = 0;

// store interval value
let intervalId;

// start the counting

const autoStartCount = () => {
  intervalId = setInterval(() => {
    count++;
    getId('auto-count-number').innerText = count;
  }, 1000);
};

//button click to run the count function

getId('auto-start-count').addEventListener('click', function () {
  getId('auto-start-count').classList.add('hidden');
  getId('auto-resume-count').classList.remove('hidden');
  autoStartCount();
});

// stop function

const autoStopCount = () => {
  clearInterval(intervalId);
};

// resume the countdown

const autoResumeCount = () => {
  autoStartCount();
};

// reset countdown

const autoResetCount = () => {
  count = 0;
  autoStopCount();
  getId('auto-count-number').innerText = count;
};

// resume button

getId('auto-resume-count').addEventListener('click', function () {
  autoResumeCount();
});

// stop button

getId('auto-stop-count').addEventListener('click', function () {
  autoStopCount();
});

// reset button

getId('auto-reset-count').addEventListener('click', function () {
  autoResetCount();
  getId('auto-start-count').classList.remove('hidden');
  getId('auto-resume-count').classList.add('hidden');
});

// to store user inputted time

let userDefineTime;

// convert the value to a number

const getInput = () => {
  const timerInput = document.getElementById('timer-input').value;
  const textToTime = parseFloat(timerInput);
  if (textToTime) {
    userDefineTime = textToTime;
  }
  document.getElementById('timer-input').value = '';
};

// countdown start

const startWatch = () => {
  getInput();
  if (isNaN(userDefineTime)) {
    alert(`Please provide a number`);
    return;
  } else {
    intervalId = setInterval(() => {
      count++;
      document.getElementById('count-number').innerText = count;
      if (count === userDefineTime) {
        clearInterval(intervalId);
        document.getElementById('start-count').classList.remove('hidden');
      }
    }, 1000);
  }
};

// button to countdown

document.getElementById('start-count').addEventListener('click', function () {
  startWatch();
});

// stop function

const stopWatch = () => {
  clearInterval(intervalId);
};

// resume function

const resumeWatch = () => {
  intervalId = setInterval(() => {
    count++;
    document.getElementById('count-number').innerText = count;
    if (count === userDefineTime) {
      stopWatch();
    }
  }, 1000);
};

// reset the counting

const resetWatch = () => {
  stopWatch();
  count = 0;
  document.getElementById('count-number').innerText = count;
};

// buttons and handlers

document.getElementById('stop-count').addEventListener('click', function () {
  stopWatch();
  document.getElementById('resume-count').classList.remove('hidden');
  document.getElementById('stop-count').classList.add('hidden');
});

document.getElementById('resume-count').addEventListener('click', function () {
  resumeWatch();
  document.getElementById('resume-count').classList.add('hidden');
  document.getElementById('stop-count').classList.remove('hidden');
});

document.getElementById('reset-count').addEventListener('click', function () {
  resetWatch();
  document.getElementById('start-count').classList.remove('hidden');
  document.getElementById('stop-count').classList.remove('hidden');
});
