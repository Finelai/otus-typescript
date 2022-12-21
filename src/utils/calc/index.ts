import { createInterface } from "readline";
import { stdin as input, stdout as output } from 'node:process';

import { operate } from "./operate";

const rl = createInterface({ input, output });

await rl.question('> ', (answer: string) => {
  console.log(operate(answer));
  rl.close();
});
