let colors = ["red", "orange", "yellow", "green", "blue", "purple"];

let button = document.querySelector("button");

let body = document.querySelector("body");

let i = 0;

button.addEventListener("click", function () {
  if (i < colors.length) {
    ++i;
  } else {
    i = 0;
  }
  body.style.backgroundColor = colors[i];
});

/*
  <script type="text/javascript">
    let color = ["red", "orange", "yellow", "green", "blue", "purple"];
    var i = 0;
    document.querySelector("button").addEventListener("click", function () {
      i = i < color.length ? ++i : 0;
      document.querySelector("body").style.background = color[i];
    });
  </script>

    i = i < colors.length ? ++i : 0;

*/
