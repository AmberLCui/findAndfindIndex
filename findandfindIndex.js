//first
function findUserByUsername(usersArray, username) {
    return usersArray.find(function (val) {
        return val.username === username;
    });
}

//second
function removeUser(usersArray, username) {
    let userIdx = usersArray.findIndex(function (val) {
        return val.username === username;
    })
    if (userIdx === -1) return;
    return usersArray.splice(userIdx, 1)[0];
}