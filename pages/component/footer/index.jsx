import "bootstrap/dist/css/bootstrap.css";
import styled from "styled-components";

import GrandFooter from "./grand/index.jsx";
const Grand = styled.div`
  @media (min-width: 768px) {
    display: flex;
    margin: auto;
  }
  @media (max-width: 768px) {
    display: none;
    margin: auto;
  }
`;

const Petit = styled.div`
  @media (min-width: 768px) {
    display: none;
    margin: auto;
  }
  @media (max-width: 768px) {
    display: flex;
    margin: auto;
  }
  @media (max-width: 525px) {
    display: none;
    margin: auto;
  }
`;

const TresPetit = styled.div`
  @media (max-width: 525px) {
    display: flex;
    margin: auto;
  }
  @media (min-width: 525px) {
    display: none;
    margin: auto;
  }
`;

export default function Footer() {
  return (
    <>
      {/* <Grand > */}
      <GrandFooter />
      {/* </Grand> */}
    </>
  );
}
