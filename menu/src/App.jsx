<<<<<<< HEAD
import React, { useState } from "react";
import data from "./data";
import Item from "./Item";

function App() {
  const [items, setItems] = useState(data);
  const [categories, setCategories] = useState([
    "all",
    "breakfast",
    "lunch",
    "shakes",
  ]);

  const selectCategory = (category) => {
    if (category === "all") {
      setItems(data);
      return;
    }

    const temp = data.filter((item) => item.category === category);
    setItems(temp);
  };

  return (
    <div className="root">
      <main>
        <section className="menu section">
          <div className="title">
            <h2>our menu</h2>
            <div className="underline" />
          </div>
          <div className="btn-container">
            {categories.map((category, index) => {
              return (
                <button
                  type="button"
                  key={index}
                  className="filter-btn"
                  onClick={() => {
                    selectCategory(category);
                  }}
                >
                  {category}
                </button>
              );
            })}
          </div>
          <div className="section-center">
            {items.map((item) => {
              return <Item key={item.id} {...item} />;
            })}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
=======
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
>>>>>>> experience
