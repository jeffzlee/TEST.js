function TEST(pin) {
  this.pin = pin;
  getPinMode(pin) {
  console.log(getPinMode(pin));
};
};
/*
TEST.prototype.getPinMode = function (pin) {
  console.log(getPinMode(pin));
};
*/
exports.connect = function(pin) {
    return new TEST(pin);
};
