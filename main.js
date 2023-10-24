let temp;
let isCelsius = false;
let time;
let resultTemp;
let resultTime;
let tempInput = document.getElementById('temp-input');
let timeInput = document.getElementById('time-input');
let toggle = document.getElementById("switch");
let submit = document.getElementById("submit");
let back = document.getElementById("back");

toggle.addEventListener("change", function () {
    isCelsius = toggle.checked;
});

function conversion(temp, time) {
    resultTemp = Math.floor(temp + 25);
    resultTime = time * 0.7;
}

submit.addEventListener("click", function () {
    if (tempInput.value === "" || timeInput.value === "") {
        alert("Both tempurature and time fields are required.")
    } else {
        temp = parseFloat(document.getElementById("temp-input").value);
        time = parseFloat(document.getElementById("time-input").value);

        if (isCelsius) {
            temp = Math.floor((temp - 32) * 5 / 9);
        }

        conversion(temp, time);

        document.getElementById("cook-input").style.display = "none";
        document.getElementById("home-header").style.display = "none";
        document.getElementById("toggle").style.display = "none";
        document.getElementById("results").style.display = "flex";
        document.getElementById("result-header").style.display = "block";

        document.getElementById("resultTemp").textContent = resultTemp;
        document.getElementById("resultTime").textContent = resultTime;
    }
});

back.addEventListener("click", function () {
    document.getElementById('temp-input').value = "";
    document.getElementById('time-input').value = "";
    document.getElementById("cook-input").style.display = "flex";
    document.getElementById("home-header").style.display = "block";
    document.getElementById("toggle").style.display = "inline-block";
    document.getElementById("results").style.display = "none";
    document.getElementById("result-header").style.display = "none";
});

