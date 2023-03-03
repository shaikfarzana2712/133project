x = 0;
y = 0;
screen_width = 0;
screen_height = 0;
draw_apple = "";
apple = "";
speak_data = "";
to_number = 0;

function preload() {
    apple = loadImage("apple.png");
}

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start() {
    document.getElementById("status").innerHTML = "systen is listning plese speeak"
    recognition.start();
}
recognition.onresult = function (event) {

    console.log(event);

    var content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "the speech has been reconized as:" + content;

    to_number = Number(content);
    if (Number.isInteger(to_number)) {
        document.getElementById("status").innerHTML = "Started drawing apple ";
        draw_apple = "set";
    } else {
        document.getElementById("status").innerHTML = "The speech has not recognized a number ";
    }
}

function setup() {
    canvas = createCanvas(900, 600);
}

function draw() {
    if (draw_apple == "set") {
        for (var i = 1; i <= to_number; i++) {
            x = Math.floor(Math.random() * 700);
            y = Math.floor(Math.random() * 400);
            image(apple, x, y, 50, 50);
        }
        document.getElementById("status").innerHTML = to_number + " Apples drawn";
        draw_apple = "";
    }


}