const api={
    key:"523976dea39eb8ad09be785b23558d6f",
    baseurl:"https://api.openweathermap.org/data/2.5/"
}

const searchBox=document.querySelector(".search-box");

searchBox.addEventListener('keyup' ,setQuery)


function setQuery(e){
    if(e.keyCode == 13){
        getResult(searchBox.value);
        console.log(searchBox.value);
    }
}

function getResult(query){
  fetch(`${api.baseurl}weather?q=${query}&units=metric&APPID=${api.key}`)
  .then((weather) =>{
    return weather.json()
  }).then(displayResult)
}


function displayResult(weather){
    console.log(weather);
    let city=document.querySelector(".location .city");
    city.innerHTML=`${weather.name}, ${weather.sys.country}`


    let now=new Date()
    let date=document.querySelector('.location .date');
    date.innerHTML=dateBuilder(now)

    let temp =document.querySelector('.temp');
    temp.innerHTML=`${Math.round(weather.main.temp)}<span>°C</span>`

    let weatherEl=document.querySelector(".weather");
    weatherEl.innerHTML=weather.weather[0].main;


    let hilow=document.querySelector(".hi-low")
    hilow.innerHTML=`${Math.round(weather.main.temp_min)}<span>°C</span> / ${Math.round(weather.main.temp_max)}<span>°C</span>`
}

function dateBuilder(s){
    let months=[
        'January',
        'Feburary',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ]
    let days=[
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thrusday",
        "Friday",
        "Saturday",
    ]

    let day=days[s.getDay()]
    let data=s.getDate();
    let month=months[s.getMonth()];
    let year=s.getFullYear();

    return `${day} ${data} ${month} ${year}`
}