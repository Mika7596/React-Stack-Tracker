import { Link } from "react-router-dom";
function HomePage({ companiesList }) {
  console.log(companiesList);

  return (
    <div>
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      <div style={{width:"500px", margin:"auto", display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }}>
        {companiesList.map((company, index) => {
          return (
            <div key={index} >
              <p style={{ width: "200px", textAlign: "center" }}>
                {company.name}
              </p>
              <Link to={`/company/${company.slug}`}>
                <p style={{ width: "150px" }}>
                  <img src={company.logo} alt="" style={{ maxWidth: "100%" }} />
                </p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;
