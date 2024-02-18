const fs = require("fs");
const readline = require("readline");
const { generateGreeting } = require("./greetings");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What's your name? ", (name) => {
  const greeting = generateGreeting(name);
  console.log(greeting);

  fs.writeFile("output.txt", greeting, (err) => {
    if (err) {
      console.error("There was an error writing to the file:", err);
    } else {
      console.log("Greeting saved to output.txt!");
    }

    rl.close();
  });
});
