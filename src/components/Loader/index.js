import React from "react";

import { Spinner } from "reactstrap";

import "./styles.css";

const Loader = () => (
  <div style={styles.body}>
    <div style={styles.content}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <div className="la-ball-scale-multiple la-dark la-3x">
          <div />
          <div />
          <div />
        </div>
      </div>
    </div>
  </div>
);

const styles = {
  body: {
    position: "fixed",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(0,0,0,.6)",
    zIndex: 3,
    display: "flex",
    justifyContent: "center",
    paddingTop: "30vh"
  },
  content: {
    backgroundColor: "#fff",
    width: 100,
    height: 100,
    borderRadius: 12
  }
};

export default Loader;
