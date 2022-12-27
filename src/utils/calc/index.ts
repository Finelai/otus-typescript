const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

import { operate } from "./operate";

const rl = readline.createInterface({ input, output });

rl.question('> ', (answer: string) => {
  console.log(operate(answer));
  rl.close();
});
