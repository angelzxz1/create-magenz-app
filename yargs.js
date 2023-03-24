import Yargs from "yargs/yargs";

const yargs = Yargs(process.argv.slice(2))
	.alias("i", "ingredient")
	.describe("i", "choose your sandwich ingredients")
	.choices("i", ["peanut-butter", "jelly", "banana", "pickles"])
	.help("help");

// const args = yargs.argv;
// const { _ } = args;
// console.log(_);
// const [name] = args;
// console.log(name);argv
console.log(yargs);
