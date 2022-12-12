const broadCast = (func) => {
    func();
}

const announceRain = () => {
    console.log("Grab an umbrella. It's going to rain today.");
}

const announceClear = () => {
    console.log("Grab your shades and sunscreen. It's going to be sunny and hot today.");
}

const weatherStation = (humidity) => {
    if(humidity > 95) {
        announceRain();
    } 
    else if (humidity < 95) {
        announceClear();
    }
}

const rainBroadCast = broadCast(weatherStation(96));

console.log(rainBroadCast);