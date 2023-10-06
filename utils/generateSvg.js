class Shape{
    constructor(text, color, textcolor){
        this.text = text;
        this.color = color;
        this.textcolor = textcolor;
    }

    setText(text){
        this.text = text;
    }
    setColor(color){
        this.color = color;
    }
    setTextColor(textcolor){
        this.textcolor = textcolor;
    }
}

class Triangle extends Shape{

    render()
}

class Circle extends Shape{
    
}

class Square extends Shape {

}



function generateSvg(answers){

}




module.exports = generateSvg;