function Square() {
  return <button className="square">1</button>;
}



//creates a component - a piece of reusable code that represents a part of a user interface
//defines a function called Square
export default function Board() { //export makes this function accessible outside of this file, default tells other files using your code that it’s the main function in your file
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}

