import { useParams, Link } from "react-router-dom";
function CompanyPage({ companiesList }) {
  const companyName = useParams();
  console.log(companyName.companySlug);
  const currentCompany = companiesList.find(
    (c) => c.slug == companyName.companySlug
  );
  console.log(currentCompany);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Company Profile</h1>
      <div
        style={{
          width: "600px",
          margin: "auto",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div style={{ width: "300px" }}>
          <img
            src={currentCompany.logo}
            alt=""
            style={{ maxWidth: "100%", maxHeigh: "250px" }}
          />
        </div>
        <div style={{ width: "250px" }}>
          <h3>{currentCompany.name}</h3>
          <p>ABOUT</p>
          <p>{currentCompany.description}</p>
        </div>
      </div>
      <div
        style={{
          maxWidth: "100%",
          display: "flex",
          flexWrap: "nowrap",
          overflowX: "auto",
          gap: "20px",
        }}
      >
        {currentCompany.techStack.map((tech, index) => {
          return (
            <Link to={`/tech/${tech.slug}?company=${currentCompany.slug}`} key={index}>
              <div>
                <p style={{ width: "150px", height: "150px" }}>
                  <img
                    src={tech.image}
                    alt=""
                    style={{ maxWidth: "100%", maxHeight: "100%" }}
                  />
                </p>
                <p>{tech.name}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default CompanyPage;
