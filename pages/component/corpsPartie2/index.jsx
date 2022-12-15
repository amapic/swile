import "bootstrap/dist/css/bootstrap.css";
import styled from "styled-components";

import GrandHeader from "./grand/grandCorpsPartie2.jsx";
// import MediumHeader from "./medium/medium.jsx";

const Grand = styled.div`
  @media (min-width: 974px) {
    display: flex;
    margin: auto;
  }
  @media (max-width: 974px) {
    display: none;
    margin: auto;
  }
`;

const Medium = styled.div`
  @media (min-width: 974px) {
    display: none;
    margin: auto;
  }
  @media (max-width: 974px) {
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
      <Grand>
        <GrandHeader />
      </Grand>
      {/* <Medium> 
        <MediumHeader />
      </Medium>  */}
    </>
  );
}
