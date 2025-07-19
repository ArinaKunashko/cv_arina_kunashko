import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import i18n from "../i18n";
import Typography from '@mui/material/Typography';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import Box from "@mui/material/Box";
import classes from "./Resume.module.css"

interface resumeItem {
    companyName: string;
    dateRange: string;
    location: string;
    role: string;
    achievements: string;
    color: "success" | "secondary" | "primary" | "warning" | "inherit" | "error" | "info" | "grey" | undefined
}

export default function Resume() {
    const t: any = i18n.t;


    const resumeInfo: resumeItem[] = [
        {
            companyName: 'LOFTY',
            dateRange: t('dateLofty'),
            location: t('Dublin'),
            role: t('roleLofty'),
            achievements: 'string',
            color: 'success',
        },
        {
            companyName: 'STOCRM',
            dateRange: t('dateStocrm'),
            location: t('Moscow'),
            role: t('roleStocrm'),
            achievements: t('achievementsStocrm'),
            color: 'secondary',
        },
        {
            companyName: 'DENEB',
            dateRange: t('dateDeneb'),
            location: t('Moscow'),
            role: t('roleDeneb'),
            achievements: t('achievementsDeneb'),
            color: 'primary',
        },
        {
            companyName: 'DIGINETICA',
            dateRange: t('dateDigi'),
            location: t('Moscow'),
            role: t('roleDigi'),
            achievements: t('achievementsDigi'),
            color: 'warning',
        }
    ]

    return (
        <div className={classes.container}>
            <Box className={classes.title}>
                <Box sx={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                    <Typography variant="h4" >{t('resume')}</Typography>
                    <div className={classes.line} ></div>
                </Box>
            </Box>
            <Timeline position="alternate" >
                {resumeInfo.map(company => (
                    <TimelineItem key={company.companyName}>
                        <TimelineOppositeContent
                            sx={{mt: '10px'}}
                            align="right"
                            variant="body2"
                            color="text.secondary"
                        >
                            {company.dateRange}
                        </TimelineOppositeContent>
                        <TimelineSeparator >
                            <TimelineDot color={company.color} sx={{margin: '15px', padding: '5px'}}/>
                            <TimelineConnector/>
                        </TimelineSeparator>
                        <TimelineContent>
                            <Typography variant="h6" component="span" color={company.color}>
                                {company.companyName}
                            </Typography>
                            <Typography variant="caption" gutterBottom sx={{display: 'block',}}>
                                {company.location}
                            </Typography>
                            <Typography component="span" fontWeight="bold" sx={{display: 'block', textAlign: 'left'}}>
                                {t('responsibilities')}
                            </Typography>
                            <Typography variant="subtitle2" gutterBottom sx={{display: 'block', textAlign: 'left'}}>
                                {company.role}
                            </Typography>
                            <Typography component="span" fontWeight="bold" sx={{display: 'block', textAlign: 'left'}}>
                                {t('achievements')}:
                            </Typography>
                            <Typography
                                variant="subtitle2"
                                gutterBottom
                                sx={{display: 'block', textAlign: 'left'}}
                            >
                                {company.achievements}
                            </Typography>

                        </TimelineContent>
                    </TimelineItem>
                ))}
            </Timeline>

        </div>
    )
}