var number1 = Math.round(Math.random() * 100);
const number1box = document.getElementById("number1");

var number2 = Math.round(Math.random() * 100);
const number2box = document.getElementById("number2");

var operators;
var score = 0;

var number3;
var munber3box = document.getElementById("number3");

var time = 20;
var timerId;

function randomise() {

    number1 = Math.round(Math.random() * 100);
    number2 = Math.round(Math.random() * 100);

    if (number1 < number2) {
        var extra = number1;
        number1 = number2;
        number2 = extra;
    }

    operators = Math.round(Math.random() * 5)
    switch (operators) {
        case 1:
            number3 = number1 + number2;
            break;
        case 2:
            number3 = number1 - number2;
            break;
        case 3:
            number3 = number1 * number2;
            break;
        case 4:
            number3 = number1 / number2;
            break;
        case 5:
            number3 = number1 % number2;
            break;
        case 0:
            randomise();
    }

    const plus = document.getElementById("plus");
    const minus = document.getElementById("minus");
    const mul = document.getElementById("mul");
    const divide = document.getElementById("divide");
    const modulus = document.getElementById("modulus");

    plus.onclick = () => {
        if ((number1 + number2) === number3) {
            score++;
            randomise();
            resetTime(timerId)
        } else {
            location.href = "./gameover.html?score=" + score
        }
    }

    minus.onclick = () => {
        if ((number1 - number2) === number3) {
            score++;
            randomise();
            resetTime(timerId)
        } else {
            location.href = "./gameover.html?score=" + score
        }
    }

    mul.onclick = () => {
        if ((number1 * number2) === number3) {
            score++;
            randomise();
            resetTime(timerId)
        } else {
            location.href = "./gameover.html?score=" + score
        }
    }

    divide.onclick = () => {
        if ((number1 / number2) === number3) {
            score++;
            randomise();
            resetTime(timerId)
        } else {
            location.href = "./gameover.html?score=" + score
        }
    }

    modulus.onclick = () => {
        if ((number1 % number2) === number3) {
            score++;
            randomise();
            resetTime(timerId)
        } else {
            location.href = "./gameover.html?score=" + score
        }
    }

    number1box.innerHTML = number1;
    number2box.innerHTML = number2;
    number3box.innerHTML = number3;

    console.log(number1 + " " + number2 + " " + number3 + " " + operators);

}

randomise();

function startTimer() {
    time = 20;
    timer.innerHTML = time;
    timerId = setInterval(() => {
        time--;
        if (time == 0) location.href = "./gameover.html?score=" + score;
        timer.innerHTML = time;
    }, 1000);
}

function resetTime(intervalId) {
    clearInterval(intervalId);
    startTimer();
}

startTimer();