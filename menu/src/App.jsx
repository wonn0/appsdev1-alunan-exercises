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
