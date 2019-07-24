var displaySelect = document.getElementById("displayStyle");
var displayStyle = "";

var sortFunc = function() {};
var sorting = false;

function changefunc(value) {
  sortFunc = value;
  counter = 0;
}

function doSort() {
  if (sorting && sortFunc != null) {
    eval(sortFunc);
  }
}

//canvas functions

function startStop() {
  if (displayStyle != "") {
    sorting = (sorting) ? false : true;
  }
}

function dots() {
  alert('dotting');
}

function refreshDisplay() {
  displayStyle = displaySelect.value;
}

function reset() {
  sorting = false;
  counter = 0;
  combDist = 600;

  loop();
  mix(arr);
}



//Array functions

function populate(arr) {
  for (let i = 0; i < width; i++) {
  	arr.push(map(i, 0, width, 0, height));
  }
}

function show(arr) {
	for (let i = arr.length; i >= 0; i--) {
    let hue = map(arr[i], 0, width, 0, 360);
    stroke(hue, 100, 100);
    if (displayStyle == "dots") {
      point(i,arr[i]);
    } else if (displayStyle == "circles") {
      circle(width/2, height/2, i/2)
    } else if (displayStyle == "lines") {
      line(i,0, i, arr[i]);
    } else if (displayStyle == "segments") {
      arc(width/2, height/2, width, height, 2 * PI * i/arr.length,2 * PI * (i+1)/arr.length,PIE);
    }
	}
}

function isSorted(arr) {
  let sortbool = true;
	for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i-1]) {
      return false;
    }
	}
  return true;
}

function mix(arr) {
	var j, x;
  for (i = arr.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = arr[i];
      arr[i] = arr[j];
      arr[j] = x;
  }
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
