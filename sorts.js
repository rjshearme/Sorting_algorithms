let counter = 0;
var forwards = true;

function doubleSelection() {}

function comb() {}

function insertion() {}

function radixLSD() {}

function radixMSD() {}

function merge() {}

function slow() {}

function quick() {}

function heap() {}

function shell() {}

function shatter() {}

function tim() {}

function count() {}

function gravity() {}

function stooge() {}

function evo() {}

//Working
function combQuick() {
  let combDist = Math.floor(width * Math.pow(3/4, counter));
  combDist = (combDist < 1) ? 1 : combDist;
  console.log(combDist);
  for (let i=0; i<arr.length - combDist + 1; i++) {
    if (arr[i] > arr[i + combDist]) {
      swap(arr, i+combDist, i);
    }
  }
  counter++;
}

//Working
function bubble() {
  counter = (counter >= arr.length-1) ? 0 : counter;
  for (let i = counter; i < arr.length - 1; i++) {
		if (arr[i] > arr[i+1]) {
      swap(arr, i, i+1);
      counter = i+1;
    } else {
      counter = i+1;
      break;
    }
    break;
  }
}

//Working
function cocktail() {
  if (forwards) {
    for (let i = counter; i < arr.length - 1; i++) {
      forwards = (i == arr.length-2) ? false : forwards;
  		if (arr[i] > arr[i+1]) {
        swap(arr, i, i+1);
        counter = i+1;
      } else {
        counter = i+1;
        break;
      }
      break;
    }
  } else {

    for (let i = counter; i > 0; i--) {
      forwards = (i == 1) ? true : forwards;
  		if (arr[i-1] > arr[i]) {
        swap(arr, i, i-1);
        counter = i-1;
      } else {
        counter = i-1;
        break;
      }
      break;
    }
  }
}

//Working
function gnome() {
  counter = (counter < 1) ? 1 : counter;
  if (arr[counter] > arr[counter-1]) {
    counter++;
  } else {
    swap(arr, counter, counter-1);
    counter--;
  }
}

//Done
function quantumBogo() {
  mix(arr);
  if (isSorted(arr) == true) {
    alert("congratulations");
  } else {
    noLoop();
    alert("I'm sorry but you must end your universe.");
  }

}

//Done
function cocktailQuick() {
  for (let i=1; i<arr.length; i++) {
    if (arr[i-1] > arr[i]) {
      swap(arr, i-1, i);
    }
  }
  for (let i=arr.length; i > 0; i--) {
    if (arr[i] < arr[i-1]) {
      swap(arr, i-1, i);
    }
  }
}

//Done
function bogo() {
	if (!isSorted(arr)) {
    mix(arr);
  }
}

//Done
function bubbleQuick() {
  for (let i=1; i<arr.length; i++) {
    if (arr[i-1] > arr[i]) {
      swap(arr, i-1, i);
    }
  }
}

//Done
function selection() {
  let pos = 0;
  let val = -1;
  for (let i = counter; i < arr.length; i++) {
    if (arr[i] > val) {
      pos = i;
      val = arr[i];
    }
  }
  arr.splice(pos, 1);
  arr.unshift(val);
  counter++;
}
