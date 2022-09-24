// replace any
// hints: use union types
function concatOrSum(a: any, b: any): any {
  return a + b;
}
// should compile
concatOrSum(1, 2);
// should also compile
concatOrSum("a", 2);
// should also compile
concatOrSum(2, "a");
// should error
concatOrSum(true, "a");
// should also error
concatOrSum(2, false);

interface Cat {
  swim: () => void;
  meow: () => void;
}
interface Dog {
  swim: () => void;
  bark: () => void;
}
// replace any
function swim(animal: any) {
  animal.swim();
  // replace condition
  if (condition) {
    animal.bark();
  } else {
    animal.meow();
  }
}
export {};
