import { useParams, Link, useSearchParams } from "react-router-dom";
function TechnologyPage({techList}) {
  const param = useParams();
  const currentTech = techList.find(tech => tech.slug == param.slug);
  const [searchParams, setSearchParams] = useSearchParams();
  const company = searchParams.get("company");
  console.log(company);
  
  
  
  return (
    <div>
      <h1 style={{textAlign: "center"}}>Technology Details</h1>
      <div style={{
          width: "600px",
          margin: "auto",
          display: "flex",
          justifyContent: "space-between",
        }}>
          <div style={{ width: "300px" }}>
          <img
            src={currentTech.image}
            alt=""
            style={{ maxWidth: "100%", maxHeigh: "250px" }}
          />
        </div>
        <div style={{ width: "250px" }}>
          <h3>{currentTech.name}</h3>
          <p>ABOUT</p>
          <p>{currentTech.description}</p>
        </div>
      </div>
      <button><Link to={`/company/${company}`}>Back</Link></button>
    </div>
  );
}

export default TechnologyPage;
