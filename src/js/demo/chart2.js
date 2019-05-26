// Iot Line Chart
let ctxLineTemperature = document.getElementById("line-chart-temperature");
let ctxLineHumidity = document.getElementById("line-chart-humidity");
let ctxLineMoisture = document.getElementById("line-chart-moisture");
let ctxLineFertility = document.getElementById("line-chart-fertility");
let ctxLineIntensity = document.getElementById("line-chart-intensity");

var lineData1 = [42, 31, 15, 64, 61, 72, 70, 84];
var lineData2 = [13, 19, 34, 57, 72, 73, 78, 65];
var lineData3 = [42, 31, 15, 64, 61, 72, 70, 84];
var lineData4 = [13, 19, 34, 57, 72, 73, 78, 65];
var lineData5 = [13, 19, 34, 57, 72, 73, 78, 65];

ctxLineTemperature && new Chart(ctxLineTemperature.getContext("2d"), setOption(lineData1));
ctxLineHumidity && new Chart(ctxLineHumidity.getContext("2d"), setOption(lineData2));
ctxLineMoisture && new Chart(ctxLineMoisture.getContext("2d"), setOption(lineData3));
ctxLineFertility && new Chart(ctxLineFertility.getContext("2d"), setOption(lineData4));
ctxLineIntensity && new Chart(ctxLineIntensity.getContext("2d"), setOption(lineData5));
