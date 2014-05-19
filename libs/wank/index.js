
var event = require('events').EventEmitter;
var util = require('util');
var debug = require('../debug/').print;
var hais = require('../hai').create_hais;
var wank = module.exports = function(){
  debug('wank','initialize wank object');
  this.users = [];
  this.game_type = '';
  this.use_hai_type = '';
  this.pee_hai = [];
  this.wan_hai = [];
  this.dora = [];
};
util.inherits(wank,event);


wank.prototype.add_user = function(user){
  debug('wank','call add_user');
  var self = this;
  self.users.push(user);
};
wank.prototype.shi_hai = function(){
  var self = this;
  debug('wank','call shi_hai');
  var _hais = hais(self.use_hai_type).hais;
  var len = _hais.length;
  var ary = _hais.concat();
  while(len) self.pee_hai.push(ary.splice(Math.floor(Math.random()*len--),1)[0]);
};
wank.prototype.decide_parent = function(){
  var self = this;
  var dice1 = Math.floor(Math.random()*6)+1;
  var dice2 = Math.floor(Math.random()*6)+1;
  var dice_value = dice1 + dice2;
  var parent =  self.users[(dice_value-1) % self.users.length];
  parent.chi_cha = 1;
  var _t = self.users.splice((dice_value-1)%self.users.length);
  var len = self.users.length;
  for(var i = 0; i < len;i++){
    _t.push(self.users.shift());
  }
  for(var i = 0; i < _t.length;i++){
    _t[i].seki = (i+1);
  }
  self.users = _t;
};
wank.prototype.hai_pai = function(){
  var self = this;
  var wan_hai_cnt = 14;
  // self.pee_hai.forEach(function(hai){
  for(var i = 0; i < self.pee_hai.length; i++){
    if(self.wan_hai.length >= wan_hai_cnt) break;
    var hai = self.pee_hai.pop();
    self.wan_hai.push(hai);
  }
  self.dora.push(self.wan_hai.pop());
  for(var j = 0; j < 12; j++){
    self.users[(j%4)]._te_hai = self.users[(j%4)]._te_hai.concat(self.pee_hai.splice(0,4));
  }
  for(var k = 0; k < 4; k++){
    self.users[k]._te_hai = self.users[k]._te_hai.concat(self.pee_hai.splice(0,1));
  }
};
wank.prototype.get_pee_hai = function(){
  var self = this;
  return self.pee_hai.shift();
};

wank.prototype.start = function(){
  var self = this;
  self.shi_hai();
  self.decide_parent();
  self.hai_pai();
};
