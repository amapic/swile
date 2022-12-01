export default function Footer() {
  return (
    <div className="w-auto px-2 py-4 bg-dark text-white"
        
    >
      <div style={{ height: "78px" }} className="d-flex flex-row">
        {/* <img style={{ width: "78px" }} className=""> */}
          <div
          style={{ width:"78px" }}
          >
          <img
            width={72}
            height={72}
            
            src="img/icon-swile.png"
          />
          </div>
          <div
          className="d-flex flex-column w-50"
          >
          <div
          style={{ marginBottom: "10px",fontSize:"18px" }}
          className=""
          >
              Engagez vos employés. Au quotidien
              </div>
              <div
              style={{ fontSize:"14px" }}
              >
              Titres-resto | Titres cadeaux | Mobilité | Engagement
              </div>
              </div>
        {/* </img> */}
      </div>
    </div>
  );
}
