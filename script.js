const display = document.querySelector('.display');
const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');
const laps = document.querySelector('.laps');
let time = 0;
let lapTime = 0;
let intervalId;

startBtn.addEventListener('click', () => {
	intervalId = setInterval(() => {
		time++;
		display.textContent = formatTime(time);
	}, 1000);
});

stopBtn.addEventListener('click', () => {
	clearInterval(intervalId);
});

resetBtn.addEventListener('click', () => {
	clearInterval(intervalId);
	time = 0;
	lapTime = 0;
	display.textContent = formatTime(time);
	laps.innerHTML = '';
});

function formatTime(time) {
	const minutes = Math.floor(time / 60000);
	const seconds = Math.floor((time % 60000) / 1000);
	const milliseconds = time % 1000;
	return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${(milliseconds / 10).toString().padStart(2, '0')}`;
}

function addLap() {
	lapTime = time;
	const lap = document.createElement('div');
	lap.classList.add('lap');
	lap.textContent = formatTime(lapTime);
	laps.appendChild(lap);
}

document.querySelector('.start').addEventListener('click', addLap);