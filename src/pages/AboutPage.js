import React from "react";
import styled from "styled-components";

const AboutPage = () => (
  <AboutDiv>
    <h1>About This App</h1>
    <p>This is a simple to-do list application built with React.</p>
  </AboutDiv>
);

const AboutDiv = styled.div`
  margin-left: 50px;
  margin-top: 50px;
`;

export default AboutPage;
