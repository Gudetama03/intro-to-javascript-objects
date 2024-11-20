
const teacher1 = {
    name: "Omar",
    country: "Bahrain",
    phoneNumber: 33389777,
    age: 31,
}

console.log(teacher1.age)


const music = {
    currentTrack: "Just Ken",
    volume:70,
    currentPlaylist: ['Just Ken', 'Hey Blondie', 'What Was I Made For', 'Dance The Night'],
    mute(){
        music.volume=0
    },
    setVolume(vol){
        music.volume=vol
    },
    trackId: 0,
    next(){
        music.trackId+=1
        music.currentTrack= music.currentPlaylist[music.trackId]
    }

}

console.log(music)
console.log(music.volume)

// create a key value pair
music.rating = 7
console.log(music)

// update a ket value pair
music.volume = 20

// delete a key value pair
delete music.rating
console.log(music)

music.myPlaylist = ["Big Poppa","3 nights", "Novacane","Stressed out", "Breezeblocks"]
console.log(music.myPlaylist)
console.log(music)

delete music.myPlaylist
console.log(music)

// calling a method for object
music.mute()
music.setVolume(100)
console.log(music)

music.next()
console.log(music.currentPlaylist[music.trackId])
console.log(music.currentTrack)

music.currentPlaylist = [
    {
      title: 'Just Ken',
      artist: 'Ryan Gosling',
      album: 'Barbie The Album',
      length: '3:43',
    }, {
      title: 'Hey Blondie',
      artist: 'Dominic Fike',
      album: 'Barbie The Album',
      length: '2:21',
    }, {
      title: 'What Was I Made For',
      artist: 'Billie Eilish',
      album: 'Barbie The Album',
      length: '3:42',
    }, {
      title: 'Dance The Night',
      artist: 'Dua Lipa',
      album: 'Barbie The Album',
      length: '2:56',
    }
  ];

console.log(music.currentPlaylist[0].length)

music.currentPlaylist[2].length = "4:20"
console.log(music.currentPlaylist[2])
