function Temp(temp) {
  this.temp = temp;}
Temp.prototype.printTemp=function (interval){
  setTimeout(function(){console.log(temp);},interval);
};
exports.connect = function(tmpe) {return new Temp(temp);};
