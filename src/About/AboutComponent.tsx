import * as React from 'react';
import i18n from "../i18n";
import {Card, CardContent, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import classes from "./Aboute.module.css";

interface cardType {
    id: number,
    title: string,
    description: string,
    additionInfo: string,
    languages?: string
}
export default function AboutComponent() {
    const t: any = i18n.t;

    const cards:cardType[] = [
        {
            id: 1,
            title: t('education'),
            description: t('univ'),
            additionInfo: t('fac')
        },
        {
            id: 2,
            title: t('skills'),
            description: t('techno'),
            additionInfo: t('libr'),
            languages: t('languages')
        },
        {
            id: 3,
            title: t('certificates'),
            description: t('udemy'),
            additionInfo: t('linkedIn'),
        },
    ];

    return (
        <div className={classes.aboutContent}>
            <div className={classes.aboutSection}>
                <Box className={classes.title}>
                    <Typography>{t('aboutMe')}</Typography>
                </Box>
                <Box sx={{width: 1}}>
                    <Typography>{t('aboutContent')}</Typography>
                    <Typography>2.5 {t('experience')}</Typography>
                </Box>
            </div>
            <div className={classes.cardsSection}>{cards.map(el => (
                <Card key={el.id} className={classes.card}>
                    <CardContent>
                        <Typography>
                            {el.title}
                        </Typography>
                        <Typography>
                            {el.description}
                        </Typography>
                        <Typography>
                            {el.additionInfo}
                        </Typography>
                        <Typography>
                            {el.languages}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
            </div>
        </div>

    )
}