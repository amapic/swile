import "bootstrap/dist/css/bootstrap.css";
import BarreBasFooter from "./../BarreBasfooter/grand";
// import "./../../../styles/param.css";
export default function Footer() {
  return (
    <div className="w-100">
      <div
        className="m-auto px-3 py-4  text-white text-swile"
        style={{ maxWidth: "1228px", backgroundColor: "#000" }}
      >
        <div style={{ height: "78px" }} className="d-flex flex-row">
          <div style={{ width: "78px" }}>
            <img width={72} height={72} src="img/icon-swile.png" />
          </div>
          <div className="d-flex flex-column w-50 ps-2">
            <div
              style={{ marginBottom: "10px", fontSize: "18px" }}
              className=""
            >
              Engagez vos employés. Au quotidien
            </div>
            <div style={{ fontSize: "14px" }}>
              Titres-resto | Titres cadeaux | Mobilité | Engagement
            </div>
          </div>
          <div
            style={{ width: "78px" }}
            className="d-flex flex-column w-50 texte-swile"
          >
            <div className="mb-1">
              Les dernières tendances de la vie au travail dans votre boîte mail
            </div>
            <div style={{ height: "0px 40px" }} className="d-flex flex-row">
              {/* <div
                style={{ padding: "0px 20px", fontSize: "13px" }}
                className="bg-secondary rounded align-middle"
              > */}
              <div style={{ width: "124px" }}>
                <CartoucheGris txt="Prénom" />
              </div>
              <div style={{ padding: "0px 16px 0px 0px" }}></div>
              {/* <div
                style={{ padding: "0px 20px", fontSize: "13px" }}
                className="bg-secondary rounded align-middle"
              > */}
              <div className="" style={{ width: "346px" }}>
                <CartoucheGris txt="Adresse mail" />
              </div>
              {/* </div> */}
              <div style={{ padding: "0px 16px 0px 0px" }}></div>
              {/* <div
                style={{ padding: "0px 20px", fontSize: "13px" }}
                className="bg-secondary rounded align-middle"
              >
                Je m'inscris
              </div> */}
              <CartoucheBlanc txt="Je m''inscris" />
            </div>
          </div>
        </div>
        <Bordure />
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
          backgroundColor: "#414141",
          borderTopRightRadius:"20px",
          borderTopLeftRadius:"20px",
          borderBottomRightRadius:"20px",
          borderBottomLeftRadius:"20px",
          // width: "fit-content",
        }}
      >
        <span
          style={{
            width: "165px",
            // width: "fit-content",
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
      justify-content-between align-items-center pe-3 ps-3"
        style={{
          height: "40px",
          backgroundColor: "#fff",
          width: "130px",
          borderTopRightRadius:"20px",
          borderTopLeftRadius:"20px",
          borderBottomRightRadius:"20px",
          borderBottomLeftRadius:"20px",
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

function Bordure() {
  return <div 
  style={{
    marginTop: "40px",
    marginBottom :"40px",
    borderColor:"rgba(255,255,255,.27)",
    borderWidth:"1px"
  }}
  className="w-100 border"> </div>;
}
function Cartouche({ txt }) {
  return (
    <div className="position-relative">
      <div
        className="me-2 d-flex flex-row rounded border border-1 ps-3 pe-3 mb-3
      position-relative justify-content-between align-items-center"
        style={{
          height: "42px",
          borderColor: "#fff",
          width: "fit-content",
        }}
      >
        <span
          style={{
            width: "165px",
            width: "fit-content",
          }}
          className="texte-swile-cartouche-colonne"
        >
          {txt}
        </span>
      </div>
    </div>
  );
}
function Colonne() {
  return (
    <div
      className="w-100 d-flex flex-row texte-swile"
      style={{ marginBottom: "80px", fontSize: "14px" }}
    >
      <div className="w-25 ">
        <div
          style={{ fontSize: "19px", width: "100px", fontWeight: "600" }}
          className=""
        >
          A propos
          <img className="mt-2 mb-4 w-100 img-responsive" src="img/b.png" />
        </div>
        <span
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
        <br />
      </div>

      <div className="w-25 ps-4 ">
        <div
          style={{ fontSize: "19px", width: "150px", fontWeight: "600" }}
          className=""
        >
          Mon compte
          <img className="mt-2 pb-4 w-100 img-responsive" src="img/b.png" />
        </div>
        <span
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
        </span>
      </div>

      <div className="w-25 ps-4">
        <div
          style={{
            fontSize: "19px",
            width: "100px",
            fontWeight: "600",
            lineHeight: "22px",
          }}
          className=""
        >
          Ressources
          <img className="pt-3 pb-4 w-100 img-responsive" src="img/b.png"
          style={{ fontSize: "10px" }}
          />
        </div>
        <span
          style={{ fontSize: "14px", fontWeight: "300", lineHeight: "22px" }}
          className="mb-2 texte-swile"
        >
          Blog
        </span>
        <br />
        <span
          style={{ fontSize: "14px", fontWeight: "300", lineHeight: "22px" }}
          className="mb-2 texte-swile"
        >
          Boites à outils
        </span>
        <br />
        <span
          style={{ fontSize: "14px", fontWeight: "300", lineHeight: "22px" }}
          className="mb-2 texte-swile"
        >
          Témoignages clients
        </span>
        <br />
        <span
          style={{ fontSize: "14px", fontWeight: "300", lineHeight: "22px" }}
          className="mb-2"
        >
          E-shop
        </span>
        <br />
      </div>

      <div className="w-25 ps-3">
        <div
          style={{ fontSize: "19px", width: "100px", fontWeight: "600" }}
          // className=""
        >
          Commerçants
          <img className="mt-2 mb-4 w-100 img-responsive" src="img/b.png" />
        </div>
        <Cartouche txt="Accepter les titres-restos" />
        <Cartouche txt="Accepter les titres-cadeaux" />
      </div>
    </div>
  );
}
