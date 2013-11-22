var refreshInterval = 50; // in milliseconds, for setInterval
var millisInAnHour = 86400000; // number of milliseconds in an hour

function expansionhour() 
{
  var maxRadius = 67.5;
  var rateOfGrowth = maxRadius * refreshInterval / millisInAnHour;
  var circle2 = document.getElementById("circle2");
  var circleRadius = circle2.getAttribute('r');
  circleRadius = parseFloat(circleRadius);
  circleRadius = circleRadius + rateOfGrowth;
  console.log(circleRadius);
  if (circleRadius > maxRadius)
  {
    circleRadius = 0;
  }
  
  circle2.setAttribute('r', circleRadius);
}
  
setInterval ( expansionhour, refreshInterval );


//MINUTES CIRCLE


var millisInAnMinute = 1000*60*60;

function expansionminute() 
{
  var maxRadius = 67.5;
  
  var rateOfGrowth = maxRadius * refreshInterval / millisInAnMinute;
  
  var circle3 = document.getElementById("circle3");
  
  
  var circleRadius = circle3.getAttribute('r');
  
  circleRadius = parseFloat(circleRadius);
  
  circleRadius = circleRadius + rateOfGrowth;
  
  console.log(circleRadius);
  
if (circleRadius > maxRadius)
  {
    circleRadius = 0;
  }
  
  circle3.setAttribute('r', circleRadius);
}
  
setInterval ( expansionminute, refreshInterval );


//SECONDS CIRCLE

var millisInAnSecond = 60000;

function expansionsecond() 
{
  var maxRadius=200.5;
  
  var rateOfGrowth = maxRadius * refreshInterval / millisInAnSecond;
  
  var circle1 = document.getElementById("circle1");
  
  var circleRadius = circle1.getAttribute('r');
  
  circleRadius = parseFloat(circleRadius);
  
  circleRadius = circleRadius + rateOfGrowth;
  
  console.log(circleRadius);
  
if (circleRadius > maxRadius)
  {
    circleRadius = 0;
  }
  
  circle1.setAttribute('r', circleRadius);
}
  
setInterval ( expansionsecond, refreshInterval );
