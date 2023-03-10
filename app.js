var input = document.querySelector(".input_text");
var main = document.querySelector("#name");
var temp = document.querySelector(".temp");
var desc = document.querySelector(".desc");
var clouds = document.querySelector(".clouds");
var button = document.querySelector(".submit");

button.addEventListener('click', function (name) {
    fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        input.value
        +"&units=metric&appid=1122ad858ba96f4afcc702029e09cc0c"
    )
    .then((Response) => Response.json())
    .then((data) => {
        var tempValue = data['main']['temp'];
        var nameValue = data['name'];
        var descValue = data['weather'][0]['description'];
        var cloudsValue = data['clouds']['all'];


        main.innerHTML = nameValue;
        desc.innerHTML = "Description - " + descValue;
        temp.innerHTML = "Temperature - " + tempValue + " C";
        clouds.innerHTML = "Clouds - " + cloudsValue;
        input.value = "";
        // console.log(data);
    })
    .catch((err) => alert("Wrong City Name!"));
    // alert(input.value);
});