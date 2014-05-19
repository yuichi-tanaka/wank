var debug = require('../debug').print;
var normal = require('./normal');
module.exports.create_hais = function(type){
  debug('wank','call create_hais type : ' + type);
  return new normal();
};
