// Chart Configs
function setOption(arr) {
  var options = {
    type: "line",
    data: {
      labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August"
      ],
      datasets: [
        {
          data: arr,
          backgroundColor: colorScheme.secondary,
          borderColor: colorScheme.secondary,
          borderWidth: 2,
          pointBackgroundColor: colorScheme.secondary,
          pointBorderWidth: 0,
        }
      ]
    },
    options: {
      elements: { point: { radius: 0, hitRadius: 10, hoverRadius: 5 } },
      maintainAspectRatio: false,
      scales: {
        yAxes: [
          {
            display: false
          }
        ],
        xAxes: [
          {
            display: false
          }
        ]
      },
      legend: {
        display: false
      }
    }
  };

  return options;
}

function setOptionMulti(arr1, arr2) {
  var options = {
    type: "line",
    data: {
      labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August"
      ],
      datasets: [
        {
          label: "Unique Visits",
          data: arr1,
          backgroundColor: "rgba(255, 204, 84, .8)",
          borderColor: "rgba(0, 0, 0, 0)",
          borderWidth: 0,
          pointBackgroundColor: "rgba(255, 204, 84, .8)",
          pointBorderWidth: 0
        },
        {
          label: "Page Views",
          data: arr2,
          backgroundColor: "rgba(246, 85, 77, .8)",
          borderColor: "rgba(0, 0, 0, 0)",
          borderWidth: 0,
          pointBackgroundColor: "rgba(246, 85, 77, .8)",
          pointBorderWidth: 0
        }
      ]
    },
    options: {
      elements: { point: { radius: 0, hitRadius: 10, hoverRadius: 5 } },
      maintainAspectRatio: false
    }
  };

  return options;
}

// Ecommerce Line Chart
let ctxLineFeedback = document.getElementById("line-chart-feedback");
let ctxLineSales = document.getElementById("line-chart-sales");
let ctxLineVisit = document.getElementById("line-chart-visit");

var lineData1 = [42, 31, 15, 64, 61, 72, 70, 84];
var lineData2 = [13, 19, 34, 57, 72, 73, 78, 65];

var lineDataMulti1 = [56, 67, 87, 89, 89, 97, 135, 132];
var lineDataMulti2 = [62, 83, 117, 130, 112, 124, 167, 178];

ctxLineFeedback && new Chart(ctxLineFeedback.getContext("2d"), setOption(lineData1));
ctxLineSales && new Chart(ctxLineSales.getContext("2d"), setOption(lineData2));

ctxLineVisit && new Chart(
  ctxLineVisit.getContext("2d"),
  setOptionMulti(lineDataMulti1, lineDataMulti2)
);

// Ecommerce Pie Chart
let ctxPieCategory = document.getElementById("pie-chart-category");

if (ctxPieCategory) {
  ctxPieCategory.width = 229;
  ctxPieCategory.height = 229;

  var pieData = {
    type: "pie",
    data: {
      datasets: [
        {
          data: [10, 20, 30, 23],
          backgroundColor: ["#4FA4F3", "#009A59", "#FFCC54", "#F6554D"]
        }
      ],
      labels: ["Sports", "Fashion", "Electronics", "Home & Garden"]
    },
    options: {
      maintainAspectRatio: false,
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 10,
          bottom: 10
        }
      }
    }
  };

  new Chart(ctxPieCategory.getContext("2d"), pieData);
}
