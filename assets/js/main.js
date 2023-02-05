// var button = document.getElementById("btn-prev");
// button.onclick = function () {
//   console.log("clicked");
//   var container = document.getElementById("logo-display");
//   scrollAmount = 0;
//   var slideTimer = setInterval(function () {
//     sec = document.getElementById("logos");
//     container.scrollLeft -= sec.offsetWidth;
//     scrollAmount += sec.offsetWidth;
//     if (scrollAmount >= 100) {
//       window.clearInterval(slideTimer);
//     }
//   }, 25);
// };

// var back = document.getElementById("btn-next");
// back.onclick = function () {
//   var container = document.getElementById("logo-display");
//   scrollAmount = 0;
//   var slideTimer = setInterval(function () {
//     sec = document.getElementById("logos");
//     container.scrollLeft += sec.offsetWidth;
//     scrollAmount += sec.offsetWidth;
//     if (scrollAmount >= 100) {
//       window.clearInterval(slideTimer);
//     }
//   }, 100);
// };

document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper-container", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 32,
    centeredSlides: true,
    autoplay: {
      delay: 8000,
    },
    breakpoints: {
      640: {
        slidesPerView: 1.5,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

  const chartOptions = {
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    tooltips: {
      enabled: false,
    },
    elements: {
      point: {
        radius: 0,
      },
    },
    scales: {
      xAxes: [
        {
          gridLines: false,
          scaleLabel: false,
          ticks: {
            display: false,
          },
        },
      ],
      yAxes: [
        {
          gridLines: false,
          scaleLabel: false,
          ticks: {
            display: false,
            suggestedMin: 0,
            suggestedMax: 10,
          },
        },
      ],
    },
  };

  var ctx = document.getElementById("chart1").getContext("2d");
  var chart = new Chart(ctx, {
    type: "line",
    data: {
      labels: [1, 2, 1, 3, 5, 4, 7],
      datasets: [
        {
          backgroundColor: "rgba(109, 246, 155, 0.1)",
          borderColor: "rgba(109, 246, 155, 0.8)",
          borderWidth: 2,
          data: [50, 500, 512, 600, 700, 800, 1024],
        },
      ],
    },
    options: chartOptions,
  });

  var ctx = document.getElementById("chart2").getContext("2d");
  var chart = new Chart(ctx, {
    type: "line",
    data: {
      labels: [1, 2, 1, 3, 5, 4, 7],
      datasets: [
        {
          backgroundColor: "rgba(246, 109, 155, 0.1)",
          borderColor: "rgba(246, 109, 155, 0.8)",
          borderWidth: 2,
          data: [50, 51, 52, 53, 54, 55, 56],
        },
      ],
    },
    options: chartOptions,
  });
  const btn = document.getElementById("menu-btn");
  const nav = document.getElementById("menu");

  btn.addEventListener("click", () => {
    btn.classList.toggle("open");
    nav.classList.toggle("flex");
    nav.classList.toggle("hidden");
  });

  function handlePreloader() {
    if ($(".preloader").length) {
      $(".preloader").delay(200).fadeOut(500);
    }
  }
  window.onload = function () {
    //hide the preloader
    handlePreloader();
  };
});
