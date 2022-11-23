// Animated Sentence

const sentence = "hello there from lighthouse labs";
let timer = 50;

// for (let character of sentence) {
//   setTimeout(() => {
//     process.stdout.write(character);
//   },timer)
//   timer += 50;
//   if (character === sentence[sentence.length - 1]) {
//     console.log();
//   }
// };

for (let i = 0; i < sentence.length; i++) {
  setTimeout(() => {
    process.stdout.write(sentence[i]);
    if (i === sentence.length - 1) {
      process.stdout.write('\n');
    }
  },timer)
  timer += 50;
}