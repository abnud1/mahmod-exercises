function mapNumbers(numbers: number[], func: (n: number) => number): number[] {
  return numbers.map(func);
}
function mapStrings(
  strings: string[],
  func: (str: string) => string
): string[] {
  return strings.map(func);
}
interface User {
  age: number;
}
function mapUsers(users: User[], func: (u: User) => User): User[] {
  return users.map(func);
}
// replace all map* with one map function satisfying these conditions
// hint: use generics
// return type should be number[] not any[]
// and number1 variable doesn't need type
const numbers = map([2, 3, 4], (number1) => n * 2);
// return type should be string[] not any[]
// again str1 variable doesn't need type
const strings = map(["a", "b"], (str1) => str1.toUpperCase());
// return type should be User[] not any[]
// again user1 variable doesn't need type
const inputUsers: User[] = [{ age: 32 }, { age: 43 }];
const users = map(inputUsers, (user1) => ({ age: user1.age + 1 }));

// extra credits:
// change map so that this statement returns number[]
const ages = map(inputUsers, (user1) => user1.age);
// replace these three interfaces with one interface
interface ListOfNumbers {
  array: number[];
  push: (str: number) => void;
}
interface ListOfStrings {
  array: string[];
  push: (str: string) => void;
}
interface ListOfUsers {
  array: User[];
  push: (u: User) => void;
}

export {};
