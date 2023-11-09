import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
  {
    skill: "React",
    level: "advanced",
    color: "blue",
  },
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "yellow",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "green",
  },
  {
    skill: "Git and Github",
    level: "beginner",
    color: "gray",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "orange",
  },
  {
    skill: "C#",
    level: "intermediate",
    color: "red",
  },
];

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
        Front-End (React) and WordPress Developer. When not coding or preparing
        a course, I like to play board games, to cook (and eat), or to just
        enjoy the South African sun at the beach.
      </p>
    </div>
  );
}

function SkillList() {
  const skillSet = skills;
  //   const numSkills = skillSet.length;

  return (
    <ul className="skill-list">
      {skillSet.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </ul>

    // <div className="skill-list">
    //   <Skill skill="React" emoji="💪" color="blue" />
    //   <Skill skill="HTML+CSS" emoji="💪" color="yellow" />
    //   <Skill skill="JavaScript" emoji="💪" color="green" />
    //   <Skill skill="Git and Github" emoji="👍" color="grey" />
    //   <Skill skill="Web Design" emoji="💪" color="orange" />
    //   <Skill skill="C#" emoji="💪" color="red" />
    // </div>
  );
}

function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
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
