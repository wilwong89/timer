const beepString = 'BEEP';//'\x07';
const beepArray = process.argv.slice(2);

for (let i = 0; i < beepArray.length; i++) {
  if (isNaN(beepArray[i]) || beepArray[i] < 0) {

    // Nothing
    
  } else {
    setTimeout(() => {
      process.stdout.write(beepString + " " + beepArray[i]);
      process.stdout.write('\n');
    }, beepArray[i] * 1000)
  }
}
