xyxxy.controller('UserSplash', function($scope, ParseService) { 
  
  var kineticHolder = document.getElementById("kineticHolder");
  
  function driftyText() {  
    var n = document.createElement("span");
    n.className="textCloud"
    n.style.top= (Math.random()*100) + "%"
    n.innerHTML="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus nisi metus, sit amet congue tortor fringilla quis"
    kineticHolder.appendChild(n);
   
    setTimeout(function() {
      driftyText();
    },2000);
    
  }
  
  
  driftyText()
  
});