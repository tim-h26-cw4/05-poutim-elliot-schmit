import Poutine from './Poutine.js';

export default class Chef {
  constructor() {
    this.element;
    this.menu = [];
    this.container;

    this.init();
  }

  init() {
    console.log('init chef');

    const bouton = document.querySelector('.js-btn-commande');
    const poutines = document.querySelectorAll('.js-poutine');

    for (let i = 0; i < poutines.length; i++) {
      const poutine = poutines[i];

      const instance = new Poutine(poutine);
      this.menu.push(instance);
    }

    console.log(this.menu);

    bouton.addEventListener('click', this.sendOrder.bind(this));
  }

  sendOrder() {}
}
