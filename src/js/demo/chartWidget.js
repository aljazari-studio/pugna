// Widget Line Chart
let ctxLineWSales = document.getElementById("line-chartw-sales");
let ctxLineWVisitors = document.getElementById("line-chartw-visitors");
let ctxLineWSold = document.getElementById("line-chartw-sold");

var lineData1 = [42, 31, 15, 64, 61, 72, 70, 84];
var lineData2 = [227, 310, 332, 329, 338, 347, 352, 391];
var lineData3 = [78, 81, 115, 124, 131, 130, 127, 134];

ctxLineWSales && new Chart(ctxLineWSales.getContext("2d"), setOption(lineData1));
ctxLineWVisitors && new Chart(ctxLineWVisitors.getContext("2d"), setOption(lineData2));
ctxLineWSold && new Chart(ctxLineWSold.getContext("2d"), setOption(lineData3));
