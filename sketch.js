let slidr;
let arr = [];

function setup() {
  createCanvas(600, 600);
  slidr = createSlider(5,60,60,5);
  populate(arr);
  mix(arr);
}

function draw() {
  background(0);
  translate(0, height);
  scale(1, -1);
  colorMode(HSB);
  frameRate(slidr.value());
  noFill();

  doSort();
	show(arr);
}


//code cleanup
//code the remaining sorts

//design and integrate this with a full webpage
