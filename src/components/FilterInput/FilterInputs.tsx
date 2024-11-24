import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import style from "./FilterInputs.module.css";
import {
    SelectSituation,
    SelectGarant,
    SelectDuration,
    DateInputWithIcon,
    SelectStatutDossier,
    SelectTypeDossier,
    SortButton,
} from "./FormControl";

const FilterInputs: React.FC = () => {
    const [isAscending, setIsAscending] = useState<boolean>(true);

    const toggleSortOrder = () => {
        setIsAscending(!isAscending);
    };

    return (
        <>
            <div className={style["filter-input-container"]}>
                <TextField
                    id="filter-name"
                    label="Nom / Prénom"
                    variant="outlined"
                    size="small"
                    placeholder="Filtrer sur le nom/prénom"
                    className={style["text-field"]}
                />
                <TextField
                    id="filter-reference"
                    label="Référence de la demande"
                    variant="outlined"
                    size="small"
                    placeholder="Filtrer sur la référence de la demande"
                    className={style["text-field"]}
                />
            </div>

            <div className={style["select-container"]}>
                <SelectSituation />
                <SelectGarant />
                <Button
                    variant="contained"
                    sx={{
                        height: "40px",
                        width: "100%",
                        borderRadius: "10px",
                        backgroundColor: "#1F4B92",
                    }}
                >
                    FILTRER
                </Button>
            </div>

            <div className={style["select-duration"]}>
                <SelectDuration />
                <DateInputWithIcon />
                <Button
                    variant="contained"
                    sx={{
                        height: "40px",
                        width: "100%",
                        borderRadius: "10px",
                        textTransform: "none",
                        backgroundColor: "#1F4B92",
                    }}
                >
                    Réinitialiser les filtres
                </Button>
            </div>

            <div className={style["select-status-type"]}>
                <SelectStatutDossier />
                <SelectTypeDossier />
                <SortButton isAscending={isAscending} onToggleSort={toggleSortOrder} />
            </div>
        </>
    );
};

export default FilterInputs;
