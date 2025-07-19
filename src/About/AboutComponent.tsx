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
                    <Box sx={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                    <Typography variant="h4" >{t('aboutMe')}</Typography>
                    <div className={classes.line} ></div>
                    </Box>
                </Box>
                <Box sx={{width: 1}}>
                    <Typography variant="subtitle1" sx={{textAlign: 'start'}}>{t('aboutContent')}</Typography>
                    <Box className={classes.experienceContainer}>
                      <Typography variant="h3" sx={{color: 'grey.400'}}> 2.5</Typography>
                        <Box className={classes.experienceBlock}>
                            <div className={classes.seporate}></div>
                            <Typography variant="subtitle1" sx={{color: 'grey.400', textAlign: 'start'}}>{t('experience')}</Typography>
                        </Box>
                    </Box>


                </Box>
            </div>

            <div className={classes.cardsSection}>{cards.map(el => (
                <Card key={el.id} className={classes.card}>
                    <CardContent sx={{display: 'flex', flexDirection: 'column', gap: '5px'}}>
                        <Typography variant="h6" sx={{color: '#FDC435', padding: '5px'}}>
                            {el.title}
                        </Typography>
                        <Typography variant="subtitle2" sx={{'text-align': 'start', }}>
                            {el.description}
                        </Typography>
                        <Typography variant="subtitle2" sx={{'text-align': 'start', }}>
                            {el.additionInfo}
                        </Typography>
                        <Typography variant="subtitle2" sx={{'text-align': 'start', }}>
                            {el.languages}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
            </div>
        </div>

    )
}