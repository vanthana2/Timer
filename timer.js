"use strict";

let countdown;

function initCountdown() {
    const giveawayEnd = new Date('2023-12-02T11:30:00');
    const currentTime = new Date();
    const remainingTime = giveawayEnd - currentTime;
    const seconds = Math.floor(remainingTime / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours % 24;
    document.getElementById('minutes').textContent = minutes % 60;
    document.getElementById('seconds').textContent = seconds % 60;
}

function startCountdown() {
    countdown = setInterval(initCountdown, 1000);
}

initCountdown();
startCountdown();