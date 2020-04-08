var	colors = generaterancol(6);
var numsquares = 6;
var squares = document.querySelectorAll(".square");
var pickedColor = pickcolor();
var colorDisplay = document.getElementById("colordisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var hardbtn = document.querySelector("#hardbtn");
var easybtn = document.querySelector("#easybtn");
//h1.style.textTransform="uppercase";
hardbtn.addEventListener("click", function(){
	//alert("Yeah");
	hardbtn.classList.add("selected");
	easybtn.classList.remove("selected");
	numsquares = 6;
	colors = generaterancol(numsquares);
	pickedColor = pickcolor();
	colorDisplay.textContent = pickedColor;
	for( var i= 0; i < squares.length; i++){
		
			squares[i].style.backgroundColor = colors[i];
		
	
			squares[i].style.display = "block";
	}
	h1.style.backgroundColor = "steelblue";

})
easybtn.addEventListener("click", function(){
	//alert("No Yeah!!");
	hardbtn.classList.remove("selected");
	easybtn.classList.add("selected");
	numsquares = 3;
	colors = generaterancol(numsquares);
	pickedColor = pickcolor();
	colorDisplay.textContent = pickedColor;
	for( var i= 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";

})

reset.addEventListener("click", function(){

	colors = generaterancol(numsquares);
	pickedColor = pickcolor();
	colorDisplay.textContent = pickedColor;
	for(var i=0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent = "";
	this.textContent = "New Colour";
})

colorDisplay.textContent = pickedColor;
for (var i = 0; i < squares.length; i++){
	//add initial colours to squares
	squares[i].style.backgroundColor = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function() {
		// body...
		//grab colour of clicked and compare
		var clickedColor = this.style.backgroundColor;
		console.log(clickedColor, pickedColor);
		if (clickedColor === pickedColor)
		{
			messageDisplay.textContent = "Correct";
			changedcolor(clickedColor);
			h1.style.backgroundColor = clickedColor;
			reset.textContent = "Play Again";
			//alert("Correct!");
		}
		else  {
			//alert("Wrong!");
		this.style.backgroundColor = "gray";
		messageDisplay.textContent = "Try Again";
		}
	});
}
function changedcolor(color){
	for (var i=0; i < squares.length; i++){
			squares[i].style.backgroundColor = color;
	}
}
	
	function pickcolor(){
		var rand = Math.floor(Math.random() * colors.length);
		return colors[rand];
	} 
function generaterancol(num){
	//make an array
	var arr = []


	for(var i = 0; i < num; i++){
	arr.push(random()) ;  //each time the function runs it pushes a random colour from random()

	}

	return arr;
}
function random(){
	// a pick a red from 0-255
	var r = Math.floor(Math.random() * 256);  // generate a number from 0 to 255
	//pick a green
	var g = Math.floor(Math.random() * 256); 
	//blue
	var b = Math.floor(Math.random() * 256);

	
	return "rgb(" + r + ", " + g + ", " + b + ")";


}