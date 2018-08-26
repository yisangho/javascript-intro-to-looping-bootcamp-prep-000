


function forLoop(arr) {
  var length = arr.length;

    for(let i = 0 ; i < 25 ; i++) {
      if (i <= 1) arr[i+length] = "I am " + i + " strange loop."
      else if (i >= 2) arr[i+length] = "I am " + i + " strange loops."
    }
    return arr
}

function whileLoop(idx) {
  while (idx) {
    console.log(idx)
    idx--;
  }
}

function doWhileLoop(arr) {

}
