import React from "react";
import "./App.css";
import BookList from "./Components/BookList/BookList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Book List</h1>
      </header>
      <main>
        <BookList />
      </main>
    </div>
  );
}

export default App;
