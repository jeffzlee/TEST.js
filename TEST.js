function TEST(pin,interval) {
  this.pin = pin;
  this.interval=interval;
  }
TEST.prototype.pinMode = function (interval) {
  setTimeout(function () {}, interval);
  console.log(getPinMode(this.pin));
};

exports.connect = function(pin) {
    return new TEST(pin);
};
