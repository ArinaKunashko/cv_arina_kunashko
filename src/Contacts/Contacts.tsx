import * as React from 'react';
import classes from './Contacts.module.css'
import Box from "@mui/material/Box";
import i18n from "../i18n";
import {Typography} from "@mui/material";

export default function Contacts() {
    const t: any = i18n.t;

    return (
        <div className={classes.container}>
            <Box sx={{display: 'flex', flexDirection: 'column', flex: 1, }}>
                <Typography sx={{color: 'white', textAlign: 'left'}} variant="h6">
                    {t('slogan')}
                </Typography>

            </Box>

            <Box sx={{display: 'flex', flexDirection: 'row', flex: 1, justifyContent: 'space-around'}}>
                <Box>
                    <Typography variant="h6" sx={{color: 'white'}}>
                        {t('navigate')}
                    </Typography>
                </Box>

                <Box>
                    <Typography variant="h6" sx={{color: 'white'}}>
                        {t('contact')}
                    </Typography>
                </Box>
            </Box>

        </div>
    )
}