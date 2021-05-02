class ElementsCreator {
    constructor(_element, _class) {
        this.element = _element,
        this.class = _class
    }

    showYourSelf() {
        console.log(this);
    }

    construct() {
        const thisElement = document.createElement(this.element);
        
        thisElement.classList.add(this.class);
        this.textContent ? thisElement.textContent = this.textContent: false ;
        this.source ? thisElement.src = this.source: false ;
        this.href ? thisElement.href = this.href: false ;
        this.type ? thisElement.type = this.type: false ;
        this.value ? thisElement.value = this.value: false ;
        this.name ? thisElement.name = this.name: false ;
        this.action ? thisElement.action = this.action: false ;
        this.method ? thisElement.method = this.method: false ;
        if(this.options) {
            for(let i = 0; i < this.options; i++) {
                const thisOption = document.createElement('option');
                thisElement.appendChild(thisOption)
            }
        }

        return(thisElement);
    }
}

class Div extends ElementsCreator {
    constructor(_element, _class, _textContent) {
        super(_element, _class)

        this.textContent = _textContent
    }

    
}

class Img extends ElementsCreator {
    constructor(_element, _class, _source) {
        super(_element, _class)

        this.source = _source
    }
}

class Input extends ElementsCreator {
    constructor(_element, _class, _type, _value, _name) {
        super(_element, _class)

        this.type = _type,
        this.value = _value,
        this.name = _name
    }
}

class Select extends ElementsCreator {
    constructor(_element, _class, _options) {
        super(_element, _class)

        this.options = _options
    }
}

class Link extends ElementsCreator {
    constructor(_element, _class, _textContent, _href) {
        super(_element, _class)

        this.textContent = _textContent,
        this.href = _href
    }
}

class Form extends ElementsCreator {
    constructor(_element, _class, _action, _method) {
        super(_element, _class)

        this.action = _action,
        this.method = _method
    }
}

export { ElementsCreator, Div, Img, Input, Form, Link, Select };

