
// this variable will keep track of the current interval - so we can stop the interval
let intervalID = 0;

// this function will start the image moving around
function startMove(){
    // create a shortcut/nickname to the image in the HTML
    let image = document.getElementById("memeImage");

    // store the current interval id
    intervalID = setInterval(function(){
        // Math formula makes the random float from 0 to 1 to instead be -0.5 to 0.5, then it centers the "variation" on the center of the page
        let xCord = Math.floor(4/5*(Math.random()-0.5)*window.innerWidth/2+window.innerWidth/2);
        let yCord = Math.floor(4/5*(Math.random()-0.5)*window.innerHeight/2+window.innerHeight/2);

        // hange the cords
        image.style.left = xCord + "px";
        image.style.top = yCord + "px";
    },1000/60); // this code will run every second

    document.getElementById("btnStart").disabled = true;
    document.getElementById("btnStop").disabled = false;
}
function stopMove(){
    clearInterval(intervalID);

    document.getElementById("btnStart").disabled = false;
    document.getElementById("btnStop").disabled = true;
}
