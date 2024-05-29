let api = 'https://api.openweathermap.org/data/2.5/weather?q=Manila,PH&units=metric&appid=a0504da97e903a254805a23931553b79'
fetch(api)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const weath_temp = data.main.temp;
    const weath_des = data.weather[0].main;
    const weath_loc = data.name;
    const { icon } = data.weather[0];
    const { country } = data.sys;
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
    document.querySelector('.temp_val h2').innerText = weath_temp + "°C";;
    document.querySelector('.temp_desc h2').innerText = weath_des;
    document.querySelector('.location h2').innerText = weath_loc + ", " + country;



    if (weath_des == 'Sunny') {
      document.body.style.backgroundImage = 'url("sunnybg.jpg")';
    } else if (weath_des == 'Clouds') {
      document.body.style.backgroundImage = 'url("cloudbg.jpg")';
    } else if (weath_des == 'Rain') {
      document.body.style.backgroundImage = 'url("rainbg.jpg")';
    }
    else if (weath_des == 'Thunderstorm') {
      document.body.style.backgroundImage = 'url("thundertormbg.jpg")';
    }


  })


