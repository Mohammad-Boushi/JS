let calculator = {

   read() {
    this.a = +prompt('Enter number a?');
    this.b = +prompt('Enter number b?');
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  }

  };
  
  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() );
