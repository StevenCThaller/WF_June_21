// How do we define a function as asynchronous??

var searchForm = document.getElementById("userSearch");
searchForm.addEventListener("submit", searchForUser);
var avatar = document.getElementById("avatar");
var anchor = document.getElementById("userGithub");
var searchInput = document.getElementById("userName");
var bio = document.getElementById("bio");

async function getCoderData(userName){
    if(userName == null) {
        userName = "StevenCThaller";
    }

    // Now that this function has been defined as async, we can tell javascript when
    // to wait for something to actually come back
    var apiResponse = await fetch("https://api.github.com/users/"+userName);
    // now we need to convert the actual http response to json to be able to access it.
    var coderData = await apiResponse.json();
    console.log(coderData);
    changeAvatar(coderData.avatar_url, coderData.login + "'s avatar");
    changeUserHref(coderData.html_url);
    changeUserName(coderData.login);
    changeBio(coderData.bio);
    
}

getCoderData();

function searchForUser(e) {
    e.preventDefault();
    
    // the challenge becomes: how to grab the input text??
    
    getCoderData(searchInput.value);
    searchInput.value = "";
}


function changeAvatar(src, alt) {
    avatar.src = src;
    avatar.alt = alt;
}

function changeUserHref(url) {
    anchor.href = url;
}

function changeUserName(name) {
    anchor.innerText = name;
}

function changeBio(bioText){
    bio.innerText = "Bio: " + bioText;
}

