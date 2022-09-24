interface User {}
function fullName(user: User) {
  // make this compile
  return user.firstName + user.lastName;
}
function travel(user: User, address: string) {
  // make this compile
  user.travelTo(address);
}

function getAge(user: User): number {
  // make this compile
  return user.age;
}

interface Admin {}
// fill Admin according to this object
// hint: User and Admin has common properties
const a: Admin = {
  firstName: "Ahmad",
  lastName: "Habannakeh",
  age: 29,
  role: "teacher",
};
export {};
