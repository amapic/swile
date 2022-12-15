import "bootstrap/dist/css/bootstrap.css";
// import BarreBasFooter from "./../BarreBasfooter/grand";
import styled from "styled-components";

const FontQuestions = styled.span`
  color: #fff;
  font-weight: 300;
  font-size: 14px;
  opacity: 1;
  font-family: "Graphik", Helvetica, Arial;
  font-feature-settings: "liga" 1;
`;


export default function DesQuestions() {
  return (
    <>
      <Cartouche txt="Des questions ?" />
    </>
  );
}

function Cartouche({ txt }) {
  return (
    <div
      className="bt-3 position-fixed"
      style={{
        bottom: "0",
        right: "0",
        paddingBottom: "12px",
        paddingLeft: "20px",
        paddingRight: "20px",
        paddingTop: "12px",
      }}
    >
      <div
        className="d-flex flex-row 
        justify-content-between align-items-center pe-3 ps-3"
        style={{
          height: "50px",
          backgroundColor: "rgb(37, 37, 37)",
          width: "155px",
          borderTopRightRadius: "20px",
          borderTopLeftRadius: "20px",
          borderBottomRightRadius: "20px",
          borderBottomLeftRadius: "20px",
        }}
      >
        <FontQuestions
          style={{
            width: "155px",
          }}
        >
          {txt}
        </FontQuestions>
        <img
        src="img/help.svg"
        style={{ height: "26px", width: "26px" }}
        />
     {/* <img alt="icone question" src="https://weareswile.cdn.prismic.io/weareswile/8d6bcf87-6179-4975-b15f-2f8abdcedb9d_Help.svg" decoding="async" data-nimg="intrinsic" style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: medium none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;"
         srcset="https://weareswile.cdn.prismic.io/weareswile/8d6bcf87-6179-4975-b15f-2f8abdcedb9d_Help.svg 1x, https://weareswile.cdn.prismic.io/weareswile/8d6bcf87-6179-4975-b15f-2f8abdcedb9d_Help.svg 2x"></img>
     
     
    */}
      </div>
    </div>
  );
}
