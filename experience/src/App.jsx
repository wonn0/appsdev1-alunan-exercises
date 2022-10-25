import React, { useEffect, useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import Loading from "./Loading";

const url = "https://course-api.com/react-tabs-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [people, setPeople] = useState([]);
  const [index, setIndex] = useState(0);

  const fetchPeople = async () => {
    const response = await fetch(url);
    const temp = await response.json();
    setPeople(temp);
    setLoading(false);
  };

  useEffect(() => {
    fetchPeople();
  }, []);

  if (loading) {
    return <Loading />;
  }

  const { company, dates, duties, title } = people[index];

  return (
    <div className="root">
      <section className="section">
        <div className="title">
          <h2>experience</h2>
          <div className="underline" />
        </div>
        <div className="jobs-center">
          <div className="btn-container">
            {people.map((person, i) => {
              return (
                <button
                  key={person.id}
                  onClick={() => setIndex(i)}
                  className={index == i ? "job-btn active-btn" : "job-btn"}
                >
                  {person.company}
                </button>
              );
            })}
          </div>
          <article className="job-info">
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p className="job-date">{dates}</p>
            {duties.map((duty, i) => {
              return (
                <div key={i} className="job-desc">
                  <FaAngleDoubleRight className="job-icon" />
                  <p>{duty}</p>
                </div>
              );
            })}
          </article>
        </div>
        <button className="btn">more info</button>
      </section>
    </div>
  );
}

export default App;
