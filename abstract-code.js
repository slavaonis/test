class Foo {
  constructor(text) {
    this.text = text;
  }

  genericMethod() {
    console.log('running from super class. Text: ' + this.text);
  }

  doSomething() {
    console.log('Foo: Method implemented successfully!');
  }
}

class Bar extends Foo {
  constructor(text) {
    super(text);
  }

  genericMethod() {
    console.log('Running from extended class. Text: ' + this.text);
  }

  doSomething() {
    console.log('Bar extends Foo: Method implemented successfully!');
  }
}

let b = new Bar('Bar!');
b.genericMethod();
b.doSomething();