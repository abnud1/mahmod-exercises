function swap<T, U>(a: T, b: U): (T | U)[] {
  return [b, a];
}
const [a, b] = swap(1, 2);
// this shouldn't error at all because swap is guarenteed to return
// 2 elements but swap return type doesn't reflect that right?
// hint: use tuples and don't remove generics
a.toExponential();
// this should error because swap returns exactly two elements
const [c, d] = swap("hello", 2);
// not only c can be undefined but it's not a number?!!!
// again change swap return type so that this compiles
// hint: use tuples and don't remove generics
c.toExponential();
// example to know what this function does:
// swapFirstTwo([1,2,4]) => [2,1,4]
function swapFirstTwo<T>(arr: T[]): T[] {
  const clone = [...arr];
  clone.splice(0, 2);
  // ok why arr[1] and arr[0] can be undefined when arr must have at least
  // two elements, or wait does it? make this compile by changing arr type
  // hint: use tuples with rest and don't remove generic
  return [arr[1], arr[0], ...clone];
}
// example to know what this function does
// removeFirstAndLast([1,4,5,2]) => [4,5]
function removeFirstAndLast<T>(arr: T[]): T[] {
  const clone = [...arr];
  clone.splice(0, 1);
  clone.splice(-1, 1);
  return clone;
}
// make this error
removeFirstAndLast([2]);
// and this too
removeFirstAndLast([2]);
// but this should work
removeFirstAndLast([2, 4, 6, 1]);
// hint: use tuples with rest
export {};
