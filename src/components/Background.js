import React from "react";
import { styled } from "styled-components";
import image from "../assets/images/coom-gang-son.png";
const Background = () => {
  return (
    <Wrapper>
      <img src={image} alt="" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  z-index: -1;
`;

export default Background;
