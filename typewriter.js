const sentence = "hello there from lighthouse labs";

let speed = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, speed);
  speed += 50;
}
