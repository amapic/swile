import "bootstrap/dist/css/bootstrap.css";
// import BarreBasFooter from "./../BarreBasfooter/grand";
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
        className="m-auto d-flex flex-row align-items-center justify-content-between"
        style={{ maxWidth: "1228px", backgroundColor: "#000" }}
      >
        <div className="d-flex flex-row align-items-center justify-content-between">
          <div>
            <img
              style={{ height: "45px", width: "84px" }}
              src="img/swile.png"
              className="mx-4"
            />
          </div>
          <div className="m-auto d-flex flex-row">
            <TitreMenu>Swile Card</TitreMenu>
            <TitreMenu>Swile Card</TitreMenu>
            <TitreMenu>Swile App</TitreMenu>
            <TitreMenu>Solutions</TitreMenu>
            <TitreMenu>Ressources</TitreMenu>
          </div>
        </div>
        <div className="d-flex flex-row align-items-center justify-content-between">
          <CartoucheBlanc className="text-center" txt="Activer mon compte" />
          <div className="px-2"></div>
          <CartoucheGris className="text-center" txt="Me connecter" />
        </div>
      </div>
    </div>
  );
}

function CartoucheGris({ txt }) {
  return (
    <div className="position-relative bt-3">
      <div
        className="d-flex flex-row
      justify-content-between align-items-center ps-3 pe-5 w-auto"
        style={{
          height: "40px",
          backgroundColor: "#fff",
          opacity: "0.3",
          borderTopRightRadius: "20px",
          borderTopLeftRadius: "20px",
          borderBottomRightRadius: "20px",
          borderBottomLeftRadius: "20px",
        }}
      >
        <MeConnecter
          style={
            {
              // width: "150px",
            }
          }
        >
          {txt}
        </MeConnecter>
      </div>
    </div>
  );
}

function CartoucheBlanc({ txt }) {
  return (
    <div className="position-relative bt-3">
      <div
        className="d-flex flex-row 
      justify-content-between align-items-center pe-3 ps-3"
        style={{
          height: "40px",
          backgroundColor: "#fff",
          width: "130px",
          borderTopRightRadius: "20px",
          borderTopLeftRadius: "20px",
          borderBottomRightRadius: "20px",
          borderBottomLeftRadius: "20px",
        }}
      >
        {/* <span
          style={{
            width: "170px",
            width: "fit-content",
          }}
          className="m-auto texte-swile-cartouche-blanc text-center"
        >
          {txt}
        </span> */}
        <ActiverMonCompte
          style={{
            width: "150px",
          }}
        >
          {txt}
        </ActiverMonCompte>
      </div>
    </div>
  );
}