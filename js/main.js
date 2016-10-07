window.onload = function() {
  console.log('+[window.onload]');

  var outerCircleElement = document.getElementById('outer-cir'); 
  simpleWriteTextOnCirclePath.setText("Abcde Fghijklm");
  simpleWriteTextOnCirclePath.setElement(outerCircleElement);
  simpleWriteTextOnCirclePath.layout();
  //contentText.textContent = "Something else";

  //function step(timestamp){	  
	  //$('#output').text("Start");
  //}
  //window.requestAnimationFrame(step);
  //$('#content-text-out').append("<span>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</span>")
  //var para = document.createElement("P");
	//var t = document.createTextNode("This is a paragraph.");
	//para.appendChild(t);
	//document.body.appendChild(para);
 // $('#content-text').text("whoa.......")
  //$('#content-text').circleType({radius: 30});
  //
  //$('#content-text').circleType({radius: 50});
  //$('#content-text-cir').circleType({radius: 30});
  //$('#output').text("Complete");
  //$('#content-text').circleType({radius: 30});
};
