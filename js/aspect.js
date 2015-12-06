// function init(){
//
//   stage = new createjs.Stage("demoCanvas");
//     //Create a Shape DisplayObject.
// circle = new createjs.Shape();
// circle.graphics.beginFill("red").drawCircle(0, 0, 40);
// //Set position of Shape instance.
// circle.x = circle.y = 50;
// //Add Shape instance to stage display list.
//
// var shape = new createjs.Shape();
//  shape.graphics.beginFill("#ff0000").drawRect(0, 0, 100, 100);
//
// stage.addChild(circle);
// // stage.addChild(shape);
//
// //Update stage will render next frame
// stage.update();
//
// function draw() {
//    drawRouletteWheel();
//  }
//
//  var colors = ['#c10000', "black",'#c10000', "black",'#c10000', "black",'#c10000', "black",
//    '#c10000', "black",'#c10000', "black",'#c10000', "black",'#c10000', "black",'#c10000',
//     "black",'#30e708','black', "#c10000",'black', "#c10000",'black', "#c10000",'black', "#c10000",
//     'black', "#c10000",'black', "#c10000",'black', "#c10000",'black', "#c10000",'black','#c10000', "#30e708"];
//    var numbers = ['27','10','25','29','12','8','19','31','18','6','21',
//                        '33','16','4','23','35','14','2','0','28','9','26','30',
//                        '11','7','20','32','17','5','22','34','15','3','24','36',
//                        '13','1','00'];
//
// function drawRouletteWheel() {
//
//   var startAngle = 0;
//   var arc = Math.PI / 6;
//   var spinTimeout = null;
//
//   var spinArcStart = 10;
//   var spinTime = 0;
//   var spinTimeTotal = 0;
//   var ctx;
//
//     var canvas = document.getElementById("wheelcanvas");
//     if (canvas.getContext) {
//       var outsideRadius = 140;
//       var textRadius = 375;
//       var insideRadius = 0;
//       var middleRadius = 0;
//       ctx = canvas.getContext("2d");
//       ctx.clearRect(0,0,400,400);
//
//
//       ctx.strokeStyle = "black";
//       ctx.lineWidth = 20;
//
//       ctx.font = '14px sans-serif';
//
//       for(var i = 0; i < 12; i++) {
//         var angle = startAngle + i * arc;
//         ctx.fillStyle = colors[i];
//
//         ctx.beginPath();
//         ctx.arc(250, 250, outsideRadius, angle, angle + arc, true);
//         ctx.arc(250, 250, insideRadius, angle + arc, angle, true);
//         ctx.arc(250, 250, middleRadius, angle + arc, angle, true);
//
//         ctx.stroke();
//         ctx.fill();
//         ctx.save();
//
//         ctx.shadowColor   = "rgb(220,220,220)";
//         ctx.fillStyle = "white";
//         ctx.translate(250 + Math.cos(angle + arc / 2) * textRadius, 250 + Math.sin(angle + arc / 2) * textRadius);
//         ctx.rotate(angle + arc / 2 + Math.PI / 2);
//         var text = numbers[i];
//         ctx.fillText(text, -ctx.measureText(text).width / 2, 0);
//         ctx.restore();
//       }
//
//       ctx.fillStyle = "white";
//       ctx.beginPath();
//       ctx.moveTo(250 - 4, 250 - (outsideRadius + 5));
//       ctx.lineTo(250 + 4, 250 - (outsideRadius + 5));
//       ctx.lineTo(250 + 4, 250 - (outsideRadius - 5));
//       ctx.lineTo(250 + 9, 250 - (outsideRadius - 5));
//       ctx.lineTo(250 + 0, 250 - (outsideRadius - 13));
//       ctx.lineTo(250 - 9, 250 - (outsideRadius - 5));
//       ctx.lineTo(250 - 4, 250 - (outsideRadius - 5));
//       ctx.lineTo(250 - 4, 250 - (outsideRadius + 5));
//       ctx.fill();
//     }
//   }
//   draw();
//
// }
