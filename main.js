//weather app API
//Dom ellemnts

let input = document.querySelector('input-field');
let btn = document.querySelector('button');
let tem = document.querySelector('tem');
let weather = document. querySelector('weather');


//step 1 write functions that takes location as parameter and returns weather data 2bbb4c49b2f949c61f9c38bac3bc7810
function weatherData(city){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2bbb4c49b2f949c61f9c38bac3bc7810`
    ) 
    .then((response) => response.json())
    .then((data) =>{
     console.log(data);
     tem.innerText += data.main.temp;
     weather.innerText += data.wind.speed;
     city = input.value
    });
btn.addEventListener('click', weatherData);
}

