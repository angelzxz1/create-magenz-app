
import readline from 'readline'
import inquirer from 'inquirer';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const options = [
  { name: 'Plain JavaScript' },
  { name: 'Plain TypeScript' },
  { name: 'React' },
  { name: 'React with TypeScript' },
  { name: 'Next 12' },
  { name: 'Next 12 with TypeScript' },
  { name: 'Next 13' },
  { name: 'Next 13 with TypeScript' },
];
const optionsStyle = [
    { name: 'Plain CSS' },
    { name: 'Tailwind' },
    { name: 'Chakra-UI' },
  ];

inquirer
  .prompt([
    {
      type: 'list',
      name: 'option',
      message: 'Choose an option:',
      choices: options.map(option => option.name),
      pageSize: options.length,
    },
  ])
  .then(answer => {
    const chosenOption = options.find(option => option.name === answer.option);
    console.log(`You chose: ${chosenOption.name}`);
    rl.close();
  });
