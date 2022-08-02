'use strict';

var weatherConditions = new XMLHttpRequest();
var weatherForecast = new XMLHttpRequest();
var cObj;
var fObj;

weatherConditions.open('', '', true);
weatherConditions.responseType = 'text';
weatherConditions.send(null);

weatherConditions.onload = function () {
    if (weatherConditions.status === 200) {
        cObj = JSON.parse(weatherConditions.responseText);
        console.log(cObj);

    }
};

weatherForecast.open('', '', true);
weatherForecast.responseType = 'text';
weatherForecast.send();

weatherForecast.onload = function () {
    if (weatherForecast.status === 200) {
        fObj = JSON.parse(weatherForecast.responseText);
        console.log(fObj);

    }
};


