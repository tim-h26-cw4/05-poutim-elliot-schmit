import Poutine from './Poutine.js';

export default class Chef {
  constructor(chef) {
    this.element = chef;
    this.menu = [];
    this.container = this.element.querySelector('.js-order');
    this.totQuantite = 0;
    this.poutine;

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

    bouton.addEventListener('click', this.sendOrder.bind(this));
  }

  sendOrder() {
    this.totQuantite = 0;

    this.container.innerHTML = '';

    this.createHeader();

    for (let i = 0; i < this.menu.length; i++) {
      this.poutine = this.menu[i];

      if (this.poutine.selectedType != '') {
        this.totQuantite++;

        this.createListen();
      }
    }

    const p = document.createElement('p');
    p.innerText = `Nombre total de poutine(s) :  ${this.totQuantite}`;
    this.container.appendChild(p);
  }

  createHeader() {
    const header = document.createElement('h2');
    header.innerText = `Voici le résumé de votre commande :`;
    this.container.appendChild(header);
  }

  createListen() {
    const p = document.createElement('p');
    p.innerText = `Poutine #${this.totQuantite} - ${this.poutine.selectedType}`;
    this.container.appendChild(p);
  }
}
