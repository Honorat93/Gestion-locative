import { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import FilterInputs from "./components/FilterInput/FilterInputs";
import DossiersList from "./components/DossierList/DossierList"
import "./App.css";

function App() {
  const [activeView, setActiveView] = useState<string>("welcome"); 

  const handleSidebarClick = (view: string) => {
    console.log("la vue:", view);
    setActiveView(view); 
  };

  return (
    <div>
      
      <Sidebar onMenuClick={handleSidebarClick} />
      
      <main className="main-content">
        {/* Message de bienvenue */}
        {activeView === "welcome" && (
          <div className="welcome-container">
            <h1>Bienvenue sur votre espace de gestion locative</h1>
            <p>
              Accédez à vos dossiers locataires, consultez vos archives ou envoyez des demandes, tout en un seul endroit 😉
            </p>
            <video autoPlay loop muted >
              <source src="animation.mp4" type="video/mp4" />
              Votre navigateur ne supporte pas la lecture des vidéos.
              </video>
          </div>
        )}

        {/* Vue "Mes Dossiers Locataires" */}
        {activeView === "mes_dossiers_locataires" && (
          <>
            <FilterInputs />
            <DossiersList />
          </>
        )}

        {/* Vue "Dossiers Archivés" */}
        {activeView === "mes_dossiers_archives" && (
          <div>
            <h1>Dossiers Archivés</h1>
          </div>
        )}

        {/* Vue "Demande Envoyée" */}
        {activeView === "demande_envoyee" && (
          <div>
            <h1>Demande Envoyée</h1>
          </div>
        )}

        {/* Vue "Mon Compte" */}
        {activeView === "mon_compte" && (
          <div>
            <h1>Mon Compte</h1>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
