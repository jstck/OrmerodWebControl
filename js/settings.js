//Quick command buttons added to the row on the bottom of the control screen
var quickCommands = [
  {
    "title": "Turn on ATX power supply",
    "name": "Power on",
    "gcode": "M80"
  },
  {
    "title": "Turn off ATX power supply",
    "name": "Power off",
    "gcode": "M81"
  }

];

//Presets for bed and head temperatures in dropdowns. These will override whatever
//is stored in cookies
var tempPresets={
  "bed": [100,90,60,40,0],
  "head": [245,185,0]
}

//Values for the feed rates
//var feedRates=[50,150,500];
//var feedLengths=[1,5,10,50,100];

var feedRates=[150,300,600];
//var feedLengths=[3];

//Wether or not to clear existing feed rates, feed lengths, and quick commands upon existence of
//user defined ones
var feedRates_cleardefaults = true;
var feedLengths_cleardefaults = false;
var quickCommands_cleardefaults = false;
