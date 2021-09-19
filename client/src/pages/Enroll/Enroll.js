import { useState } from "react";
import axios from "axios";
import "./Enroll.css";
import AutoForm from "../../components/AutoForm/AutoForm";
import styled from "styled-components"

const Enroll = ({ shift }) => {
  const [data, setData] = useState({
    username: "",
    password: "",
    semester: "",
    phonenumber: "",
    email: "",
    othernumbers: ""
  });

  const updateData = (info) => {
    setData({
      username: info.username,
      password: info.password,
      semester: info.semester,
      phonenumber: info.phonenumber,
      email: info.email,
      othernumbers: info.numbers,
    });
    return axios
      .post("http://192.168.86.73:80/courses", {
        user: data.username,
        pass: data.password,
        target_num: data.phonenumber,
        semester: data.semester,
        othernumbers: data.othernumbers
      })
      .then(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <>
      <div className={shift ? "blur" : null}>
        <Section>
          <Container>
            <div class="card">
              <AutoForm updateData={updateData}></AutoForm>
              <RightContainer></RightContainer>
            </div>
            <div class="card">
            </div>
          </Container>
        </Section>
      </div>


    </>
  );
};

const Section = styled.section`
  width: 100%;
  padding: 1rem 3rem;
  height: calc(100vh - 80px);
  background-color: #fcd7ea;
`;

const Container = styled.div`
  padding: 1rem calc((100vw-1300px) / 2);
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: calc(100vh - 180px);

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  // @media screen and (max-height: 768px) {
  //   grid-template-columns: 1fr;
  // }
  `

const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color:  #AC3B61;
    border-radius: 5px;
    padding: 50px;
    margin: 10px;
    h1 {
      margin-bottom: 1rem;
      font-size: clamp(1.5rem, 6vw, 2rem);
    }
    p {
      margin-bottom: 2rem;
      line-height: 1.8;
    }
`

const RightContainer = styled.div`
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color:  #AC3B61;
    border-radius: 5px;
    float:right;
`


export default Enroll;
