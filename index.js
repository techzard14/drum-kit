const kits = ['crash', 'kick', 'snare', 'tom'];

const containerEl = document.querySelector('.container');

kits.forEach((kit) => {
  const btnEl = document.createElement('button');
  btnEl.classList.add('btn');
  btnEl.innerText = kit;
  btnEl.style.backgroundImage = 'url(images/' + kit + '.png)';
  const audioEl = document.createElement('audio');
  audioEl.src = 'sounds/' + kit + '.wav'; // Here i changed the .mp3 to .wav
  containerEl.appendChild(btnEl);
  containerEl.appendChild(audioEl);
  // Here i added an event listener to button click
  btnEl.addEventListener('click', () => {
    audioEl.play();
  });
  window.addEventListener("keydown", (event)=>{
    if (event.key ===kit.slice(0,1)){
      audioEl.play()
      btnEl.style.transform = "scale(.9)";
    };
    setTimeout(()=>{
        btnEl.style.transform = "scale (1)";
    },100)
  })
});




// const kits = ["crash", "kick", "snare", "tom"];

// const containerEl = document.querySelector(".container");

// kits.forEach((kit) => {
//     const btnEl = document.createElement("button");
//     btnEl.classList.add("btn")
//     btnEl.innerText = kit;
//     btnEl.style.backgroundImage = "url (images/" + kit + ".png) ";
//     const audioEl = document.createElement("audio");
//     audioEl.src = "sounds/" + kit + ".mp3"
//     containerEl.appendChild(btnEl);
//     containerEl.appendChild(audioEl);
// });


