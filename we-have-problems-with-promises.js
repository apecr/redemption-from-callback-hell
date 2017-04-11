"use strict";

function getUserAccountById(id) {
}
function getUserByName(name) {
}

//Advance mistake #4:  okay, what if I want the result of two promises?

getUserByName('nolan').then(function (user) {
    return getUserAccountById(user.id);
}).then(function (userAccount) {
    // dangit, I need the "user" object too!
});

//Option 1
var user;
getUserByName('nolan').then(function (result) {
    user = result;
    return getUserAccountById(user.id);
}).then(function (userAccount) {
    // okay, I have both the "user" and the "userAccount"
});

//Option2 --> embrace the pyramid
getUserByName("nolan").then(function (user) {
    return getUserAccountById(user.id).then(function (userAccount) {
        // okay, I have both the "user and the "userAccount"
    });
});

//Option2 refactorized (extract the function into a named function)
function doSomething(user, userAccount){}

function onGetUserAndUserAccount(user, userAccount){
    return doSomething(user, userAccount);
}

function onGetUser(user){
    return getUserAccountById(user.id).then(function (userAccount) {
        return onGetUserAndUserAccount(user, userAccount);
    });
}

getUserByName("nolan")
    .then(onGetUser)
    .then(function () {
        // Ath this point doSomethig() is done, and we are back to indentation 1
    });

/// Finally your code will look like:
function putYourRightFootIn(){}
function putYourRightFootOut(){}
function shakeItAllAbout(){}

putYourRightFootIn()
    .then(putYourRightFootOut)
    .then(putYourRightFootIn)
    .then(shakeItAllAbout);

// Advanced mistake #5: promises fall through

Promise.resolve("foo").then(Promise.resolve("bar")).then(function(result){
    console.log(result);
});

function printTheFirstNotTheSecond() {
    return Promise.resolve("foo").then(Promise.resolve("bar"));
}

function printTheSecondNotTheFirst() {
    return Promise.resolve('foo').then(function () {
        return Promise.resolve('bar');
    });
}

module.exports = {
    printTheFirstNotTheSecond: printTheFirstNotTheSecond,
    printTheSecondNotTheFirst: printTheSecondNotTheFirst
}