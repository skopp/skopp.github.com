var Application = function() {
  var a, b, e, d, f = function() {
    for(var c = 0;c < d.length;c += 4) {
      var a = 255 * Math.random() + 50;
      d[c] = a;
      d[c + 1] = a;
      d[c + 2] = a
    }
    b.putImageData(e, 0, 0)
  };
  return{init:function() {
    a = document.getElementById("canvas");
    b = a.getContext("2d");
    a.width = 700;
    a.height = 500;
    b.fillStyle = "white";
    b.fillRect(0, 0, 700, 500);
    b.fill();
    e = b.getImageData(0, 0, 700, 500);
    d = e.data;
    setInterval(f, 30)
  }}
}();
Application.init();
