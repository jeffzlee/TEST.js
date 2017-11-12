function TEST(pin) {
  this.pin = pin;
}

TEST.prototype.getPinMode = function (pin) {
  getPinMode(pin)
};

exports.connect = function(pin) {
    return new TEST(pin);
};
