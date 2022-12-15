import "bootstrap/dist/css/bootstrap.css";
import styled from "styled-components";

const TitreMenu = styled.span`
  color: #fff;
  font-weight: 300;
  font-size: 13px;
  opacity: 1;
  font-family: "Graphik", Helvetica, Arial;
  font-feature-settings: "liga" 1;
  line-height: 64px;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-right: 8px;
  padding-left: 8px;
`;

const ActiverMonCompte = styled.span`
  color: #000;
  font-weight: 300;
  font-size: 13px;
  opacity: 1;
  font-family: "Graphik", Helvetica, Arial;
  font-feature-settings: "liga" 1;

`;

const MeConnecter = styled.span`
  color: #fff;
  font-weight: 300;
  font-size: 13px;
  opacity: 1;
  font-family: "Graphik", Helvetica, Arial;
  font-feature-settings: "liga" 1;

`;

export default function Header() {
  return (
    <div
      className="w-100 m-auto pt-3 pb-3"
      style={{ maxWidth: "1228px", height: "72px" }}
    >
      <div
        className="m-auto w-100 d-flex flex-row align-items-center justify-content-between"
        style={{ maxWidth: "1228px", backgroundColor: "#000" }}
      >
          <div>
            <img
              style={{ height: "45px", width: "84px" }}
              src="img/swile.png"
              className="mx-4"
            />
          </div>
          <div>
            <img
              style={{ height: "24px", width: "24px" }}
              src="img/swile.png"
              className="mx-4"
            />
          </div>

    </div>
    </div>
  );
}

