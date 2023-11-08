import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div>
      <Profile name="Eathan Coenraad" photoName="eathan_profile.jpg" />
    </div>
  );
}

function Profile(props) {
  return (
    <div>
      <img className="avatar" src={props.photoName} alt={props.name} />
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h1>Eathan Coenraad</h1>
      <p>
        Full-stack web developer and teacher at Udemy. When not coding or
        preparing a course, I like to play boar games, to cook (and eat), or to
        just enjoy the South African sun at the beach.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="💪" color="blue" />
      <Skill skill="HTML+CSS" emoji="💪" color="yellow" />
      <Skill skill="JavaScript" emoji="💪" color="green" />
      <Skill skill="Git and Github" emoji="👍" color="grey" />
      <Skill skill="Web Design" emoji="💪" color="orange" />
      <Skill skill="C#" emoji="💪" color="red" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
