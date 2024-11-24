import React, { useState } from "react";
import style from "./Sidebar.module.css";
import {
  Folder as FolderIcon,
  FolderOpen as FolderOpenIcon,
  Send as SendIcon,
  AccountCircle as AccountCircleIcon,
  Logout as LogoutIcon,
  Menu as MenuIcon,
  Close as CloseIcon,
} from "@mui/icons-material";

interface SidebarProps {
  onMenuClick: (view: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onMenuClick }) => {
  const [activeItem, setActiveItem] = useState<string>("");
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false); 

  const handleItemClick = (item: string): void => {
    console.log("Mon item reçu:", item);
    setActiveItem(item);
    onMenuClick(item); 
  };

  const toggleSidebar = (): void => {
    setIsSidebarOpen(!isSidebarOpen); 
  };

  return (
    <>
      {/* Bouton pour les écrans mobiles */}
      <button className={style["toggle-button"]} onClick={toggleSidebar}>
        {isSidebarOpen ? <CloseIcon /> : <MenuIcon />}
      </button>

      {/* Barre latérale */}
      <aside
        className={`${style.sidebar} ${isSidebarOpen ? style.open : style.closed}`}
      >
        {/* Logos */}
        <div>
          <img
            src="logo/Keepzy.png"
            alt="keepzy logo"
            className={style["keepzy-logo"]}
          />
          <img
            src="logo/Opal.png"
            alt="opal logo"
            className={style["opal-logo"]}
          />
          <h2 className={style.h2}>Mon espace pro</h2>
        </div>

        {/* Menu de navigation */}
        <nav className={style.nav}>
          <ul>
            <li
              onClick={() => handleItemClick("mes_dossiers_locataires")}
              className={
                activeItem === "mes_dossiers_locataires" ? style.active : ""
              }
            >
              {activeItem === "mes_dossiers_locataires" ? (
                <FolderOpenIcon className={style.icon} />
              ) : (
                <FolderIcon className={style.icon} />
              )}
              <span>Mes dossiers locataires</span>
            </li>

            <li
              onClick={() => handleItemClick("mes_dossiers_archives")}
              className={
                activeItem === "mes_dossiers_archives" ? style.active : ""
              }
            >
              {activeItem === "mes_dossiers_archives" ? (
                <FolderOpenIcon className={style.icon} />
              ) : (
                <FolderIcon className={style.icon} />
              )}
              <span>Mes dossiers archivés</span>
            </li>

            <li
              onClick={() => handleItemClick("demande_envoyee")}
              className={activeItem === "demande_envoyee" ? style.active : ""}
            >
              <SendIcon className={style.icon} />
              <span>Demande envoyée</span>
            </li>

            <li
              onClick={() => handleItemClick("mon_compte")}
              className={activeItem === "mon_compte" ? style.active : ""}
            >
              <AccountCircleIcon className={style.icon} />
              <span>Mon compte</span>
            </li>

            <li
              onClick={() => handleItemClick("deconnexion")}
              className={activeItem === "deconnexion" ? style.active : ""}
            >
              <LogoutIcon className={style.icon} />
              <span>Se déconnecter</span>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
