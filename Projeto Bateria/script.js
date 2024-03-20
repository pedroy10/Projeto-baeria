document.body.addEventListener('keyup', (event)=>{
    playsound(event.code.toLowerCase() );

});

document.querySelector('.composer button').addEventListener('click', () => {
var song = document.querySelector('#input').value;

if(song !== ''){
    var songArray = song.split('');
    playcomposition(songArray);
}
});

function playsound(sound) {
    var audioElement = document.querySelector(`#s_${sound}`);
    var keyElement = document.querySelector(`div[data-key="${sound}"]`)

    if(audioElement) {
        audioElement.currentTime = 0;
        audioElement.play();
    }

    if(keyElement){
        keyElement.classList.add('active');

        setTimeout(()=>{
            keyElement.classList.remove('active');
        }, 300);
    }
}

function playcomposition(songArray) {
    var await = 0;
    for(var songItem of songArray) {
        setTimeout(()=> {
            playsound(`key${songItem}`);
        }, wait);

        wait += 250;
       
    }
}