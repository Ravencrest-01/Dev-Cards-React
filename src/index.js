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
    <div className="avaImg">
      <img src="Avatar.jpg" alt="Avatar"></img>
    </div>
  );
}

function Intro() {
  return (<div className="introd"><p>
  I am a CSE student trying to learn React. After this I'll learn Node.js
  and complete my knowledge about MERN stack.
</p></div>);
}

function SkillList() {
  return (
    <div className="skillContainer">
      <Skill name="C++" emoji='👌' color='red'/>
      <Skill name="Python" emoji='😊' color='orange'/>
      <Skill name="Github" emoji='😘' color='pink'/>
      <Skill name="Django" emoji='😁' color='cyan'/>
      <Skill name="MySQL" emoji='🙌' color='beige'/>
      <Skill name="Java" emoji='🤣' color='blue'/>
      <Skill name="JavaScript" emoji='💕' color='green'/>
      <Skill name="React.js" emoji='❤️' color='yellow'/>
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skills" style={{backgroundColor: props.color }}>
      {props.name}-{props.emoji}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
