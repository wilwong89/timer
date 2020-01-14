const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');
////////////
// Event Handling for User Input
////////////
// on any input from stdin (standard input), output a "." to stdout
stdin.on('data', (key) => {
  if (key === 'b') {
    process.stdout.write('\x07');
  } else if (key > 0 && key < 10) {
    process.stdout.write(`setting timer for ${key} seconds...`+'\n');
    setTimeout(() => {
      process.stdout.write('\x07');
    }, key * 1000)
  } else if (key !== '\u0003') {
    process.stdout.write('Input should be a number from 1 to 9, or b. ctl+c to quit.\n');
  }
  if (key === '\u0003') {
    process.stdout.write('Thanks for using me, ciao!\n');
    process.exit();
  }
});
// console.log('after callback');