var input = document.querySelector(".input_text");
var main = document.querySelector("#name");
var temo = document.querySelector(".temp");
var desc = document.querySelector(".desc");
var clouds = document.querySelector(".clouds");
var button = document.querySelector(".submit");

button.addEventListener('click', function (name) {
    fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        input.value
        +"&appid=1122ad858ba96f4afcc702029e09cc0c"
    )
    .then("")
    .then((Response) => Response.json())
    .then((data) => {
        console.log(data);
    });
    // alert(input.value);
});