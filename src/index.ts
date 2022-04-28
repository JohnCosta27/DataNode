import { create } from 'create';

const cliArgs: string[] = process.argv;

if (cliArgs.length < 3) {
  console.log("Please enter an argument");
} else {
  switch (cliArgs[2]) {
    case "create":
      create();
  }
}

