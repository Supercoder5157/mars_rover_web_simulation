canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var rover_width = 100;
var rover_height = 90;
var images = ["mars.jpg","image_1.jpg","image_2.jpg","image_3.jpg"];
var random_number= Math.floor(Math.random()*4);
var background_image = images[random_number];
var rover_image = "rover.png";
rover_x = 10;
rover_y = 10;
function add(){
    baground_image_tag = new Image();
    baground_image_tag.onload = uploadbackground();
    baground_image_tag.src = background_image;

     rover_image_tag = new Image();
    rover_image_tag.onload = uploadrover();
    rover_image_tag.src = rover_image;
}
function uploadbackground(){
    ctx.drawImage(baground_image_tag,0,0,canvas.width,canvas.height);
}
function uploadrover(){
    ctx.drawImage(rover_image_tag,rover_x,rover_y,rover_width,rover_height);
}
window.addEventListener("keydown",myKeydown);
function myKeydown(e){
    var key_pressed = e.keyCode;
    console.log(key_pressed);

    if(key_pressed == "38"){
         up();
         console.log("up");
    }
    if(key_pressed == "40"){
         down();
         console.log("down");
   }
   if(key_pressed == "37"){
         left();
         console.log("left");
   }
   if(key_pressed == "39"){
         right();
         console.log("right");
   }   

}

function up(){
    if(rover_y >= 0){
        rover_y = rover_y - 10;
        uploadbackground();
        uploadrover();
    }
}

function down(){
    if(rover_y <= 300){
         rover_y = rover_y + 10;
         uploadbackground();
         uploadrover();
    }
}

function left(){
    if(rover_x >= 0){
        rover_x = rover_x - 10;
        uploadbackground();
        uploadrover();
    }
}

function right(){
    if(rover_x <= 700){
        rover_x = rover_x + 10;
        uploadbackground();
        uploadrover();
    }
}