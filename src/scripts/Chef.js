import Poutine from './Poutine.js';

export default class Chef {
  constructor(chef) {
    this.element = chef;
    this.menu = [];
    this.container = this.element.querySelector('.js-order');
    this.totQuantite = 0;

    this.init();
  }

  init() {
    console.log('init chef');

    const bouton = this.element.querySelector('.js-btn-commande');
    const poutines = this.element.querySelectorAll('.js-poutine');

    for (let i = 0; i < poutines.length; i++) {
      const poutine = poutines[i];

      const instance = new Poutine(poutine);
      this.menu.push(instance);
    }

    console.log(this.menu);

    bouton.addEventListener('click', this.sendOrder.bind(this));
  }

  sendOrder() {
    const order = this.element.querySelector('.js-order');
    this.totQuantite = 0;

    order.innerHTML = '';
    console.log('sendOrder');

    for (let i = 0; i < this.menu.length; i++) {
      const poutine = this.menu[i];
      console.log(poutine.selectedType);

      if (poutine.selectedType != '') {
        console.log('why');
        this.totQuantite++;
      }
    }

    const p = document.createElement('p');
    p.innerText = `Nombre total de poutine(s) :  ${this.totQuantite}`;
    order.appendChild(p);
  }
}
