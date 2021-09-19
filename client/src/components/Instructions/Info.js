import ImageOne from "../../images/wood.jpg";
import ImageTwo from "../../images/school.jpg";
import ImageThree from "../../images/posing.jpg";
import { Link } from "react-router-dom";

export const Info = {
  heading: "What Is MacEnroll?",
  paragraphs: [
    "MacEnroll is an application that helps you get into your desired courses with ease. Have a very inconvenient course enrollment time? Want courses that have reserved seats with an unknown time of general enrollment? Once correctly signed up with MacEnroll and have added the desired classes on Mosaic, MacEnroll will automatically try to enroll into your course(s) every 5 minutes. Your course enrollment process can be scheduled if you know the time of your appointment.",
    <>
      Please note that your username and password for Mosaic will be needed. I
      suggest you{" "}
      <a
        className="link"
        href="https://uts.mcmaster.ca/services/accounts-and-passwords/password-management/"
        target="_blank"
        rel="noreferrer"
      >
        change
      </a>{" "}
      your password after you course has been selected.
    </>,
  ],
  buttonLabel: "VIEW DISCLAIMER",
  image: ImageOne,
  reverse: false,
  delay: 100,
  changeBack: false,
  name: "section1",
};

export const Info2 = {
  heading: "Instructions",
  paragraphs: [
    <ol>
      <li>
        Go to{" "}
        <a
          className="link"
          href="https://epprd.mcmaster.ca/psp/prepprd/?cmd=login"
          target="_blank"
          rel="noreferrer"
        >
          Mosaic
        </a>{" "}
        and login.
      </li>
      <li>Navigate to Student Centre tab.</li>
      <li>Press Enroll at the top left of your screen, under Academics tab.</li>
      <li>Select desired semester</li>
      <li>
        Register your desired courses in your shopping cart by entering the
        correct class number(s)
      </li>
      <li>Once all your courses have been registered, DOUBLE CHECK!</li>
      <li>
        Now on MacEnroll, fill out the forum in the{" "}
        <Link to="/enroll" className="link">
          Enroll{" "}
        </Link>
        tab. Thats it!
      </li>
    </ol>,
  ],
  buttonLabel: "Watch Tutorial",
  image: ImageThree,
  reverse: true,
  delay: 300,
  changeBack: true,
  name: "section2",
};

export const Info3 = {
  heading: "Bananan anananana nanananananananan",
  paragraphs: [
    "Lorem ipsum dolor sit amet, consectetur adip ipsum dolor sit amet, consectetur adipipsum dolor sit amet, consectetur adipipsum dolor sit amet, consectetur adipipsum dolor sit amet, consectetur adip",
    "Lorem ipsum dolor sit amet, consectetur adip ipsum dolor sit amet, consectetur adipipsum dolor sit amet",
  ],
  buttonLabel: "view Homes",
  image: ImageThree,
  reverse: false,
  delay: 100,
};
