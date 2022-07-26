import React from "react";
import "../../compononts/Home/style.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkStyle = styled(Link)`
  text-decoration: none;
`;
export default function Home() {
  return (
    <div className="container">
      <div className="box1">
        <div className="subContainer">
          <div className="subtitle">
            The Best <br /> Medical Services
          </div>
          <span>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur,
            rem! Repellat totam minima numquam dolorem porro ex iste, nesciunt
            tempore inventore possimus, hic distinctio modi obcaecati
            praesentium atque dolore optio?
          </span>
        </div>
        <LinkStyle to={"/Login"}>
          <button>Login</button>
        </LinkStyle>
      </div>
    </div>
  );
}
