const Smartglass = require('xbox-smartglass-core-node');

const DEFAULT_TRIES = 5;

module.exports = Xbox;

function Xbox(ip, id) {
  this.ip = ip;
  this.id = id;
  return this;
}

Xbox.prototype.powerOn = function (options, callback) {
  Smartglass.power_on({
    live_id: this.id, // Put your console's live id here (Required)
    tries: DEFAULT_TRIES, // Number of packets too issue the boot command (Optional)
    ip: this.ip // Your consoles ip address (Optional)
  }, function (result) {
    if (result) {
      console.log('Device booted successfully', result);
    } else {
      console.log('Failed to boot device');
    }

    if (callback instanceof Function) {
      callback();
    }
  });
};
