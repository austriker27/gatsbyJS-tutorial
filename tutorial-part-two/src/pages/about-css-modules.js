import React from "react";
import styles from "./about-css-modules.module.css";
console.log(styles);

import Container from "../components/container";

const User = props => 
  <div className={styles.user}>
    <img src={props.avatar} className={styles.avatar} alt=""
/>
    <div className={styles.description}>
      <h2 className={styles.username}>
        {props.username}
      </h2>
      <p className={styles.excerpt}>
        {props.excerpt}
      </p>
    </div>
  </div>

export default () => (
  <Container>
    <h1>About CSS Modules</h1>
    <p>CSS modules are cool</p>
    <User
      username="Jane Doe"
      avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
      excerpt="Hi there, Im jane"
    />

    <User
    username="Bob Smith"
    avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
    excerpt="Hi there, Im bob"
  />

  </Container>
)