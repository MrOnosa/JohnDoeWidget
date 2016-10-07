//The name really rolls off the tongue.
var simpleWriteTextOnCirclePath = (function(){
  var circleElement,
  	  text;

  return {
    layout: function(){
		for(var i = 0; i < text.length; i++)
		{		  
			  var letter = document.createElement("span");
			  letter.setAttribute('id', 'char'+i);
			  var t = document.createTextNode(text.charAt(i));
			  letter.appendChild(t);	  
	    	  letter.style.position = "absolute";
			  var r = 150;
			  var cx = 170;
			  var cy = 160;
			  var spin = 0.85 + (i * 0.10);
			  var x = cx + r * Math.cos(Math.PI*spin);
			  var y = cy + r * Math.sin(Math.PI*spin);
			  letter.style.left = x+"px";
			  letter.style.top = y+"px";  
			  circleElement.appendChild(letter);  	  
		}
    },
    setElement: function( e ){
    	circleElement = e;
    },
    setText: function( t ){
    	text = t;
    }
  };
}());