function TEST(pin,interval) {
  this.pin = pin;
  this.interval=interval;
  }
TEST.prototype.pinMode = function (interval) {
  setInterval(function () {console.log(getPinMode(this.pin));}, interval);
  };

exports.connect = function(pin) {
    return new TEST(pin);
};
