var wank = require('./libs/wank');
var user = require('./libs/user');
var t_user1 = new user('xx1','name1');
var t_user2 = new user('xx2','name2');
var t_user3 = new user('xx3','name3');
var t_user4 = new user('xx4','name4');
var i = new wank();
i.add_user(t_user1);
i.add_user(t_user2);
i.add_user(t_user3);
i.add_user(t_user4);
i.start();
