export default class Poutine {
  constructor(poutine) {
    this.element = poutine;
    this.type = this.element.querySelectorAll('.js-btn-pout');
    this.selectedType = '';

    this.init();
  }

  init() {
    console.log('init poutine');

    for (let i = 0; i < this.type.length; i++) {
      const bouton = this.type[i];
      bouton.addEventListener('click', this.selectType.bind(this));
    }
  }

  selectType(event) {
    for (let i = 0; i < this.type.length; i++) {
      const bouton = this.type[i];
      bouton.classList.remove('is-active');
    }

    event.currentTarget.classList.add('is-active');
    this.selectedType = event.currentTarget.innerText;
    console.log(this.selectedType);

    this.updatePhoto(event);
  }

  updatePhoto() {
    const image = this.element.querySelector('.js-img');

    image.classList.add('is-active');
    image.src = `assets/images/${this.selectedType}.png`;
  }
}
