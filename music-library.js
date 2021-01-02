const songs = ["It's My Life", "Bang Bang"];




function isSongExist(songName) {
    for (var i = 0; i < songs.length; i++) {
        if (songs[i].includes(songName)) {
            return true;
        }
    }
    return false;
}
