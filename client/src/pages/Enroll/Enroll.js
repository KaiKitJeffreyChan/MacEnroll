import { useState } from "react";
import axios from "axios";
import "./Enroll.css";
import AutoForm from "../../components/EnrollContent/AutoForm";
import EditForm from "../../components/EnrollContent/EditForm"
import styled from "styled-components"
// import Bear from "../../images/bear1.png"

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
      othernumbers: info.othernumbers,
    });
    return axios
      .post("http://172.17.137.120:80/courses", {
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
              <AutoForm updateData={updateData} />
            </div>
            <div class="card">
              <EditForm />
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
  /* @media screen and (max-height: 768px) {
    grid-template-columns: 1fr;
  } */
  `


export default Enroll;
