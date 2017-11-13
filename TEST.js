function TEST(pin) {
  this.pin = pin;
  }
TEST.prototype.getPinMode = function () {
  console.log(getPinMode(this.pin));
};

exports.connect = function(pin) {
    return new TEST(pin);
};
