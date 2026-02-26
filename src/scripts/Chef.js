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
    new Poutine();
  }
}
