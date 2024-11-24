import React, { useState } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { TextField, InputAdornment } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import Button from "@mui/material/Button";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

interface SortButtonProps {
    isAscending: boolean;
    onToggleSort: () => void;
}

const SelectSituation: React.FC = () => {
    const [situation, setSituation] = useState<string>("");

    const handleChange = (event: SelectChangeEvent) => {
        setSituation(event.target.value);
    };

    return (
        <FormControl sx={{ minWidth: '40%', backgroundColor: "white", "& .MuiOutlinedInput-root": {
            borderRadius: "10px", 
        },}} size="small">
            <InputLabel id="situation-select-label">Situation</InputLabel>
            <Select
                labelId="situation-select-label"
                id="situation-select"
                value={situation}
                label="Situation"
                onChange={handleChange}
            >
                <MenuItem value="">
                    <em>Aucune</em>
                </MenuItem>
                <MenuItem value="etudiant">Étudiant</MenuItem>
                <MenuItem value="employe">Employé</MenuItem>
                <MenuItem value="retraite">Retraité</MenuItem>
            </Select>
        </FormControl>
    );
};


const SelectGarant: React.FC = () => {
    const [garant, setGarant] = useState<string>("");

    const handleChange = (event: SelectChangeEvent) => {
        setGarant(event.target.value);
    };

    return (
        <FormControl sx={{ minWidth: '40%', backgroundColor: "white",  "& .MuiOutlinedInput-root": {
            borderRadius: "10px", }}} size="small" >
            <InputLabel id="garant-select-label">Garant</InputLabel>
            <Select
                labelId="garant-select-label"
                id="garant-select"
                value={garant}
                label="Garant"
                onChange={handleChange}
            >
                <MenuItem value="">
                    <em>Aucune</em>
                </MenuItem>
                <MenuItem value="societe">Société</MenuItem>
                <MenuItem value="personnePhysique">Personne physique</MenuItem>
            </Select>
        </FormControl>
    );
};

const SelectDuration: React.FC = () => {
    const [duration, setDuration] = useState<string>("");

    const handleChange = (event: SelectChangeEvent) => {
        setDuration(event.target.value);
    };

    return (
        <FormControl sx={{  minWidth: '40%', backgroundColor: "white",  "& .MuiOutlinedInput-root": {
            borderRadius: "10px", }}} size="small" >
            <InputLabel id="duration-select-label">Durée</InputLabel>
            <Select
                labelId="duration-select-label"
                id="duration-select"
                value={duration}
                label="Durée"
                onChange={handleChange}
            >
                <MenuItem value="">
                    <em>Aucune</em>
                </MenuItem>
                <MenuItem value={6}>Six mois</MenuItem>
                <MenuItem value={9}>Neuf mois</MenuItem>
                <MenuItem value={12}>Douze mois</MenuItem>
            </Select>
        </FormControl>
    );
};

const DateInputWithIcon: React.FC = () => {
    return (
        <TextField
            label="Date de début de location"
            variant="outlined"
            size="small"
            sx={{
                minWidth: '40%', backgroundColor: "white",
                "& .MuiOutlinedInput-root": {
                   backgroundColor: "white",
                   borderRadius: "10px"
                },
            }}
            slotProps={{
                input: {
                    endAdornment: (
                        <InputAdornment position="end">
                            <CalendarTodayIcon sx={{ color: "#1E88E5" }} />
                        </InputAdornment>
                    ),
                },
            }}
        />
    );
};

const SelectStatutDossier: React.FC = () => {
    const [statut, setStatut] = useState<string>("");

    const handleChange = (event: SelectChangeEvent) => {
        setStatut(event.target.value);
    };

    return (
        <FormControl sx={{  minWidth: '40%',  backgroundColor: "white",  "& .MuiOutlinedInput-root": {
            borderRadius: "10px", }}} size="small">
            <InputLabel id="statut-dossier-select-label">Statut du dossier</InputLabel>
            <Select
                labelId="statut-dossier-select-label"
                id="statut-dossier-select"
                value={statut}
                label="Statut du dossier"
                onChange={handleChange}
            >
                <MenuItem value="">
                    <em>Aucun</em>
                </MenuItem>
                <MenuItem value="enCours">En cours</MenuItem>
                <MenuItem value="valide">Validé</MenuItem>
                <MenuItem value="rejete">Rejeté</MenuItem>
            </Select>
        </FormControl>
    );
};

const SelectTypeDossier: React.FC = () => {
    const [type, setType] = useState<string>("");

    const handleChange = (event: SelectChangeEvent) => {
        setType(event.target.value);
    };

    return (
        <FormControl sx={{ minWidth: '40%', backgroundColor: "white", "& .MuiOutlinedInput-root": {
            borderRadius: "10px", } }} size="small">
            <InputLabel id="type-dossier-select-label">Type de dossier</InputLabel>
            <Select
                labelId="type-dossier-select-label"
                id="type-dossier-select"
                value={type}
                label="Type de dossier"
                onChange={handleChange}
            >
                <MenuItem value="">
                    <em>Aucun</em>
                </MenuItem>
                <MenuItem value="location">Location</MenuItem>
                <MenuItem value="achat">Achat</MenuItem>
                <MenuItem value="vente">Vente</MenuItem>
            </Select>
        </FormControl>
    );
};

const SortButton: React.FC<SortButtonProps> = ({ isAscending, onToggleSort }) => {
    return (
        <Button
            variant="outlined"
            onClick={onToggleSort}
            sx={{
                height: "40px",
                display: "flex",
                alignItems: "center",
                borderRadius: "10px",
                backgroundColor: "white",
                textTransform: "none",
                width: "100%"
            }}
        >
            Trier par date {isAscending ? "croissante" : "décroissante"}
            {isAscending ? (
                <ArrowUpwardIcon sx={{ marginLeft: 1, fontSize: 20 }} />
            ) : (
                <ArrowDownwardIcon sx={{ marginLeft: 1, fontSize: 20 }} />
            )}
        </Button>
    );
};


export { SelectSituation, SelectGarant, SelectDuration, DateInputWithIcon, SelectStatutDossier, SelectTypeDossier, SortButton };