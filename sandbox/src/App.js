//creates a component - a piece of reusable code that represents a part of a user interface
//defines a function called Square
export default function Square() { //export makes this function accessible outside of this file, default tells other files using your code that it’s the main function in your file
  return <button className="square">X</button>; //returns a button, <button> is a JSX element (combo of JS and HTML), className="square" is a button property that tells CSS how to style
}
