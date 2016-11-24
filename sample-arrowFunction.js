const names = ['Andrew', 'Julie', 'Jen'];

names.forEach(name => console.log('Arrow Function', name));

const returnMe = name => `${name}!`; //single line arrow function automatically returns a value
console.log(returnMe('luigi'));

const person = {
  name: 'Luigi',
  greet: function() {
    names.forEach( name => {
      console.log(`${this.name} say hi to ${name}`);
    });
  }
};

person.greet();

//challeng are
console.log('________________________________________');
const addStatement = (a, b) => {
  return a + b;
};

const addExpression = (a, b) => a + b;

console.log(addStatement(2, 3));
console.log(addExpression(2, 5));
