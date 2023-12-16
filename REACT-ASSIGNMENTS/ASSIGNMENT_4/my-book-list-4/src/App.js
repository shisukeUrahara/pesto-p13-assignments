import React, { useState } from "react";
import "./App.css";
import BookList from "./Components/BookList/BookList";
import ThemeContext from "./Context/ThemeContext";
import ThemeSwitcher from "./Components/ThemeSwitcher/ThemeSwitcher";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`App ${theme}`}>
        <header className="App-header">
          <h1>Book List</h1>
          <ThemeSwitcher />
        </header>
        <main>
          <BookList theme={theme} />
        </main>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
