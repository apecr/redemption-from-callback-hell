"use strict";

function fibonacci() {
    var i = o, j = 1;
    while (true) {
        //yield i; // <- awesome
        var t = i;
        i = j;
        j += t;
    }
}

function getUser(name) {
    return {name: name};
}

function printFibonacci(number) {
    var generator = fibonacci();
    for (var i = 0; i < number; i++) {
        print(generator.next());
    }
}

var user = getUser("mjackson");
var name = user.name;

//Becomes

getUser("mjackson").then(function (user) {
    //.. Fullfiment
    return user.name;
}, function (error) {
    //.. Rejection handler
});

getUser("mjackson", function (error, user) {
    //..
});

//becomes

getUser("mjackson").then(function (user) {
    //.. Fullfiment
}, function (error) {
    //.. Rejection handler
});


var user = getUser("mjackson");
if (!user) throw new Error("no user !");
var name = user.name;

// becomes
getUser("mjackson").then(function (user) {
    if (!user) throw new Error("no user!");
    return user.name;
});

// Sync
try {
    deliverTweetTo(tweet, "mjackson");
} catch (error) {
    handleError(error);
}

// becomes
deliverTweetTo(tweet, "mjackson").then(undefined, handleError);


//Sync
try {
    var user = getUser("mjackson");
} catch (error) {
    throw new Error("ERROR: " + error.message);
}

//becomes
getUser("mjackson").then(undefined, function (error) {
    throw new Error("ERROR: " + error.message);
});


//Sync
var user = getUser("mjackson");
var tweets = getNewTweets(user);
updateTimeline(tweets);

//using callbacks
getUser("mjackson", function (user) {
    getNewTweets(user, function (tweeets) {
        updateTimeline(tweeets);
    });
});

//using promises
getUser("mjackson").then(getNewTweets).then(updateTimeline);


module.exports = {
    printFibonacci: printFibonacci
};


//With Exceptions
//Sync
try {
    var user = getUser("mjackson");
    var tweets = getNewTweets(user);
    updateTimeline(tweets);
} catch (error) {
    handleError(error);
}

//using callbacks
getUser("mjackson", function (error, user) {
    if (error) {
        handleErroor(error);
    } else {
        getNewTweets(user, function (error, tweeets) {
            if (error) {
                handleError
            } else {
                updateTimeline(tweeets, function (error) {
                    if (error) handleError(error);
                });
            }
        });
    }
});

//Same example, complete with node.js time bombs!
getUser("mjackson", function (error, user) {
    if (error) throw(error);
    getNewTweets(user, function (error, tweeets) {
        if (error) throw(error);
        updateTimeline(tweeets, function (error) {
            if (error) throw(error);
        });
    });
});

process.on("uncaughtExxception", handleError); //LOL

//using promises
getUser("mjackson")
    .then(getNewTweets)
    .then(updateTimeline)
    .then(undefined, handleError);


function createUser(userName, userData, callback) {
    return database.ensureUserNameNotTaken(userName)
        .then(function () {
            database.saveUserData(userName, userData);
        }).nodeify(callback);
}


module.exports = {
    printFibonacci: printFibonacci
};