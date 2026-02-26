import Chef from './Chef.js';
import Icons from './utils/Icons.js';

class Main {
  constructor() {
    this.init();
  }

  init() {
    Icons.load();
    console.log('init main');

    new Chef();
  }
}
new Main();
