const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Square, Circle } = require('./lib/shapes');
const { throwError } = require('rxjs');

const questions = [{
    //the input.length will make they only 3 characters or less will appear
    name: 'text',
    message: 'Enter three characters:',
    validate: (input) => input.length <= 3,
},
{
    type: 'input',
    name: 'textColor',
    message: 'Enter a color keyword (or hexadecimal number)for text color',

},
{
    type: 'list',
    name: 'shape',
    message: 'Pick a shape from the list',
    choices: ['Triangle', 'Square', 'Circle'],
},
{
    type: 'input',
    name: 'shapeColor',
    message: 'Enter a color keyword (or hexadecimal number) for shape color',
},
];

inquirer.prompt(questions).then((answers) => {
    var shape;
    switch (answers.shape) {
        case 'Triangle':
            shape = new Triangle(answers.shapeColor);
            break;
        case 'Square':
            shape = new Square(answers.shapeColor);
            break;
        case 'Circle':
            shape = new Circle(answers.shapeColor);
            break;
    }
    // this should create the SVG img with the shape, color, text thanks to render
    const svg = `<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">
${shape.render()}
<text x="100" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}"> ${answers.text}</text>
</svg>`;

    fs.writeFile('logo.svg', svg, (error) => {
        if (error) { throw error };
        console.log("Congratulations, you have Generated a logo.svg!")
    });


});