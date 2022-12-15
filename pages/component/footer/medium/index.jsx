import "bootstrap/dist/css/bootstrap.css";
// import BarreBasFooter from "./basfooter";
// import "./../../../styles/param.css";
export default function Footer() {
  return (
    <div className="w-100">
      <div
        className="m-auto px-3 py-4  text-white text-swile"
        style={{ maxWidth: "1228px", backgroundColor: "#000" }}
      >
        <div style={{ height: "48px" }} className="d-flex flex-row">
          <div style={{ width: "64px" }}>
            <img width={48} height={48} src="img/icon-swile.png" />
          </div>
          <div className="d-flex flex-column w-50 ps-2">
            <div
              style={{ marginBottom: "10px", fontSize: "18px" ,fontWeight:"500"}}
              className=""
            >
              Engagez vos employés.< br/>
               Au quotidien
            </div>
          </div>
        </div>
        <div>
          <span>
            Les dernières tendances de la vie au travail dans votre boîte mail.
          </span>
        </div>
        <div className="d-flex mt-2">
          <div style={{ width: "170px" }} className="pe-3">
            <CartoucheGris txt="Prénom" />
          </div>
          <div style={{ width: "170px" }} className="w-100">
            <CartoucheGris txt="Adresse email" />
            <CartoucheBlanc txt="Je m''inscris" />
          </div>
        </div>
        <BordureMedium />
        <Colonne />
        <BarreBasFooter />
      </div>
      
    </div>
  );
}

function CartoucheGris({ txt }) {
  return (
    <div className="position-relative bt-3 w-100">
      <div
        className="d-flex flex-row
      justify-content-between align-items-center ps-3 pe-5"
        style={{
          height: "40px",
          backgroundColor: "#292929",
          borderTopRightRadius: "20px",
          borderTopLeftRadius: "20px",
          borderBottomRightRadius: "20px",
          borderBottomLeftRadius: "20px",
        }}
      >
        <span
          style={{
            width: "165px",
          }}
          className="texte-swile-cartouche-gris"
        >
          {txt}
        </span>
      </div>
    </div>
  );
}

function CartoucheBlanc({ txt }) {
  return (
    <div className="position-relative bt-3">
      <div
        className="d-flex flex-row 
      justify-content-between align-items-center pe-3 ps-3 position-absolute"
        style={{
          height: "40px",
          backgroundColor: "#fff",
          width: "130px",
          borderTopRightRadius: "20px",
          borderTopLeftRadius: "20px",
          borderBottomRightRadius: "20px",
          borderBottomLeftRadius: "20px",
          top: "-40px",
          right: "0",
        }}
      >
        <span
          style={{
            width: "200px",
            width: "fit-content",
          }}
          className="m-auto texte-swile-cartouche-blanc text-center"
        >
          {txt}
        </span>
      </div>
    </div>
  );
}

function BordureMedium() {
  return (
    <div
      style={{
        marginTop: "24px",
        marginBottom: "24px",
        borderColor: "rgba(255,255,255,.27)",
        borderWidth: "0px 0px 1px 0px",
      }}
      className="w-100 border"
    >
    </div>
  );
}

function Colonne() {
  return (
    <div
      className="w-100 d-flex flex-row texte-swile"
      style={{ marginBottom: "80px", fontSize: "14px" }}
    >
      <div className="w-50">
        <div style={{ fontSize: "19px", fontWeight: "600" }} className="">
          A propos
          <img className="w-100 img-responsive" 
          style={{ height:"3px" }}
          src="img/b.png" />
        </div>
        <div
          style={{
            fontSize: "19px",

            fontWeight: "600",
            lineHeight: "22px",
          }}
          className="position-relative"
        >
          Ressources
          <img
            className="pt-3 pb-4 position-absolute"
            src="img/icon-plus.png"
            style={{ fontSize: "20px", right: "10px", top: "-20px" }}
          />
          <img
            className="w-100 img-responsive"
            src="img/b.png"
            style={{ height:"3px" }}
          />
        </div>
        
      </div>

      <div className="w-50 ps-4  d-flex flex-column">
        <div style={{ fontSize: "19px", fontWeight: "600" }} className="">
          Mon compte
          <img className="w-100 img-responsive" src="img/b.png"
          style={{ height:"3px" }}
          />
        </div>
        <div
          style={{ fontSize: "19px", fontWeight: "600" }}
          // className=""
        >
          Commerçants
          <img className="w-100 img-responsive" src="img/b.png" 
          style={{ height:"3px" }}
          />
        </div>

      
      </div>
    </div>
  );
}

