function getNewTweetsForUsers(users){
    return users.map(getNewTweets);
}

// becomes

var q = require("q");

function getNewTweetsForUsersWithPromises(users){
    var promises = users.map(getNewTweets);
    return q.all(promises);
}