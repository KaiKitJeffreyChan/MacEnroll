import React from "react";
import styled from "styled-components";
import "./instructions.css";
import FadeInSection from "../Fade/FadeInSection";

const Instructions = ({
  heading,
  paragraphs,
  buttonLabel,
  reverse,
  image,
  changeBack,
  name,
}) => {
  return (
    <Section changeBack={changeBack} id={name}>
      <FadeInSection>
        <Container>
          <ColumnLeft>
            <h1>{heading}</h1>
            {paragraphs.map((paragraph, idx) => {
              return <p key={idx}>{paragraph}</p>;
            })}
            <button className="btn btn-dark btn-big" to="/home">
              {" "}
              {buttonLabel}{" "}
            </button>
          </ColumnLeft>
          <ColumnRight reverse={reverse}>
            <img src={image} alt="home"></img>
          </ColumnRight>
        </Container>
      </FadeInSection>
    </Section>
  );
};



const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 3rem 3rem;
  transition: 350ms;

  background-image: ${({ changeBack }) =>
    changeBack ? "white" : "linear-gradient(to top, #fff 0%, #fcd7ea 80%)"};
`;

const Container = styled.div`
  padding: 3rem calc((100vw-1300px) / 2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 800px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.4;
  padding: 1rem 2rem;
  order: 2;

  h1 {
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
  }

  p {
    margin-bottom: 2rem;
    line-height: 1.8;
  }
`;

const ColumnRight = styled.div`
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? "1" : "2")};
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    order: ${({ reverse }) => (reverse ? "2" : "1")};
  }

  img {

    width: 100%;
    height: 100%;
    object-fit: cover;

    @media screen and (max-width: 768px) {
      width: 90%;
      height: 90%;
    }
  }
`;

export default Instructions;
