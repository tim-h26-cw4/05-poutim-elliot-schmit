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

    if (this.selectedType == '') {
      event.currentTarget.classList.add('is-active');
      this.selectedType = event.currentTarget.innerText;
    } else {
      event.currentTarget.classList.remove('is-active');
      this.selectedType = '';
    }

    this.updatePhoto(event);
  }

  updatePhoto() {
    const image = this.element.querySelector('.js-img');

    if (this.selectedType !== '') {
      image.classList.add('is-active');
      image.src = `assets/images/${this.selectedType}.png`;
    } else {
      image.classList.remove('is-active');
      image.src = `assets/images/poutine.png`;
    }
  }
}
