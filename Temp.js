function Temp(temp) {
  this.temp = temp;}
Temp.prototype.printTemp=function (interval){
  console.log(this.temp);
};
exports.connect = function(tmpe) {return new Temp(temp);};
