function TEST(pin) {
  this.pin = pin;
  }
TEST.prototype.pinMode = function (interval) {
  console.log(interval);
  setTimeOut(function () {console.log(getPinMode(this.pin))}, interval);
  
  };

exports.connect = function(pin) {
    return new TEST(pin);
};
