const allFriends = ['samira', 'srishti', 'sifat', 'mowlee', 'manal', 'jarin', 'amio afroz'];
function bestFriends(friends){
    let longName = allFriends[0];
    for(const friend of friends){
        if(friend.length > longName.length){
            longName = friend;
        }
    }
    return longName;
}
const longestName = bestFriends(allFriends);
console.log(longestName);
