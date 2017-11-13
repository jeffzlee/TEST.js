function TEST(pin) {
  this.pin = pin;
  }
TEST.getPinMode = function () {
  console.log(getPinMode(this.pin));
};

exports.connect = function(pin) {
    return new TEST(pin);
};
