var counter = 0;

function onClick() {
  if (counter >= 50) {
    document.getElementById("counter").disabled = true;

    return false;
  }

  counter += 1;

  document.getElementById("counter").innerHTML = counter;
}

function onClick2() {
  if (counter <= 0) {
    document.getElementById("counter").disabled = true;

    return false;
  }

  counter -= 1;

  document.getElementById("counter").innerHTML = counter;
}
