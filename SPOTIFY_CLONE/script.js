console.log("Welcome to Spotify Clone !!")

async function getsongs() {
    const res = await fetch("http://127.0.0.1:5500/SPOTIFY_CLONE/songs/");
    const html = await res.text();

    const container = document.createElement("div");
    container.innerHTML = html;

    const links = container.querySelectorAll("a");
    const songs = [];

    links.forEach(link => {
        if(link.href.endsWith(".mp3")){

            songs.push(link.href.split("/songs/")[1])
        }
    });
    return songs;
    
}
async function main() {
    // Get the list of songs 
    let songs = await getsongs();
    console.log(songs);
    
    let songUL = document.querySelector(".songlist").getElementsByTagName("ul")[0]    
    for(const song of songs){
        songUL.innerHTML = songUL.innerHTML + `<li> ${song.replaceAll("%20"," ")} </li>` ;
    }

    // play the first song 
    var audio = new Audio(songs[4]);
    audio.play();
    
    audio.addEventListener("loadeddata",()=>{
        let duration = audio.duration;
        console.log(duration);
   
   
        })
}

main()