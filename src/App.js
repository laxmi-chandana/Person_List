import React from 'react';
import logo from './logo.svg';
import './App.css';

const Person = ({img, name, job, children}) => (
    <article className = "person">
      <img src= {`https://randomuser.me/api/portraits/thumb/men/${img}.jpg`} alt ="person"/>
      <h4>{name}</h4>
      <h4>{job}</h4>
      {children}
    </article>
)

function App() {
  return (
    <section className = "person-list">
      <Person img = "54" name ="David" job = "Software"/>
      <Person img ="55" name ="John" job = "Pune"/>
      <Person img = "56" name = "Alice" job = "Teacher">
        <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores,
          tempora!
        </p>
      </Person>

    </section>
  );
}

export default App;
