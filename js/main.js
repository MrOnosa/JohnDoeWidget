window.onload = function() {
  console.log('+[window.onload]');

  var outerCir = document.getElementById('outer-cir');
  //contentText.textContent = "Something else";

  function step(timestamp){	  
	  //$('#content-text').each(function () {
	  //$('#output').text("Start");
	  //var elem = this;
	  // $('#content-text').text();
	  var text  = "Abcde Fghijklm"
	  //$('#output').text("Got text "+text);
	  for(var i = 0; i < text.length; i++)
	  {
		  //$('#output').text("Complete for in inner text "+i);
		  
		  var letter = document.createElement("span");
		  letter.setAttribute('id', 'char'+i);
		  var t = document.createTextNode(text.charAt(i));
		  letter.appendChild(t);
	  //}
	  //$('#output').text("about to select all "+i);
      //$(elem).lettering();
      //letters =$("[id^=char]")
      //letters = elem.getElementsByClassName("char1");
      //letters = Array.prototype.slice.call(letters)
	  //$('#output').text("Complete 1.5");
	  //for(t in letters)
	//	  $('#output').text($('#output').text()+t+' ');
	  //$('#output').text($('#output').text()+letters.length);
     // center = Math.floor(letters.length / 2);
      //for (i = 0; i < letters.length; i++) 
	 // {
		  //$('#output').text("Complete 2-"+i);
    	  //var letter = letters[i];
    	  letter.style.position = "absolute";
		  var r = 150;
		  var cx = 170;
		  var cy = 160;
		  var spin = 0.85+ (i * 0.10);
		  var x = cx + r * Math.cos(Math.PI*spin);
		  var y = cy + r * Math.sin(Math.PI*spin);
		  letter.style.left = x+"px";
		  letter.style.top = y+"px";  
		  outerCir.appendChild(letter);  	  
	  }
		  //$('#output').text("Complete 3");
		  
	  //});
	 // window.requestAnimationFrame(step);
  }
  window.requestAnimationFrame(step);
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
