const startbtn = document.getElementById('start-btn');
const lapbtn = document.getElementById('lap-btn');
const resetbtn = document.getElementById('reset-btn');
const SecondBucket = document.querySelector('.sec');
const MinuteBucket = document.querySelector('.min');
const milliSecBucket = document.querySelector('.milsec');
const lapItem = document.querySelector('.lap-item');



let isStart = false;
let ResetStatus = false;
let secCount = 0;
let minCount = 0;
let milliSecCount = 0;
let secondInterval;
let minuteInterval;
let microsecInterval;

const changebtn = () => {
    if (!isStart) {
        console.log('hi');
        if (minCount === 0 && milliSecCount === 0 && secCount === 0) {
            resetbtn.classList.add('show-function');
            lapbtn.classList.add('show-function');
        }

    }
    else {
        console.log('he');
        lapbtn.classList.remove('show-function');
        resetbtn.classList.remove('show-function');
    }
}
const start = () => {
    if (!isStart && !ResetStatus) {
        console.log('is true');
        startbtn.innerHTML = 'pause';
        isStart = true;

        secondInterval = setInterval(() => {
            if (secCount === 60) {
                secCount = 0;
            }
            SecondBucket.innerHTML = secCount++;
        }, 1000);

        minuteInterval = setInterval(() => {
            if (minCount === 60) {
                minCount = 0;
            }
            MinuteBucket.innerHTML = minCount++;
        }, 60 * 1000);

        microsecInterval = setInterval(() => {
            if (milliSecCount === 100) {
                milliSecCount = 0;
            }
            milliSecBucket.innerHTML = milliSecCount++;
        }, 10);

    }

    else {
        console.log('is false');
        startbtn.innerHTML = 'start';
        clearInterval(secondInterval);
        clearInterval(microsecInterval);
        clearInterval(minuteInterval);
        isStart = false;
    }
    changebtn();
}

const reset = () => {
    ResetStatus = true;
    clearInterval(secondInterval);
    clearInterval(microsecInterval);
    clearInterval(minuteInterval);
    secCount = 0;
    minCount = 0;  // Reset minCount as well
    milliSecCount = 0;
    isStart = false;
    SecondBucket.innerHTML = "00 :";
    MinuteBucket.innerHTML = "00 :";
    milliSecBucket.innerHTML = "00";
    startbtn.innerHTML = 'Start';
    lapbtn.classList.add('show-function');
    resetbtn.classList.add('show-function');
    ResetStatus = false;

}
const lap = () => {
    const lapTime = `${String(minCount).padStart(2, '0')}:${String(secCount).padStart(2, '0')}:${String(milliSecCount).padStart(2, '0')}`;
    const lapContent = document.createElement('li');
    lapContent.textContent = lapTime;
    lapItem.appendChild(lapContent);
}


startbtn.addEventListener("click", start);
resetbtn.addEventListener("click", reset);
lapbtn.addEventListener("click", lap);  
