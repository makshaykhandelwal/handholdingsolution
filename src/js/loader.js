function pageLoad() {
    setInterval(() => {
      fadeout();
    }, 1000);
  }

  function fadeout() {
    var opacity = 0;
    var intervalID = 0;
    setInterval(() => {
      var loader = document.getElementById("loader");
      opacity = Number(
        window.getComputedStyle(loader).getPropertyValue("opacity")
      );
      if (opacity > 0) {
        opacity = opacity - 0.1;
        loader.style.opacity = opacity;
      } else {
        clearInterval(intervalID);
        document.getElementById("loader").style.display = "none";
        document.getElementById("content").style.display = "block";
      }
    }, 40);
  }