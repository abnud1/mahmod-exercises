interface Pet {
  // change this so that we only support dogs and cats
  // hint: use literal types
  type: string;
}
interface Cat extends Pet {}
// make this error I mean a cat that is a dog?!!!
// hints: child interface can override parent's property
const a: Cat = { type: "dog" };

interface SchoolStudent {
  // age should be from 5 to 18 when dateOrAge is a number
  dateOrAge: number | string;
}
// notice that typescript errors on return type, well make it compile
// by changing type of dayOfWeek parameter only not function body
// extra: change function return type to the same type you chose for dayOfWeek
function nextDay(dayOfWeek: string): string {
  switch (dayOfWeek) {
    case "Saturday":
      return "Sunday";
    case "Sunday":
      return "Monday";
    case "Monday":
      return "Tuesday";
    case "Tuesday":
      return "Wednesday";
    case "Wednesday":
      return "Thursday";
    case "Thursday":
      return "Friday";
    case "Friday":
      return "Saturday";
  }
}
export {};
