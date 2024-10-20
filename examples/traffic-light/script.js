const redLight = document.getElementById('redLight');
const yellowLight = document.getElementById('yellowLight');
const greenLight = document.getElementById('greenLight');
const manualChangeButton = document.getElementById('manualChange');
const autoChangeButton = document.getElementById('autoChange');
const stopChangeButton = document.getElementById('stopChange');

let currentIndex = 0;
let intervalId = null;

const lights = [redLight, yellowLight, greenLight];
const lightColors = ['red', 'yellow', 'green'];

function changeLight() {
    // Turn off all lights first
    currentIndex = (currentIndex + 1) % lights.length;

    lights.forEach(light => light.classList.remove('on'));

    // Turn on the current light
    lights[currentIndex].classList.add('on');
    // Move to the next light
}

manualChangeButton.addEventListener('click', changeLight);

autoChangeButton.addEventListener('click', function () {
    // Disable buttons
    autoChangeButton.disabled = true;
    stopChangeButton.disabled = false;
    manualChangeButton.disabled = true;

    // Start auto-cycling every 2 seconds
    intervalId = setInterval(changeLight, 2000);
});

stopChangeButton.addEventListener('click', function () {
    // Stop the auto-cycle
    clearInterval(intervalId);

    // Re-enable buttons
    autoChangeButton.disabled = false;
    stopChangeButton.disabled = true;
    manualChangeButton.disabled = false;
});

// Initialize the traffic light with the red light on
redLight.classList.add('on');
