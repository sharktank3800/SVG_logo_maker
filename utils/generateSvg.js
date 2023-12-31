class Shape{
    constructor(text, color, textColor){
        this.text = text;
        this.color = color;
        this.textColor = textColor;
    }
}

class Triangle extends Shape{

    render(){
        return `
        <svg xmlns="http://www.w3.org/2000/svg"     width="300" height="200">
                <polygon points="100,10 40,190 190,190" fill="${this.color}" />
                <text x="100" y="100" text-anchor="middle" fill="${this.textColor}">
                    ${this.text}
                </text>
            </svg>`;
    }
}

class Circle extends Shape {

    render(){
        return `
        <svg xmlns="http://www.w3.org/2000/svg"   width="300" height="200">
         <circle cx="100" cy="100" r="80" fill="${this.color}" />
         <text x="100" y="100" text-anchor="middle" fill="${this.textColor}">
            ${this.text}
        </text>
        </svg>`;
    }
}

class Square extends Shape {
    
    render(){
        return `
        <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
                <rect width="200" height="200" fill="${this.color}" />
                <text x="100" y="100" text-anchor="middle" fill="${this.textColor}">
                    ${this.text}
                </text>
            </svg>`;
    }
}





function generateSvg(answers){
    const {text, color, textColor, shapeType} = answers;

    let shape;
    switch (shapeType){
        case "triangle":
            shape = new Triangle(text, color, textColor);
            break;
        case "circle":
            shape = new Circle(text, color, textColor);
            break;
        case "square":
            shape = new Square(text, color, textColor);
            break;

        default:
            throw new Error("Invalid shape type");
    }

    const svgContent = shape.render();
    return svgContent;
}



module.exports = generateSvg;