function CartoucheBasFooter() {
  return (
    <div
      className="m-auto d-flex flex-row rounded border border-1 ps-3 pe-1
      justify-content-between align-items-center"
      style={{
        height: "40px",
        borderColor: "#3d3d3d",
        with: "200px",
      }}
    >
      <span
        style={{
          fontSize: "17px",
          width: "165px",
          color: "#fff",
        }}
        className=""
      >
        Français
      </span>

      <img
        src="img/fleche_bas_2.svg"
        style={{ height: "18px", width: "18px" }}
        className="me-3"
      />
    </div>
  );
}
function BarreBasFooter() {
  return (
    <>
      <div
        className="w-100 display-flex flex-column justify-content-center"
        id="bas_footer"
      >
        <div style={{ width: "72px" }} className="m-auto py-3">
          <img
            style={{ height: "40px", width: "72px" }}
            src="img/swile.png"
            className="m-auto"
          />
        </div>
        <div style={{ width: "320px" }} className="m-auto py-3">
          <CartoucheBasFooter />
        </div>
        <div
          style={{ width: "200px" }}
          className="d-flex d-row justify-content-around position-relative m-auto"
        >
          <div style={{ height: "18px", width: "18px" }} className="me-1 ms-1">
            <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.67 18c.734 0 1.33-.577 1.33-1.29V1.29C18 .576 17.404 0 16.67 0H1.33C.596 0 0 .577 0 1.29v15.42C0 17.424.596 18 1.33 18zM4.097 5.83h-.018c-.912 0-1.502-.624-1.502-1.404 0-.798.608-1.404 1.538-1.404s1.502.606 1.52 1.404c0 .78-.59 1.404-1.538 1.404zm5.582 9.238H6.961v-.18c.003-.552.01-2.289.014-4.004v-.54l.001-.267v-1.49A62.106 62.106 0 006.96 6.94H9.68l-.001 1.152.041-.063c.37-.549 1.02-1.28 2.41-1.28 1.788 0 3.13 1.162 3.13 3.658v4.66H12.54V10.72c0-1.093-.393-1.838-1.377-1.838-.751 0-1.199.502-1.395.988-.072.173-.09.416-.09.659v4.539zm-4.223 0H2.738V6.94h2.718v8.128z"></path>
            </svg>
          </div>
          <div style={{ height: "18px", width: "18px" }} className="me-1 ms-1">
            <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 9.055C18 4.055 13.97 0 9 0S0 4.054 0 9.055c0 4.52 3.291 8.266 7.594 8.945v-6.328H5.309V9.055h2.285V7.06c0-2.27 1.343-3.523 3.4-3.523.984 0 2.014.177 2.014.177v2.228h-1.135c-1.118 0-1.467.698-1.467 1.414v1.699h2.496l-.399 2.617h-2.097V18C14.71 17.32 18 13.575 18 9.055"></path>
            </svg>
          </div>
          <div style={{ height: "18px", width: "18px" }} className="me-2 ms-2">
            <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 9c0 4.973-4.027 9-9 9s-9-4.027-9-9 4.027-9 9-9 9 4.027 9 9zM7.353 13.748c3.992 0 6.174-3.308 6.174-6.174 0-.095 0-.19-.004-.28a4.446 4.446 0 001.084-1.124 4.404 4.404 0 01-1.246.341c.45-.27.791-.692.954-1.201a4.394 4.394 0 01-1.377.527 2.17 2.17 0 00-3.694 1.98 6.156 6.156 0 01-4.474-2.269c-.184.32-.292.694-.292 1.09 0 .751.382 1.417.967 1.804a2.132 2.132 0 01-.981-.27v.027c0 1.053.747 1.926 1.741 2.129a2.163 2.163 0 01-.98.036A2.167 2.167 0 007.25 11.87a4.362 4.362 0 01-3.213.896c.949.62 2.092.98 3.316.98"></path>
            </svg>
          </div>
          <div style={{ height: "18px", width: "18px" }} className="me-2 ms-2">
            <svg viewBox="0 0 18 15" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.175 0h.095l.241.002c1.42.01 5.376.068 6.522.378.774.21 1.384.827 1.59 1.61.338 1.274.373 3.788.377 4.295v.18c-.004.506-.039 3.02-.376 4.294a2.268 2.268 0 01-1.591 1.61c-1.22.33-5.625.374-6.763.38h-.54c-.587-.003-2.04-.016-3.478-.073l-.506-.022c-1.171-.056-2.262-.144-2.78-.285a2.268 2.268 0 01-1.59-1.61C.038 9.485.003 6.971 0 6.465v-.18c.003-.507.038-3.02.376-4.295.207-.783.816-1.4 1.59-1.61C3.113.07 7.07.012 8.489.002L8.73 0h.094zM7.2 3.642v5.465l4.676-2.732L7.2 3.642z"></path>
            </svg>
          </div>
          <div style={{ height: "18px", width: "18px" }} className="me-2 ms-2">
            <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.527.003h.238l.62.002c.74.003 1.164.009 1.543.02l.187.007.595.025c.957.044 1.611.196 2.183.418.6.226 1.145.58 1.594 1.038.458.45.812.993 1.038 1.594.222.572.374 1.226.418 2.183.01.23.02.423.026.617l.007.195c.013.43.018.926.02 1.878l.001.473V10.02c-.004 1.538-.017 1.883-.054 2.69-.044.957-.196 1.611-.418 2.183a4.6 4.6 0 01-2.631 2.632c-.573.222-1.227.374-2.184.418-.806.037-1.152.05-2.69.053l-.737.001H7.98c-1.538-.004-1.883-.017-2.69-.054-.957-.044-1.611-.196-2.183-.418a4.41 4.41 0 01-1.594-1.038 4.41 4.41 0 01-1.038-1.594c-.222-.572-.374-1.226-.418-2.184l-.025-.594-.007-.187c-.011-.38-.017-.802-.02-1.543l-.002-.62V8.473v-.238l.002-.62A43.51 43.51 0 01.057 5.29c.044-.957.196-1.611.418-2.183a4.41 4.41 0 011.038-1.594A4.41 4.41 0 013.107.475C3.679.253 4.333.101 5.29.057A43.69 43.69 0 017.616.005l.62-.002h.237zm.01 1.621H8.463c-1.915.002-2.226.013-3.099.052-.877.04-1.353.187-1.67.31-.391.144-.745.374-1.035.673-.299.29-.529.644-.673 1.035-.123.317-.27.793-.31 1.67-.04.873-.05 1.184-.052 3.099v1.074c.002 1.915.012 2.226.052 3.099.04.877.187 1.353.31 1.67.144.391.374.745.673 1.035.29.299.644.529 1.035.673.317.123.793.27 1.67.31.797.036 1.125.048 2.634.051l.465.001H10.002c1.509-.004 1.837-.016 2.634-.052.877-.04 1.353-.187 1.67-.31a2.98 2.98 0 001.708-1.708c.123-.317.27-.793.31-1.67.036-.797.048-1.125.051-2.634l.001-.724V9 7.998c-.004-1.508-.016-1.837-.052-2.634-.04-.877-.187-1.353-.31-1.67a2.788 2.788 0 00-.673-1.035 2.788 2.788 0 00-1.035-.673c-.317-.123-.793-.27-1.67-.31-.873-.04-1.184-.05-3.099-.052zM9 4.38a4.62 4.62 0 110 9.24 4.62 4.62 0 010-9.24zM9 6a2.999 2.999 0 100 5.998 2.999 2.999 0 000-5.998zm4.803-2.883a1.08 1.08 0 110 2.159 1.08 1.08 0 010-2.16z"></path>
            </svg>
          </div>
          
        </div>

          <div
            style={{ width:"340px" }}
            className="m-auto py-4 d-flex flex-column"
          >
            <span 
            style={{ lineHeight: "24px" }}
            className="m-auto MentionsLegales">Mentions légales | Confidentialité | Cookies | Légal</span>
            <span 
            style={{ lineHeight: "24px" }}
            className="m-auto MentionsLegales">Swile @2022 </span>
          </div> 
        {/* </div> */}
      </div>
    </>
  );
}
