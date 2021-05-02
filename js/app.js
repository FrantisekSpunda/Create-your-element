import { ElementsCreator, Div, Img, Input, Form, Link, Select } from './elementsCreator.js';


const setElement = document.querySelector('.element');
const submit1 = document.querySelector('.submit1');
const form = document.querySelector('.form');
const createElement = document.querySelector('.createdElement');
let element;
let formular;

submit1.addEventListener('click', () => {
    element = setElement.value.toLowerCase();


    if(element === 'div') {
        formular = [
            new Input('input', 'setTextContent', 'text','Text content','')
        ];
    }

    if(element === 'img') {
        formular = [
            new Input('input', 'setSource', 'text', 'Source')
        ]
    }
    
    if(element === 'input') {
        formular = [
            new Input('input', 'setType', 'text', 'Type'),
            new Input('input', 'setValue', 'text', 'Value'),
            new Input('input', 'setName', 'text', 'Name')
        ]
    }
    if(element === 'select') {
        formular = [
            new Input('input', 'setOptions', 'number', 0)
        ]
    }
    if(element === 'a') {
        formular = [
            new Input('input', 'setTextContent', 'text', 'Text Content'),
            new Input('input', 'setHref', 'text', 'Href'),

        ]
    }
    if(element === 'form') {
        formular = [
            new Input('input', 'setAction', 'text', 'Action'),
            new Input('input', 'setMethod', 'text', 'Method'),

        ]
    }


    formular.unshift(new Input('input', 'setClass', 'text','Class',''))
    formular.push(new Input('input', 'submit2', 'submit', 'Submit1',''));


    setElement.remove();
    submit1.remove();
    formular.forEach(element => {
        let createdElement = element.construct();
        form.appendChild(createdElement);
    });
    const submit2 = document.querySelector('.submit2');


    submit2.addEventListener('click', () => {

        const setClass = document.querySelector('.setClass').value.replace(/\s/g, '');

        function nodeToString ( node ) {
            var tmpNode = document.createElement( "div" );
            tmpNode.appendChild( node.cloneNode( true ) );
            var str = tmpNode.innerHTML;
            tmpNode = node = null; // prevent memory leaks in IE
            return str;
        }

        function finalStage( object ) {
            const createdElement = object.construct();
            console.log(createdElement);
            createElement.textContent = nodeToString(createdElement);
        }
        

        if(element === 'div') {
            const setTextContent = document.querySelector('.setTextContent').value;
            const createdObject = new Div(element, setClass, setTextContent);
            finalStage(createdObject)
        }
        if(element === 'img') {
            const setSource = document.querySelector('.setSource').value;
            const createdObject = new Img(element, setClass, setSource);
            finalStage(createdObject)
        }
        if(element === 'input') {
            const setType = document.querySelector('.setType').value;
            const setValue = document.querySelector('.setValue').value;
            const setName = document.querySelector('.setName').value;
            const createdObject = new Input(element, setClass, setType, setValue, setName);
            finalStage(createdObject)
        }
        if(element === 'select') {
            const setOptions = document.querySelector('.setOptions').value;
            console.log();
            const createdObject = new Select(element, setClass, setOptions);
            finalStage(createdObject)
        }
        if(element === 'a') {
            const setTextContent = document.querySelector('.setTextContent').value;
            const setHref = document.querySelector('.setHref').value;
            const createdObject = new Link(element, setClass, setTextContent, setHref);
            finalStage(createdObject)
        }
        if(element === 'form') {
            const setAction = document.querySelector('.setAction').value;
            const setMethod = document.querySelector('.setMethod').value;
            const createdObject = new Form(element, setClass, setAction, setMethod);
            finalStage(createdObject)
        }

        
    })
})







