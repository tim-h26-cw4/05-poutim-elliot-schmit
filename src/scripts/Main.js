import Chef from './Chef.js';
import Icons from './utils/Icons.js';

class Main {
  constructor() {
    this.chefs = document.querySelectorAll('.js-chef');
    this.init();
  }

  init() {
    Icons.load();
    console.log('init main');

    for (let i = 0; i < this.chefs.length; i++) {
      const chef = this.chefs[i];
      new Chef(chef);
    }
  }
}
new Main();
