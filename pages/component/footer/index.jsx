import "bootstrap/dist/css/bootstrap.css";
import styled from "styled-components";


import GrandFooter from "./grand/index.jsx";
import MediumFooter from "./medium/index.jsx";

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
        <GrandFooter />
      </Grand>
      {/* <Medium>
        <MediumFooter />
      </Medium> */}
    </>
  );
}
