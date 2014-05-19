
var user = module.exports = function(uid,name){
  this._uid  = uid;
  this._name = name;
  this._type = '';
  this._kaze = '';
  this._te_hai = [];
  this._hou_hai = [];
};
user.prototype.add_te_hai = function(hais){
  var self = this;
  for(var i = 0; i < hais.length; i++){
    self._te_hai.push(hais[i]);
  }
};
user.prototype.set_kaze = function(kaze){
  var self = this;
  self._kaze = kaze;
  return self;
};
