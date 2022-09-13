const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');

function isLampBroken() {
    return lamp.src.indexOf('quebrada') > -1
}

function lampOn() {
    if (!isLampBroken()) {
        lamp.src = './img/ligadapng.png';
    }
}

function lampOff() {
    if (!isLampBroken()) {
        lamp.src = './img/desligadapng.png';
    }
}

function lampBroken() {
    lamp.src = './img/quebradapng.png';
}

turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBroken);