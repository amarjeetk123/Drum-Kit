
let audio_volume = 0.6;


let drum_btn_array = document.querySelectorAll(".drum_btn")
for (let i = 0; i <= drum_btn_array.length - 1; i++) {
    drum_btn_array[i].addEventListener("click", (event) => {
        // console.log(event)
        let innerHTML = event.target.innerHTML
        // console.log(innerHTML)
        animate_function(innerHTML);
        make_sound(innerHTML)
    })
}
const animate_function = (innerHTML) => {
    let current_key = document.querySelector(`.${innerHTML}`) // it will give whole button div
    // console.log(current_key)
    current_key.classList.add("btn_pressed")  // it will add a class in button div
    // console.log(current_key)
    setTimeout(() => {
        current_key.classList.remove("btn_pressed")
    }, 300)   // this will remove that class after 0.3 second
    // console.log(current_key)
}
const make_sound = (innerHTML) => {
    switch (innerHTML) {
        case "w":
            playMusic("./sounds/1.mp3");
            break;

        case "a":
            playMusic("./sounds/2.mp3");
            break;
        case "s":
            playMusic("./sounds/3.mp3");
            break;

        case "d":
            playMusic("./sounds/4.mp3");
            break;

        case "j":
            playMusic("./sounds/5.mp3");
            break;

        case "k":
            playMusic("./sounds/6.mp3");
            break;
        case "l":
            playMusic("./sounds/7.mp3");
            break;

        default:
            console.log("please Enter a valid button !!")
    }
}
const playMusic = (path) =>{
const audio = new Audio(path)
audio.volume = audio_volume
audio.play();
}


// code for volume up and down.................
const slider = document.getElementById("volume_slider");
slider.oninput = (event) =>{
   audio_volume = event.target.value / 100
}


// code for press rhe button by keyboard;
document.addEventListener("keypress" , (event) =>{
const triggered_key  = event.key;
animate_function(triggered_key)
make_sound(triggered_key)

})


// code for auto music...................
let auto_music_id;
let auto_music_on = false;
const auto_btn = document.getElementById("auto");
auto_btn.addEventListener("click" , () =>{
    if(auto_music_on){
clearInterval(auto_music_id)
auto_music_on = false
auto_btn.innerText = "start auto music"
    }
    else{
        start_auto_music()
        auto_music_on = true
        auto_btn.innerText = "stop auto music"
    }

})
const start_auto_music = () =>{
    let arr = ["w","a","s","d","j","k","l"]
   
  auto_music_id =  setInterval(()=>{
        let current_arr = arr[Math.floor(Math.random() * arr.length)]
        animate_function(current_arr)
        make_sound(current_arr)
    },300)
}