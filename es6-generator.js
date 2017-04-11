var q = require("q");

var getUser = q.async(function * (name){
    var sql = "SELECT * FROM users WHERE name=?";
    var user = yield query(sql, name);
    if (!user) throw new Error("no user!");
    return user;
});