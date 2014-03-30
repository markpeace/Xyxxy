xyxxy.controller('UserSplash', function($scope, ParseService) { 
  
  
  driftyText = function () {
    
    totalClouds=0
    
    layers = [
      {label:'top', speed:10},
      {label:'middle', speed:20},
      {label:'bottom', speed:30}
    ];  
    
    textCloud = function () {
      
      var layer=Math.floor(Math.random()*3)
      c = document.createElement("span");
      c.className="textCloud " + layers[layer].label
      c.speed=layers[layer].speed
      c.id="m"+Math.round((Math.random()*1000))
      c.style.top= (Math.random()*100) + "%"
      c.innerHTML="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus nisi metus, sit amet congue tortor fringilla quis"
      return c
    }
    
    
    
    var createTimer = setInterval(function() { 
      
      if (totalClouds<30) { 
        
        totalClouds++;
        tc=new textCloud()
        kineticHolder.appendChild(tc); 
        var destroyTimer = setTimeout(function() {  
          if (document.getElementById(tc.id)){ tc.parentNode.removeChild(tc)} 
          totalClouds--;
        },tc.speed*1000)  
        }
    },2000)
    
    
    
    }();
  
  
});