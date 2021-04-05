class Dog {
  private barf: string;
  constructor() {
    this.barf = "Woof";
  }

  barfing(): string {
    return this.barf;
  }
}

const snickers = new Dog();
console.log(snickers.barfing());

// Factory function
const makeDog = () => {
  // This will be private
  const barf = "Woof";
  return {
    barfing: () => barf,
  };
};
