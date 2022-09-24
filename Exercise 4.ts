// replace any
function sum(numbers: any): number {
  let sum = 0;
  for (const n of numbers) {
    sum += n;
  }
  return sum;
}
sum([2, 3, 4, 6]);
// replace any
function concat(arr1: any): number[] {
  const result = [];
  for (const a of arr1) {
    for (const innera of a) {
      result.push(innera);
    }
  }
  return result;
}
concat([
  [2, 3, 4],
  [5, 6, 7],
]);
interface Wheel {
  radius: number;
}
interface Car {
  // replace any
  wheels: any;
}
// replace any
// hint: a union type exists here
function maxRadius(wheelsOrRadiuses: any): number {
  let max = Number.MIN_VALUE;
  for (const wheelOrRadius of wheelsOrRadiuses) {
    if (typeof wheelOrRadius === "number" && max < wheelOrRadius) {
      max = wheelOrRadius;
    } else if (max < wheelOrRadius.radius) {
      max = wheelOrRadius.radius;
    }
  }
  return max;
}
maxRadius([2, { radius: 6 }, { radius: 4 }, 7]); // => 7
export {};
