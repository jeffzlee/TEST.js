function TEST(pin) {
  this.pin = pin;
  }
TEST.prototype.pinMode = function (interval) {
  console.log(interval);
  setTimeout(function () {console.log(getPinMode(D2));}, interval);
  
  };

exports.connect = function(pin) {
    return new TEST(pin);
};
