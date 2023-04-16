
class Shape {
    constructor (color){
        this.color = color
    }

}

class Triangle extends Shape {
    render() {
        return`<polygon  points="100,25 175,175 25,175" style="fill:${this.color}"/>`;
    };
};

class Square extends Shape {
    render() {
        return `<rect x="25" y="50"  width="150" height="150" style="fill:${this.color}"/>`
        
    };
};

class Circle extends Shape{
    render() {
        return `<circle cx="100" cy="125" r="75" style="fill:${this.color}"/>`
    };
};

module.exports = {Triangle, Square, Circle}; 
