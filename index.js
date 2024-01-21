// const apikey = "dee476626ffdce25914e841643457857";
// const apiurl = "https://api.openweathermap.org/data/2.5/weather?q='${city}'&appid= + apikey + &units=metric"
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="


const apikey = "dee476626ffdce25914e841643457857";
// console.log(apiurl);



const select = document.querySelector(".search input");



const search = document.querySelector(".search button");
// console.log(search);

const weather_icon = document.querySelector(".weather-icon");
console.log(weather_icon);




async function checkweather(city){
    // const resp = await fetch(apiurl  + `city` +  api +`&appid=${apikey}`);
    const resp = await fetch(apiurl +city + `&appid=${apikey}`);
    var data = await resp.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name ;
    document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
    document.querySelector(".wind").innerHTML = data.wind.speed +"km/h";

    if(data.Weather [0].main == "Clouds")
    {
        weather_icon.src = "fa-solid fa-cloud-showers-water";
    }


}
 
search.addEventListener("click" , ()=>{
   checkweather(select.value);
   console.log("-> " + select.value)
})

