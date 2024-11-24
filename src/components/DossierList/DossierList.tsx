import React from "react";
import {
  Button,
  Card,
  CardContent,
  CardActions,
  Typography,
} from "@mui/material";
import {
  Visibility as VisibilityIcon,
  Archive as ArchiveIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  Person as PersonIcon,
  Work as WorkIcon,
  Event as EventIcon,
  CheckCircle as CheckCircleIcon,
  Error as ErrorIcon,
} from "@mui/icons-material";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import style from "./DossierList.module.css";

interface Dossier {
  reference: string;
  demandeDate: string;
  locataire: {
    name: string;
    email: string;
    phone: string;
    status: string;
    profession: string;
    isFiable?: boolean;
  };
  garant?: {
    email: string;
    phone: string;
    profession: string;
  };
  statut: "Complet" | "Incomplet";
}

const DossiersList: React.FC = () => {
  const dossiers: Dossier[] = [
    {
      reference: "HZP58590",
      demandeDate: "10/04/2024",
      locataire: {
        name: "Marine Nirot",
        email: "marine.nirot@gmail.com",
        phone: "+33 6 89 70 40 33",
        status: "Étudiant",
        profession: "Garant physique",
      },
      garant: {
        email: "fabienne.nirot@orange.fr",
        phone: "+33 6 96 04 43 22",
        profession: "CDI",
      },
      statut: "Complet",
    },
    {
      reference: "HZP58591",
      demandeDate: "10/04/2024",
      locataire: {
        name: "Léo Aubert",
        email: "laubert@gmail.com",
        phone: "+33 6 99 74 50 35",
        status: "CDI",
        profession: "Garantie Visale",
        isFiable: true,
      },
      statut: "Incomplet",
    },
    {
      reference: "HZP58592",
      demandeDate: "10/04/2024",
      locataire: {
        name: "Nelly Delige",
        email: "nelly.delige@gmail.com",
        phone: "+33 6 85 43 12 21",
        status: "CDI",
        profession: "Garantie Visale",
      },
      statut: "Incomplet",
    },
  ];

  return (
    <div className={style["dossiers-list"]}>
      {dossiers.map((dossier, index) => (
        <Card key={index} className={style["dossier-card"]}>
          {/* HEADER */}
          <div className={style["header"]}>
          <div className={style["locataire-name-container"]}>
             <Typography variant="h6" className={style["locataire-name"]}>
              {dossier.locataire.name}
             </Typography>
          <div className={`${style["badge"]} ${dossier.locataire.isFiable ? "" : style["hidden"]}`} >
            <span className={style["badge-icon"]}>V</span>
            <span className={style["badge-text"]}>100% Fiable</span>
         </div>
         </div>
           <Typography variant="subtitle2" className={style.reference}>
             <em>Référence  : {dossier.reference}</em>
            </Typography>
            <Typography variant="subtitle2" className={style["demande-date"]}>
              <EventIcon className={style["icon-color"]} />
              Date de la demande : {dossier.demandeDate}
            </Typography>
          </div>

          {/* CONTENT */}
          <CardContent>
            <div className={style["info-section"]}>
              {/* Locataire Info */}
              <div>
                <Typography variant="subtitle1" className={style["section-title"]}>
                  <b>À propos du locataire</b>
                </Typography>
                <div className={style["icon-text"]}>
                  <EmailIcon className={style["icon-color"]} />
                  <Typography>{dossier.locataire.email}</Typography>
                </div>
                <div className={style["icon-text"]}>
                  <PhoneIcon className={style["icon-color"]} />
                  <Typography>{dossier.locataire.phone}</Typography>
                </div>
                <div className={style["icon-text"]}>
                  <PersonIcon className={style["icon-color"]} />
                  <Typography>{dossier.locataire.profession}</Typography>
                </div>
                <div className={style["icon-text"]}>
                  <WorkIcon className={style["icon-color"]} />
                  <Typography>{dossier.locataire.status}</Typography>
                </div>
              </div>

              {/* Garant Info */}
              {dossier.garant && (
                <div className={style["garant-section"]}>
                  <Typography variant="subtitle1" className={style["section-title"]}>
                    <em><b>À propos du garant</b></em>
                  </Typography>
                  <div className={style["icon-text"]}>
                    <EmailIcon className={style["icon-color"]} />
                    <Typography>{dossier.garant.email}</Typography>
                  </div>
                  <div className={style["icon-text"]}>
                    <PhoneIcon className={style["icon-color"]} />
                    <Typography>{dossier.garant.phone}</Typography>
                  </div>
                  <div className={style["icon-text"]}>
                    <WorkIcon className={style["icon-color"]} />
                    <Typography>{dossier.garant.profession}</Typography>
                  </div>
                </div>
              )}
            </div>
            <Typography className={style["statut-label"]}>
              <b>Statut :</b>&nbsp;
              {dossier.statut === "Complet" ? (
                <span className={style["statut-complet"]}>
                  <CheckCircleIcon fontSize="small" /> Complet
                </span>
              ) : (
                <span className={style["statut-incomplet"]}>
                  <ErrorIcon fontSize="small" /> Incomplet
                </span>
              )}
            </Typography>
          </CardContent>

          {/* ACTIONS */}
          <CardActions
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "flex-start",
              gap: 1,
            }}
          >
            <Button
              variant="contained"
              sx={{ backgroundColor: "#1F4B92", textTransform: "none" }}
            >
              Vérifier le dossier
            </Button>
            <Button
              variant="outlined"
              startIcon={<FileDownloadOutlinedIcon />}
              sx={{ textTransform: "none" }}
            >
              Télécharger
            </Button>
            <Button
              variant="outlined"
              startIcon={<VisibilityIcon />}
              sx={{ textTransform: "none" }}
            >
              Voir le dossier
            </Button>
            <Button
              variant="outlined"
              startIcon={<ArchiveIcon />}
              sx={{ textTransform: "none" }}
            >
              Archiver
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

export default DossiersList;
