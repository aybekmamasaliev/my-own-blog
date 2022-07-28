import React from "react";
import { bigPosts } from "./constants";

const TaskInner = () => {
  return (bigPosts.map((post) => (
    <div className="w3-card-4 w3-margin w3-white" key={post.count}>
    <img src={post.url} alt={post.text_picture} style={{ width: "100%" }} />
    <div className="w3-container">
      <h3>
        <b>{post.heading}</b>
      </h3>
      <h5>
        {post.desc} <span className="w3-opacity">{post.date}</span>
      </h5>
    </div>
    <div className="w3-container">
      <p>{post.info}</p>
      <div className="w3-row">
        <div className="w3-col m8 s12">
          <p>
            <button className="w3-button w3-padding-large w3-white w3-border">
              <b>{post.read}</b>
            </button>
          </p>
        </div>
        <div className="w3-col m4 w3-hide-small">
          <p>
            <span className="w3-padding-large w3-right">
              <b>{post.comment}</b><span className="w3-tag">0</span>
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
  )));
};
export default TaskInner;
