import { create } from "create";

const cliArgs: string[] = process.argv;
let state = [];

export const main = (args: string[]) => {
  if (args.length < 3) {
    return "Please enter an argument";
  } else {
    switch (args[2]) {
      case "create":
    }
  }
};

console.log(main(cliArgs));
