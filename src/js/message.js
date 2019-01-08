module.exports = {
  message: function(messageText) {
    console.log(messageText)
  }
}


// draw straight lines on canvas
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  ctx.moveTo(10,320);
  ctx.lineTo(120,320);
  ctx.stroke();
  ctx.moveTo(65,60);
  ctx.lineTo(65,320);
  ctx.stroke();
  ctx.moveTo(65,60);
  ctx.lineTo(220,60);
  ctx.stroke();
  ctx.moveTo(220,60);
  ctx.lineTo(220,110);
  ctx.stroke();

// draw a circle on canvas
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.arc(220, 140, 30, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.moveTo(220,170);
  ctx.lineTo(220,250);
  ctx.stroke();
  ctx.moveTo(220,250);
  ctx.lineTo(160,310);
  ctx.stroke();