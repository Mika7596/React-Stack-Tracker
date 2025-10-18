import { Route, Routes } from "react-router-dom";
import Companies from "./companies.json";
import Technologies from "./technologies.json";
import { useState } from "react";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import CompanyPage from "./pages/CompanyPage";
import TechnologyPage from "./pages/TechnologyPage";

function App() {
  const [companiesList, setConpaniesList] = useState(Companies);
  const [technologiesList, setTechnologiesList] = useState(Technologies);

  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage companiesList={companiesList} />} />
        <Route
          path="/company/:companySlug"
          element={<CompanyPage companiesList={companiesList} />}
        ></Route>
        <Route path="/tech/:slug" element={<TechnologyPage techList={technologiesList}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
