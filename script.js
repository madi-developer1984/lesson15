function DomElement(selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;

    this.createElement = function () {
        let element;
        if (this.selector[0] === '.') {

            element = document.createElement('div');
            element.classList.add(this.selector.slice(1));
        } else if (this.selector[0] === '#') {

            element = document.createElement('p');
            element.id = this.selector.slice(1);
        } else {

            element = document.createElement(this.selector);
        }


        element.style.cssText = `
            height: ${this.height}px;
            width: ${this.width}px;
            background: ${this.bg};
            font-size: ${this.fontSize}px;
        `;


        element.textContent = 'Пример текста';


        document.body.appendChild(element);
    };
}


const exampleElement = new DomElement('.block', 100, 200, '#ffcc00', 16);


exampleElement.createElement();
