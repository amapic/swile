import "bootstrap/dist/css/bootstrap.css";

export default function Footer() {
  return (
    <div className="w-auto px-2 py-4 bg-dark text-white">
      <div style={{ height: "78px" }} className="d-flex flex-row">
        <div style={{ width: "78px" }}>
          <img width={72} height={72} src="img/icon-swile.png" />
        </div>
        <div className="d-flex flex-column w-50 ps-2">
          <div style={{ marginBottom: "10px", fontSize: "18px" }} className="">
            Engagez vos employés. Au quotidien
          </div>
          <div style={{ fontSize: "14px" }}>
            Titres-resto | Titres cadeaux | Mobilité | Engagement
          </div>
        </div>
        <div style={{ width: "78px" }} className="d-flex flex-column w-50">
          <div>
            Les dernières tendances de la vie au travail dans votre boîte mail
          </div>
          <div style={{ height: "0px 40px" }} className="d-flex flex-row">
            <div
              style={{ padding: "0px 20px", fontSize: "13px" }}
              className="bg-secondary rounded align-middle"
            >
              Prénom
            </div>
            <div style={{ padding: "0px 16px 0px 0px" }}></div>
            <div
              style={{ padding: "0px 20px", fontSize: "13px" }}
              className="bg-secondary rounded align-middle"
            >
              Adresse mail
            </div>
            <div style={{ padding: "0px 16px 0px 0px" }}></div>
            <div
              style={{ padding: "0px 20px", fontSize: "13px" }}
              className="bg-secondary rounded align-middle"
            >
              Je m'inscris
            </div>
          </div>
        </div>
      </div>
      <Bordure />
      <Colonne />
    </div>
  );
}

function Bordure() {
  return <div className="w-100 mt-5 pb-5 border border-1"></div>;
}

function Colonne() {
  return (
    <div className="w-100 d-flex flex-row">
      <div className="w-25">
        <span>A propos</span>
        <br />
        AA
        <br />
        BB
        <br />
      </div>

      <div className="w-25 ps-4">
        <span>Mon compte</span>
        <br />
        AA
        <br />
        BB
        <br />
      </div>

      <div className="w-25 ps-4">
        <span>Ressources</span>
        AA
        <br />
        BB
        <br />
      </div>

      <div className="w-25 ps-3">
        <span>Commerçants</span>
        AA
        <br />
        BB
        <br />
      </div>
    </div>
  );
}
