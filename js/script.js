let count = 1;
setInterval(() => {
    const sliderRadio = document.querySelector("#radio" + count);
    sliderRadio.checked = true;
    count++;
    if (count > 3) {
        count = 1;
    }
}, 5000);