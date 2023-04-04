class shape (
    constructor (type){
        this.type = type;
        this.color = 'teal'
    }
    setColor(color); 
    {this.color = color;}

);

class Circle extends shape {
    constructor(type) {
        super(type);
    };
};

class Triangle extends shape {
    constructor(type) {
        super(type);
    }
}