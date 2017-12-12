class Titit {
  constructor(options) {
    this.options = options;
  }

  createPop() {
    return this.options;
  }
}

const ydTititOpt = {
  color: '#ff0',
  parentElem: '.content-insight-text p',
};

const ydTitit = new Titit(ydTititOpt);

console.log(ydTitit.createPop());
