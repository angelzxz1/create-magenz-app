import readline from "readline";
import inquirer from "inquirer";
import { app, withTS, optionsStyle } from "./options.js";
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const Selection = {
	option: "",
	useTS: "",
	style: "",
};

inquirer
	.prompt([
		{
			type: "list",
			name: "option",
			message: "What do you wanna create? ",
			choices: app.map(option => option.name),
			pageSize: app.length,
		},
	])
	.then(answer => {
		Selection.option = app.find(opt => opt.name === answer.option).name;
		console.log(`You chose: ${Selection.option.toString()}`);
	})
	.then(() => {
		inquirer
			.prompt([
				{
					type: "list",
					name: "option",
					message: "Do you want to use Typescript? ",
					choices: withTS.map(opt => opt.useTS),
					pageSize: withTS.length,
				},
			])
			.then(answer => {
				Selection.useTS = withTS.find(opt => opt.useTS === answer.option).useTS;
				console.log(`You chose: ${Selection.useTS}`);
			})
			.then(() => {
				if (Selection.option !== "API") {
					inquirer
						.prompt([
							{
								type: "list",
								name: "option",
								message: "What style do you want to use? ",
								choices: optionsStyle.map(opt => opt.style),
								pageSize: optionsStyle.length,
							},
						])
						.then(answer => {
							Selection.style = optionsStyle.find(opt => opt.style === answer.option).style;
							console.log(`You chose: ${Selection.style}`);
							rl.close();
						});
				} else {
					rl.close();
				}
			});
	});
