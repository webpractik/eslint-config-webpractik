interface Person {
    name: string;
    age: number;
}

const people: Person[] = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 },
];

// eslint-disable-next-line no-console
var log = console.log;

for (const person of people) {
    log(`Hello, my name is ${person.name} and I am ${person.age} years old.`);
}

function identity<T>(arg: T): T {
    return arg;
}

const result = identity('TypeScript is awesome');
log(result);

interface Car {
    make: string;
    model?: string;
}

const car1: Car = { make: 'Toyota' };
const car2: Car = {
    make: 'Ford',
    model: 'Focus',
};

type Fruit = 'apple' | 'banana' | 'orange';
const favoriteFruit: Fruit = 'apple';

const inputValue: any = '42';
const numericValue = inputValue as number;

class Animal {
    private name: string;
    constructor(name: string) {
        this.name = name;
    }
    protected makeSound(sound: string) {
        log(`${this.name} says ${sound}`);
    }
}

class Dog extends Animal {
    constructor(private alias: string) {
        super(alias);
    }
    bark() {
        this.makeSound('Woof!');
    }
}

const dog = new Dog('Buddy');
dog.bark();

var fn = (): string => {
    return 'hello' + 1;
};

log(car1, car2, favoriteFruit, numericValue, fn());
