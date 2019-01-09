var primaryColor = window
  .getComputedStyle(document.querySelector(".sidebar-control"), null)
  .getPropertyValue("background-color");

// Line Chart
var ctxLine = document.getElementsByClassName("line-chart");

var lineData1 = [42, 31, 15, 64, 61, 72, 70, 84];
var lineData2 = [13, 19, 34, 57, 72, 73, 78, 65];

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
          backgroundColor: "rgba(0, 0, 0, 0)",
          borderColor: primaryColor,
          borderWidth: 2
        }
      ]
    },
    options: {
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

new Chart(ctxLine[0].getContext("2d"), setOption(lineData1));
new Chart(ctxLine[1].getContext("2d"), setOption(lineData2));

var ctxPie = document.getElementsByClassName("pie-chart")[0];
ctxPie.width = 229;
ctxPie.height = 229;

var pieData = {
  type: "pie",
  data: {
    datasets: [
      {
        data: [10, 20, 30, 23],
        backgroundColor: ["#FF3907", "#371F72", "#3CBA9F", "#FEAD32"]
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

new Chart(ctxPie.getContext("2d"), pieData);
