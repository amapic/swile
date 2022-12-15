import "bootstrap/dist/css/bootstrap.css";
import BarreBasFooter from "./basfooter";
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
              style={{ marginBottom: "10px", fontSize: "18px" }}
              className=""
            >
              Engagez vos employés. Au quotidien
            </div>
          </div>
        </div>
        <div>
          <span>
            Les dernières tendances de la vie au travail dans votre boîte mail.
          </span>
        </div>
        <div className="d-flex mt-2">
          <div style={{ width: "170px" }}
          className="pe-3"
          >
            <CartoucheGris txt="Prénom" />
          </div>
          <div style={{ width: "170px" }}
          className="w-100"
          >
            <CartoucheGris txt="Adresse email" />
          </div>
        </div>
        <BordureMedium />
        <Colonne />
      </div>
      <BarreBasFooter />
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
          backgroundColor: "#414141",
          borderTopRightRadius: "20px",
          borderTopLeftRadius: "20px",
          borderBottomRightRadius: "20px",
          borderBottomLeftRadius: "20px",
          // width: "fit-content",
        }}
      >
        <span
          style={{
            width: "165px",
            // width: "fit-content",
          }}
          className="texte-swile-gris"
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
        borderWidth: "1px",
      }}
      className="w-100 border"
    >
      {" "}
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
        <div
          style={{ fontSize: "19px", fontWeight: "600" }}
          className=""
        >
          A propos
          <img className="mt-2 mb-4 w-100 img-responsive" src="img/b.png" />
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
            style={{ fontSize: "20px",right:"10px",top:"-20px" }}
          />
          <img
            className="pt-3 pb-4 w-100 img-responsive"
            src="img/b.png"
            style={{ fontSize: "10px" }}
          />
        </div>
        {/* <span
          style={{ fontSize: "14px", fontWeight: "300", lineHeight: "22px" }}
          className="mb-2 texte-swile"
        >
          Nous rejoindre
        </span>{" "}
        <br />
        <span
          style={{ fontSize: "14px", fontWeight: "300", lineHeight: "22px" }}
          className="mb-2 texte-swile"
        >
          La RSE chez Swile
        </span>
        <br />
        <span
          style={{ fontSize: "14px", fontWeight: "300", lineHeight: "22px" }}
          className="mb-2 texte-swile"
        >
          Presse
        </span>
        <br /> */}
      </div>

      <div className="w-50 ps-4  d-flex flex-column">
        <div
          style={{ fontSize: "19px", fontWeight: "600" }}
          className=""
        >
          Mon compte
          <img className="mt-2 pb-4 w-100 img-responsive" src="img/b.png" />
        </div>
        <div
          style={{ fontSize: "19px", fontWeight: "600" }}
          // className=""
        >
          Commerçants
          <img className="mt-2 mb-4 w-100 img-responsive" src="img/b.png" />
        </div>
        
        {/* <span
          style={{ fontSize: "14px", fontWeight: "300", lineHeight: "22px" }}
          className="mb-2 texte-swile"
        >
          Activer mon compte
        </span>
        <br />
        <span
          style={{ fontSize: "14px", fontWeight: "300", lineHeight: "22px" }}
          className="mb-2 texte-swile"
        >
          Centre d'aide
        </span>
        <br />
        <span
          style={{ fontSize: "14px", fontWeight: "300", lineHeight: "22px" }}
          className="mb-2 texte-swile"
        >
          Me connecter
        </span>
        <br />
        <span
          style={{ fontSize: "14px", fontWeight: "300", lineHeight: "22px" }}
          className="mb-2 texte-swile"
        >
          Nous contacter
        </span>
        <br />
        <span
          style={{ fontSize: "14px", fontWeight: "300", lineHeight: "22px" }}
          className="mb-2 texte-swile"
        >
          Ressources
        </span> */}
      </div>

    

      
    </div>
  );
}
