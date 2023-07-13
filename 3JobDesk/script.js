$("#leftside-navigation .sub-menu > a").click(function (e) {
  $("#leftside-navigation ul ul").slideUp(),
    $(this).next().is(":visible") || $(this).next().slideDown(),
    e.stopPropagation();
});

// counters
const counters = document.querySelectorAll(".count");
const speed = 20; // The lower the slower

counters.forEach((counter) => {
  const updateCount = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;

    // Lower inc to slow and higher to slow
    const inc = target / speed;

    // console.log(inc);
    // console.log(count);

    // Check if target is reached
    if (count < target) {
      // Add inc to count and output in counter
      counter.innerText = Math.ceil(count + inc);
      // Call function every ms
      setTimeout(updateCount, 1);
    } else {
      counter.innerText = target;
    }
  };

  updateCount();
});

// chart

var ctx = document.getElementById("bar-chart");

new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Mar", "Feb", "Jan"],
    datasets: [
      {
        label: "On time",
        backgroundColor: "#fc46aa",
        data: [147.9, 133.8, 109.2, 102.3, 98.06, 84.34, 75.7, 81.7],
      },
      {
        label: "Leave",
        backgroundColor: "#2e5468",
        data: [74.2, 68.4, 40.3, 43.7, 51.94, 44.8, 48.5, 58.7],
      },
      {
        label: "Total Attendance",
        backgroundColor: "lightseagreen",
        data: [172.3, 163.7, 125, 114.2, 115.6, 100.1, 91.5, 93.3],
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          font: {
            size: 4,
            weight: "bold",
          },
        },
      },
    },
    indexAxis: "y",
    scales: {
      x: {
        ticks: { display: false },
        stacked: true,
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        stacked: true,
        ticks: { font: { weight: "bold" } },
        grid: {
          display: false,
        },
      },
    },
  },
});

var ctx = document.getElementById("pie-chart");
var myChart = new Chart(ctx, {
  type: "pie",
  data: {
    labels: ["Leave", "Late", "On Time"],
    datasets: [
      {
        data: [20, 30, 100],
        backgroundColor: ["#2e5468", "lightseagreen", "#fc46aa"],
        borderWidth: 0,
        hoverOffset: 20,
      },
    ],
  },
  options: {
    layout: {
      padding: 20,
    },
    plugins: {
      tooltip: {
        boxWidth: -1,
        boxHeight: -1,
        usePointStyle: true,
        callbacks: {
          label: function (context) {
            var label = context.label || "";

            return label;
          },
        },
      },
    },
  },
});
