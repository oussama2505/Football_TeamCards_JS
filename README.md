# Learn Modern JavaScript Methods by Building Football Team Cards
In this project, you will build a set of football team cards and learn about nested objects, object destructuring, default parameters, event listeners, and switch statements

## Use the Object.freeze() method
To ensure that you can't modify an object by adding or removing any properties. We are going to use a method called Object.freeze(obj) which will freeze this object and prevent any changes being made to it.

## object destructuring
The object destructuring syntax allows you to unpack values from arrays and objects:

```
const developerObj = {
  name: "Jessica Wilkins",
  isDeveloper: true
};
const { name, isDeveloper } = developerObj;
```



## function Filter()
- Now you will start building out the function that will show player cards based on the selections made by the user in the Filter Teammates dropdown menu.

- Function parameters can be initialized with default values. If a function is called without an argument, then the default value will be used:

```
const greeting = (name = "Anonymous") => {
  return "Hello " + name;
} 

console.log(greeting("John")); // Hello John
console.log(greeting()); // Hello Anonymous
```

- arr contains a series of objects that each contains a name, position, number, isCaptain and nickname property. In order to access each of those properties inside the callback function, you will need to use object destructuring to unpack them into variables.

- Inside the body of the callback function, you will need to add template literals `` which will contain the HTML content for the player cards.

Since you are working with template literals, you will need to use an embedded expression for the name parameter

`${expression goes here`

- The .map() method will return a new array of player-card items separated by commas.

To remove the commas between each player-card so it does not show up on screen, chain the .join() method to the .map() method. Pass an empty string as the argument for the .join() method.