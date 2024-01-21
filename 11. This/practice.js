class Button {
  constructor(label) {
    this.label = label;
  }

  handleClick() {
    console.log(`Button ${this.label} clicked`);
  }

  attachToDom(selector) {
    const element = document.querySelector(selector);
    if (element) {
      element.addEventListener('click', this.handleClick.bind(this));
      // Using 'bind' to ensure 'this' in 'handleClick' refers to the instance of Button, not the DOM element
    }
  }
}

const add = new Button('Add');
add.attachToDom('#add');

const remove = new Button('Remove');
remove.attachToDom('#remove');
