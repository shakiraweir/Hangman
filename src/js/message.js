module.exports = {
  message: function(messageText) {
    console.log(messageText)
  }
}

// draw hangman stickfigure using canvas API

// create function that displays canvas hanger when page loads
  window.onload = function displayHanger() {
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
  }


// hanging hangman
//display hangman onload
//hide hangman figure
//reveal a part of stick figure for every incorrect guess
  // var canvas = document.getElementById("myCanvas");
  // var ctx = canvas.getContext("2d");
  // ctx.beginPath();
  // ctx.arc(220, 140, 30, 0, 2 * Math.PI);
  // ctx.stroke();

  // ctx.moveTo(220,170);
  // ctx.lineTo(220,250);
  // ctx.stroke();
  // ctx.moveTo(220,250);
  // ctx.lineTo(180,300);
  // ctx.stroke();
  // ctx.moveTo(220,250);
  // ctx.lineTo(260,300);
  // ctx.stroke();
  // ctx.moveTo(220,210);
  // ctx.lineTo(180,195);
  // ctx.stroke();
  // ctx.moveTo(220,210);
  // ctx.lineTo(260,195);
  // ctx.stroke();

  // create JS function to respond to player 1 button by adding text onClick (acceptWord)
  //create function to display blank spaces (displayBlankSpaces)
  //create function to hide word entry display?
  //create function to process letter (processLetter)