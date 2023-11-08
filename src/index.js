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
    <div className="avatar">
      <Profile name="Eathan Coenraad" photoName="eathan_profile.jpg" />
    </div>
  );
}

function Profile(props) {
  return (
    <div>
      <img src={props.photoName} alt={props.name} />
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h2>Eathan Coenraad</h2>
      <p>
        Full-stack web developer and teacher at Udemy. When not coding or
        preparing a course, I like to play boar games, to cook (and eat), or to
        just enjoy the South African sun at the beach.
      </p>
    </div>
  );
}

function SkillList() {
  const style = { backgroundColor: "red" };
  return (
    <div className="skill-list">
      <span className="skill" style={style}>
        HTML+CSS 💪
      </span>
      <span className="skill" style={{ backgroundColor: "blue" }}>
        JavaScript 💪
      </span>
      <span className="skill" style={{ backgroundColor: "yellow" }}>
        Web Design 💪
      </span>
      <span className="skill" style={{ backgroundColor: "green" }}>
        Git and Github 💪
      </span>
      <span className="skill" style={{ backgroundColor: "grey" }}>
        React 💪
      </span>
      <span className="skill" style={{ backgroundColor: "orange" }}>
        C# 💪
      </span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
