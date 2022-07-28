import React from "react";
import Task4 from "./Task4";
import Task5 from "./Task5";
import Task7 from "./Task7";

const Task3 = () => {
  return (
      <div className="w3-col l4">
        <Task4 
        url="https://www.w3schools.com/w3images/avatar_g.jpg"
        name="My Name"
        selfinfo="Just me, myself and I, exploring the universe of uknownment. I have a
        heart of love and a interest of lorem ipsum and mauris neque quam
        blog. I want to share my world with you."
        />

        <hr />

        <Task5 />

        <hr />

        <Task7 />
        
      </div>
  );
};

export default Task3;
