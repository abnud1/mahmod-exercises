// make this line compile
function sum(a, b) {
  return a + b;
}
console.log(sum(1, 2));
// replace any
function concat(a: any, b: number): string {
  return a + b;
}
// so that this fail in compile error
console.log(concat(2, 4));

// put the return type of this function
function isEmpty(str: string) {
  return str.length === 0;
}
export {};
