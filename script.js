'use-strict';

// to get any element id
const getId = (id) => document.getElementById(id);

// initial value
let autoCount = 0;

// store interval value
let autoIntervalId;

// start the counting

const autoStartCount = () => {
  autoIntervalId = setInterval(() => {
    autoCount++;
    getId('auto-count-number').innerText = autoCount;
  }, 1000);
};

//button click to run the count function

getId('auto-start-count').addEventListener('click', function () {
  getId('auto-start-count').classList.add('hidden');
  autoStartCount();
  getId('auto-stop-count').classList.remove('hidden');
  getId('auto-reset-count').classList.remove('hidden');
});

// stop function

const autoStopCount = () => {
  clearInterval(autoIntervalId);
};

// resume the countdown

const autoResumeCount = () => {
  autoStartCount();
};

// reset countdown

const autoResetCount = () => {
  autoCount = 0;
  autoStopCount();
  getId('auto-count-number').innerText = autoCount;
};

// resume button

getId('auto-resume-count').addEventListener('click', function () {
  autoResumeCount();
  getId('auto-resume-count').classList.add('hidden');
  getId('auto-stop-count').classList.remove('hidden');
});

// stop button

getId('auto-stop-count').addEventListener('click', function () {
  autoStopCount();
  getId('auto-resume-count').classList.remove('hidden');
  getId('auto-stop-count').classList.add('hidden');
});

// reset button

getId('auto-reset-count').addEventListener('click', function () {
  autoResetCount();
  getId('auto-start-count').classList.remove('hidden');
  getId('auto-stop-count').classList.add('hidden');
  getId('auto-reset-count').classList.add('hidden');
});

// global

let count = 0;
let intervalId;
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
    document.getElementById('start-count').classList.remove('hidden');
    document.getElementById('reset-count').classList.add('hidden');
    return;
  } else {
    document.getElementById('stop-count').classList.remove('hidden');
    intervalId = setInterval(() => {
      count++;
      document.getElementById('count-number').innerText = count;
      if (count === userDefineTime) {
        clearInterval(intervalId);
        document.getElementById('stop-count').classList.add('hidden');
        document.getElementById('reset-count').classList.remove('hidden');
      }
    }, 1000);
  }
};

// button to countdown

document.getElementById('start-count').addEventListener('click', function () {
  startWatch();
  document.getElementById('start-count').classList.add('hidden');
  document.getElementById('reset-count').classList.remove('hidden');
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
  document.getElementById('stop-count').classList.add('hidden');
  document.getElementById('reset-count').classList.add('hidden');
});
