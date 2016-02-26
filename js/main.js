var looperLetter = prompt('Give me a letter!');
var counter;
var i;

for (counter = 0; counter < 10; counter++) {
  for (i = 0; i < counter; i++) {
    document.write(looperLetter);
  }
  document.write('<br>');
}
