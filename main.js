canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

greencar_width=75;
greencar_height=100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

greencarX=5;
geencarY=225;

function add() {
	background_imageTag= new Image();
	background_imageTag=uploadBackground;
	background_imageTag.src=background_image;

	greencar_imageTag=new Image();
	greencar_imageTag=uploadgreencar;
	greencar_imageTag.src=greencar_image;
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, greencar_X, greencar_Y, greencar_width, greencar_height)

	function uploadgreencar() {
		ctx.drawImage(greencar_imgTag, greencar_X, greencar_Y, greencar_width, greencar_height)
	}
}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(greencar_Y>=0) {
		greencar_Y = greencar_Y - 10;
		console.log("when up arrow is pressed, x=" + greencar_X +" | y = "+greencar_Y);
		uploadBackground();
		uploadgreencar();
	}
}

function down()
{
	if(greencar_Y<=50-0) {
		greencar_Y = greencar_Y + 10;
		console.log("when up arrow is pressed, x=" + greencar_X +" | y = "+greencar_Y);
		uploadBackground();
		uploadgreencar();
}

function left()
{
	if(greencar_X>=0) {
		greencar_X = greencar_X - 10;
		console.log("when up arrow is pressed, x=" + greencar_X +" | y = "+greencar_Y);
		uploadBackground();
		uploadgreencar();
}

function right()
{
	if(greencar_X<=700) {
		greencar_X = greencar_X + 10;
		console.log("when up arrow is pressed, x=" + greencar_X +" | y = "+greencar_Y);
		uploadBackground();
		uploadgreencar();
}
