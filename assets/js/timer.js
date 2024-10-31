// Ticket Message

const name = "{name}";
document.getElementById('nameDisplay').innerText = name;

// Countdown Timer
const targetDate = new Date('2024-12-01T14:30:00-08:00').getTime(); // December 1st at 2:30pm

function formatTime(number) {
    return number < 10 ? '0' + number : number;
}

function updateTimer() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const timerDisplay = document.getElementById('timer');
    timerDisplay.textContent = `${formatTime(days)} : ${formatTime(hours)} : ${formatTime(minutes)} : ${formatTime(seconds)}`;

    // If the countdown is over, display a message
    if (distance < 0) {
        clearInterval(countdownInterval);
        timerDisplay.textContent = "The Show Has Started!";
    }
}

const countdownInterval = setInterval(updateTimer, 1000);
updateTimer();