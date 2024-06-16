const startbtn = document.getElementById('start-btn');
const lapbtn = document.getElementById('lap-btn');
const resetbtn = document.getElementById('reset-btn');
const SecondBucket = document.querySelector('.sec');
const MinuteBucket = document.querySelector('.min');
const milliSecBucket = document.querySelector('.milsec');



let isStart = false;
let secCount = 0;
let minCount = 0;
let milliSecCount = 0;
let timeInterval= null;

const changebtn = () => {
    if (!isStart) {
        console.log('hi');
        resetbtn.classList.add('show-function');
        lapbtn.classList.add('show-function');
    }
    else {
        console.log('he');
        lapbtn.classList.remove('show-function');
        resetbtn.classList.remove('show-function');
        startbtn.classList.remove('show-function');

    }
}
const start = () => {
    if (!isStart) {
        console.log('is true');
        startbtn.innerHTML = 'pause';
        startMillisecond();
        startSecond();
        startMinutes();
        isStart = true;
    }
    else {
        console.log('is false');
        startbtn.innerHTML = 'start';
        clearInterval(timeInterval);
        isStart = false;
    }
    changebtn();
}

    const startSecond = () => {
        setInterval(() => {
            SecondBucket.innerHTML = secCount++;
        }, 1000);
    }

    const startMinute = () => {
        setInterval(() => {
            MinuteBucket.innerHTML = minCount++;
        }, 60*1000);
    }

    const startMillisecond = () => {
        setInterval(() => {
            milliSecBucket.innerHTML = milliSecCount++;
        }, 100);
    }


const reset = () => {
    clearInterval(timeInterval);
    secCount = 0;
    isStart = false;
    SecondBucket.innerHTML = secCount;
    startbtn.innerHTML = 'Start';
    lapbtn.classList.add('show-function');
    resetbtn.classList.add('show-function');

}


startbtn.addEventListener("click", start);
resetbtn.addEventListener("click", reset);
