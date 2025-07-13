import * as React from 'react';
import classes from "./MainComponent.module.css";
import i18n from "../i18n";
import {Typography} from "@mui/material";
import Box from "@mui/material/Box";

export default function MainComponent() {
    const t: any = i18n.t;

    return (
        <div className={classes.mainComponent}>
            <Box sx={{
                width: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Typography variant="h6">
                    {t('hi')}
                </Typography>
                <Typography variant="h3">{t('performanceName')}</Typography>
                <Typography>{t('performanceProfession')}</Typography>
            </Box>
            <Box sx={{ width: 1 }}>
                PHOTO
            </Box>

        </div>

    )
}