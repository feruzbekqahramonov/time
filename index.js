let timer = prompt('Vaqtni kiriting');

function ValidateTimer(timer) {
    timer = parseInt(timer);
    if(isNaN(timer) || timer <= 0 || timer >= 61){
        let newTimer = prompt('Iltimos 1 dan 60 minut orasidagi son kiriting');
        if(newTimer === null) return false;
        return ValidateTimer(newTimer);
    }
    return timer;
}

timer = ValidateTimer(timer);
if (timer === false) {
    alert('Vaqtdini no to`g`ri kiritingiz');
} else {
    const StartingMinute = timer;
    let time = StartingMinute * 60;

    const countdown = document.getElementById('time');

    setInterval(updateCountdown, 1000);

    function updateCountdown() {
        const minutes = Math.floor(time / 60)
        let seconds = time % 60;

        seconds = seconds < 10 ? '0' + seconds : seconds;

        countdown.innerHTML = `${minutes}:${seconds}`
        time--;
    }
}