(() => {
  setInterval(() => {
    let d = new Date();
    let second = d.getSeconds();
    let minutes = d.getMinutes();
    let hour = d.getHours();

    let secondRotationAngel = (360 * second) / 60;
    let minuteRotationAngel = (360 * minutes) / 60;
    let hourRotationAngel = (360 * (hour % 12)) / 12;

    document.querySelector(
      ".second-hand"
    ).style.transform = `rotate(${secondRotationAngel}deg)`;

    document.querySelector(
      ".minute-hand"
    ).style.transform = `rotate(${minuteRotationAngel}deg)`;

    document.querySelector(
      ".hour-hand"
    ).style.transform = `rotate(${hourRotationAngel}deg)`;
  }, 1000);
})();
